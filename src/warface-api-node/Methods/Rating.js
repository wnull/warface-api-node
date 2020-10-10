class Rating
{
    constructor(controller)
    {
        this.controller = controller
    }

    top100 = (server = 0, game_class = 0) => this.controller.requestQuery('rating/top100', {
        server: server,
        class: game_class
    })

    monthly = (server, clan, league = 0, page = 0) => this.controller.requestQuery('rating/monthly', {
        server: server,
        clan: clan,
        league: league,
        page: page
    })

    clan = (server) => this.controller.requestQuery('rating/clan', {
        server: server
    })
}

module.exports = Rating