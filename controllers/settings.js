const Settings = require('../models/settings')

exports.getSettings = (req, res, next) => {
    Settings.findOne()
        .then((settings) => {
            res.send(settings)
        })
        .catch((err) => {
            console.error(err)
            res.send(err)
        })
}

exports.postSettings = (req, res, next) => {
    const settings = {
        foods: req.body.foods,
        meds: req.body.meds,
        symptoms: req.body.symptoms,
        exercises: req.body.exercises,
        id: 1
    }

    Settings.upsert(settings)
        .then(() => {
            res.status(200);
            res.send(settings);
        })
        .catch((err) => {
            console.error(err)
            res.send(err)
        })
}