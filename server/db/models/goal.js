const Sequelize = require('sequelize')
const db = require('../db')

const Goal = db.define('goal',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    message: {
        type: Sequelize.STRING
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    targetDate: {
        type: Sequelize.DATE,
        allowNull: false
    }
}) 

module.exports = Goal