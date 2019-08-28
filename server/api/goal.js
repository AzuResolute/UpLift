const router = require('express').Router()
const {Goal} = require('../db/models')
module.exports = router
// const db = require('../db')
// const Sequelize = require('sequelize')

// get all
router.get('/', async (req, res, next) => {
    try {
        let goals = await Goal.findAll()
        res.json(goals)
    } catch (error) {
        next(error)
    }
})

router.get('/goal/:goalId/', async (req, res, next) => {
    try {
        let goal = await Goal.findByPk(req.params.goalId, {
            include: [{
                model: Goal, as: 'milestone'
            }]
        })
        res.json(goal)
    } catch (error) {
        next (error)
    }
})

router.get('/user/:userId', async (req, res, next) => {
    try {
        let goals = await Goal.findAll({
            where: {
                userId: req.params.userId
            },
            include: [{
                model: Goal, as: 'milestone'
            }]
        })
        res.json(goals)
    } catch (error) {
        next (error)
    }
})