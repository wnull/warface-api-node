class Weapon
{
    constructor(controller)
    {
        this.controller = controller
    }

    catalog = () => this.controller.requestQuery('weapon/catalog')
}

module.exports = Weapon