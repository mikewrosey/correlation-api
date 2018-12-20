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
    title: Sequelize.STRING
})

module.exports = Day