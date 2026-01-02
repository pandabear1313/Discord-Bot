import Restful from '../../index.js';
class Recommendation extends Restful {
    get basePath() {
        return '/sell/recommendation/v1';
    }
    findListingRecommendations({ filter, limit, offset } = {}, body) {
        return this.post(`/find`, {
            data: body,
            params: {
                filter,
                limit,
                offset
            }
        });
    }
}
Recommendation.id = 'Recommendation';
export default Recommendation;
