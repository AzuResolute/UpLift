const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')

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
        defaultValue: Date.now()
    },
    targetDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    mainGoal: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
}) 

module.exports = Goal