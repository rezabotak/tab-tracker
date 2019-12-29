const { Histories, Song } = require('../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const userId = req.user.id
            const histories = await Histories.findAll({
                where: { UserId: userId },
                include: [{
                    model: Song
                }]
            }).map(history => history.toJSON()).map(history => _.extend({}, history.Song, history))
            res.send(_.uniqBy(histories, history => history.SongId))
        } catch (err) {
            res.send(err)
        }
    },
    async post(req, res) {
        try {
            const userId = req.user.id
            const { songId } = req.body
            const history = await Histories.create({
                SongId: songId,
                UserId: userId
            })
            res.send(history)
        } catch (err) {
            res.send(err)
        }
    }
}