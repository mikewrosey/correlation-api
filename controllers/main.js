const Day = require('../models/day')

exports.getDay = (req, res, next) => {

}
exports.postDay = (req, res, next) => {
    Day.create({
        title: 'test'
    })
}
exports.updateDay = (req, res, next) => {

}