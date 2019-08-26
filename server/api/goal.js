const router = require('express').Router()
const {Goal} = require('../db/models')
module.exports = router
// const db = require('../db')
// const Sequelize = require('sequelize')

router.get('/', async (req, res, next) => {
    try {
        let goals = await Goal.findAll()
        console.log(goals)
        res.json(goals)
    } catch (error) {
        next(error)
    }
})
