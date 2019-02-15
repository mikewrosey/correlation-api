const express = require('express')
const router = express.Router()

const settingsController = require('../controllers/settings')

router.get('/settings', settingsController.getSettings)
router.put('/settings', settingsController.postSettings)

module.exports = router