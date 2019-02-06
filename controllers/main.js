const Day = require('../models/day')

exports.getDay = (req, res, next) => {
    if (!req.query.pageDate) res.send('No page date')

    const page = { pageDate: req.query.pageDate }

    Day.findOne({where: page})
        .then((page) => {
            res.send(page)
        })
        .catch((err) => {
            console.error(err)
            res.send(err)
        })
}

exports.postDay = (req, res, next) => {
    const day = {
        foods: req.body.foods,
        meds: req.body.meds,
        symptoms: req.body.symptoms,
        pageDate: req.body.pageDate
    }

    Day.upsert(day)
        .then(() => {
            res.status(200);
            res.send(day);
        })
        .catch((err) => {
            console.error(err)
            res.send(err)
        })
}