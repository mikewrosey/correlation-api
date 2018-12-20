const express = require('express')
const router = express.Router()

const mainController = require('../controllers/main')

router.get('/', mainController.getDay)
router.post('/', mainController.postDay)
router.put('/', mainController.updateDay)

module.exports = router