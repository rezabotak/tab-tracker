module.exports = sequelize => {
    const Histories = sequelize.define('Histories', {})
    Histories.associate = models => {
        Histories.belongsTo(models.User)
        Histories.belongsTo(models.Song)
    }
    return Histories
}