const router = require('express').Router()
const {Goal} = require('../db/models')
const db = require('../db')
const Sequelize = require('sequelize')

router.get('/', async (req, res, next) => {
    try {
        const goals = await Goal.findAll({
            id: 1
        })
        console.log(goals)
        res.json(goals)
    } catch (error) {
        next(error)
    }
})