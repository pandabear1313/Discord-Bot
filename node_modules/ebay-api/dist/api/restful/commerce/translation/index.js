import Restful from '../../index.js';
class Translation extends Restful {
    get basePath() {
        return '/commerce/translation/v1_beta';
    }
    translate(body) {
        return this.post(`/translate`, body);
    }
}
Translation.id = 'Translation';
export default Translation;
