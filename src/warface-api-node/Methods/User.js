class User
{
    constructor(controller)
    {
        this.controller = controller
    }

    stat = (name, server) => this.controller.requestQuery('user/stat', {
        name: name,
        server: server
    })

    achievements = (name, server) => this.controller.requestQuery('user/achievements', {
        name: name,
        server: server
    })
}

module.exports = User