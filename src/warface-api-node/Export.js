module.exports = {
    rp: require('request-promise'),
    tree: {
        'rating': require('./Methods/Rating'),
        'weapon': require('./Methods/Weapon'),
        'clan': require('./Methods/Clan'),
        'achievement': require('./Methods/Achievement'),
        'game': require('./Methods/Game'),
        'user': require('./Methods/User'),
    }
}