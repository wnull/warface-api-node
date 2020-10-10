const RequestController = require('./RequestController');
const config = require('./Export')

class ApiClient extends RequestController
{
    constructor(current = RequestController.REGION_RU, obj = { region: current })
    {
        super(obj)

        return new Proxy(this, {
            get(target, method)
            {
                return () => config.tree.hasOwnProperty(method)
                    ? new config.tree[method](new RequestController(obj))
                    : null
            }
        })
    }
}

module.exports = ApiClient