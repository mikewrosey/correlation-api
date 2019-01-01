const Day = require('../models/day')

exports.getDay = (req, res, next) => {
    res.write('Test')
    res.end()
}
exports.postDay = (req, res, next) => {
    Day.create({
        foods: req.body.foods,
        meds: req.body.meds,
        symptoms: req.body.symptoms
    })

    res.end()
}
exports.updateDay = (req, res, next) => {

}