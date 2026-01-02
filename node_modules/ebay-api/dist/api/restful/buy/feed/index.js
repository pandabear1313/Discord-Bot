import Restful from '../../index.js';
class Feed extends Restful {
    get basePath() {
        return '/buy/feed/v1_beta';
    }
    getItemFeed(params, range) {
        return this.get(`/item`, {
            params,
            headers: {
                'Range': range
            }
        });
    }
    getItemGroupFeed(params, range) {
        return this.get(`/item_group`, {
            params,
            headers: {
                'Range': range
            }
        });
    }
    getItemSnapshotFeed(params, snapshotDate, range) {
        return this.get(`/item_snapshot`, {
            params: {
                ...params,
                snapshot_date: snapshotDate
            },
            headers: {
                'Range': range
            }
        });
    }
    getProductFeed(params, snapshotDate, range) {
        return this.get(`/product`, {
            params: {
                ...params,
                snapshot_date: snapshotDate
            },
            headers: {
                'Range': range
            }
        });
    }
}
Feed.id = 'Feed';
export default Feed;
