const express = require('express')
const router = express.Router()

const mainController = require('../controllers/main')

router.get('/day', mainController.getDay)
router.put('/', mainController.postDay)

module.exports = router