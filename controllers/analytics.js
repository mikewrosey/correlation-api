const Day = require('../models/day')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// returns all days between two specific 
// dates, start/end inclusive
exports.getAnalytics = (req, res, next) => {
    const startDate = req.query.startDate
    const endDate = req.query.endDate

    if (!startDate || !endDate) res.send('Missing date value')
        
    const dateBetween = { 
        pageDate: {
            [Op.between]: [startDate, endDate]
        }
    }

    Day.findAll({where: dateBetween})
        .then((pages) => {
            res.send(pages)
        })
        .catch((err) => {
            console.error(err)
            res.send(err)
        })
}