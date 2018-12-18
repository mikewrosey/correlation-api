const Sequelize = require('sequelize')

// schema, username, password
const sequelize = new Sequelize('correlation', 'root', 'correlation', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize