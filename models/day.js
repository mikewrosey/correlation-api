const Sequelize = require('sequelize')
const sequelize = require('../util/database')

// name, structure
const Day = sequelize.define('day', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Day