class Game
{
    constructor(controller)
    {
        this.controller = controller
    }

    missions = () => this.controller.requestQuery('game/missions')
}

module.exports = Game