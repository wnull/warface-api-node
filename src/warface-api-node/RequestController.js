const dependencies = require('./Export');

class RequestController
{
    static REGION_RU = 'http://api.warface.ru/'
    static REGION_EN = 'http://api.wf.my.com/'

    constructor(obj)
    {
        if (![RequestController.REGION_EN, RequestController.REGION_RU].includes(obj.region)) {
            throw new Error('Incorrect region')
        }

        this.location = obj.region
    }

    requestQuery = (url, params = {}) => new Promise((resolve, reject) => dependencies.rp(
        {
            uri: this.location + url,
            qs: params,
            json: true
        })
        .then(res => resolve(res))
        .catch(err => err.statusCode === 400 ? resolve(err.error) : reject(err))
    )
}

module.exports = RequestController