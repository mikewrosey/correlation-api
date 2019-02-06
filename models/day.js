const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Day = sequelize.define('day', {
    foods: { 
        type: Sequelize.STRING, 
        get() {
            return JSON.parse(this.getDataValue('foods'));
        }, 
        set(val) {
            return this.setDataValue('foods', JSON.stringify(val));
        }
    },
    meds: { 
        type: Sequelize.STRING, 
        get() {
            return JSON.parse(this.getDataValue('meds'));
        }, 
        set(val) {
            return this.setDataValue('meds', JSON.stringify(val));
        }
    },
    symptoms: { 
        type: Sequelize.STRING, 
        get() {
            return JSON.parse(this.getDataValue('symptoms'));
        }, 
        set(val) {
            return this.setDataValue('symptoms', JSON.stringify(val));
        }
    },
    pageDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = Day