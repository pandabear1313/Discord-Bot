const { CronJob } = require('cron');
const DB = require('./Database');
const { searchItems, getItem, getSoldItems } = require('./ebay');
const MarketAnalyzer = require('./MarketAnalyzer');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

function startMonitoring(client) {
    console.log('Starting Background Jobs...');

    // 1. Monitor Job: Check for deals (Every 5 minutes)
    const monitorJob = new CronJob('*/5 * * * *', async () => {
        try {
            console.log('Running Deal Monitor...');
            const monitors = DB.getMonitors();

            for (const mon of monitors) {
                // Search for new items
                const results = await searchItems(mon.query, 10);
                const soldItems = await getSoldItems(mon.query);
                const fairPrice = MarketAnalyzer.calculateFairPrice(soldItems);

                for (const item of results) {
                    if (DB.isSeen(item.itemId)) continue;

                    const price = parseFloat(item.price.value);
                    const deal = MarketAnalyzer.getDealMeter(price, fairPrice);

                    // Alert if "Good Deal" (Score < 100) or simply new if user wants all? 
                    // Requirement: "ping ... specifically when a New Low Price is detected"
                    // Let's alert if it's a "Good Deal" (ratio < 100)
                    if (deal.score < 100) {
                        try {
                            const channel = await client.channels.fetch(mon.channel_id);
                            if (channel) {
                                const embed = new EmbedBuilder()
                                    .setTitle(`🚨 New Deal: ${item.title}`)
                                    .setURL(item.itemWebUrl)
                                    .setDescription(`**Price:** ${item.price.value} ${item.price.currency}\n**Fair Price:** $${fairPrice}`)
                                    .addFields({ name: 'Deal Meter', value: `${deal.bar} ${deal.score}% ${deal.label}` })
                                    .setThumbnail(item.image ? item.image.imageUrl : null)
                                    .setColor(deal.color);

                                await channel.send({ content: `<@${mon.user_id}>`, embeds: [embed] });
                            }
                        } catch (e) {
                            console.error('Failed to notify channel:', e.message);
                        }
                    }
                    DB.markSeen(item.itemId);
                }
            }
        } catch (err) {
            console.error('Error in Monitor Job:', err);
        }
    });

    // 2. Bid Job: Check status (Every 30 seconds)
    const bidJob = new CronJob('*/30 * * * * *', async () => {
        try {
            const bids = DB.getActiveBids();
            for (const bid of bids) {
                const item = await getItem(bid.item_id);
                if (!item) continue;

                // Check if ended
                const now = new Date();
                const end = new Date(item.itemEndDate);

                if (now > end) {
                    // Determine win/loss (Simulated: if price <= maxBid we assume win for demo)
                    // In reality, we'd check eBay "currentHighBidder" via API (requires OAuth scopes)
                    const price = parseFloat(item.price.value);
                    if (price <= bid.max_bid) {
                        DB.updateBidStatus(bid.id, 'won');
                        const user = await client.users.fetch(bid.user_id);
                        if (user) user.send(`🎉 **You Won!** Item: ${item.title}\nFinal Price: ${price}`);
                    } else {
                        DB.updateBidStatus(bid.id, 'lost');
                        const user = await client.users.fetch(bid.user_id);
                        if (user) user.send(`😢 **Lost.** Item: ${item.title}\nSold for: ${price} (Your Max: ${bid.max_bid})`);
                    }
                    continue;
                }

                // Check Outbid
                const currentPrice = parseFloat(item.price.value);
                if (currentPrice > bid.current_bid) {
                    // Price increased
                    // If price > max_bid -> Outbid Alert
                    if (currentPrice > bid.max_bid) {
                        const user = await client.users.fetch(bid.user_id);
                        if (user) {
                            const row = new ActionRowBuilder().addComponents(
                                new ButtonBuilder().setCustomId(`bid_inc_5_${bid.item_id}`).setLabel('Increase +$5').setStyle(ButtonStyle.Primary),
                                new ButtonBuilder().setCustomId(`bid_inc_10p_${bid.item_id}`).setLabel('Increase +10%').setStyle(ButtonStyle.Primary)
                            );
                            await user.send({ content: `⚠️ **OUTBID ALERT!**\nItem: ${item.title}\nCurrent: ${currentPrice} (Max: ${bid.max_bid})`, components: [row] });
                            // Mark as outbid until user updates
                            DB.updateBidStatus(bid.id, 'outbid');
                        }
                    } else {
                        // Still winning (or in game), update local tracking
                        // Note: We don't have "my current bid" in DB separate from item price really without full API syncing
                    }
                }
            }
        } catch (err) {
            console.error('Error in Bid Job:', err);
        }
    });

    monitorJob.start();
    bidJob.start();
}

module.exports = { startMonitoring };
