class Clan
{
    constructor(controller)
    {
        this.controller = controller
    }

    members = (clan, server) => this.controller.requestQuery('clan/members', {
        clan: clan,
        server: server
    })
}

module.exports = Clan