const Sequelize = require('sequelize')

// schema, username, password
const sequelize = new Sequelize('correlation', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    operatorsAliases: false
})

module.exports = sequelize