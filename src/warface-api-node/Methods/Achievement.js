class Achievement
{
    constructor(controller)
    {
        this.controller = controller
    }

    catalog = () => this.controller.requestQuery('achievement/catalog')
}

module.exports = Achievement