const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Settings = sequelize.define('settings', {
    foods: { 
        type: Sequelize.BOOLEAN, 
    },
    meds: { 
        type: Sequelize.BOOLEAN, 
    },
    exercises: {
        type: Sequelize.BOOLEAN, 
    },
    symptoms: { 
        type: Sequelize.BOOLEAN, 
    },
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = Settings