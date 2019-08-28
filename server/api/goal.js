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

router.get('/id/:goalId', async (req, res, next) => {
    try {
        let goal = await Goal.findByPk(req.params.goalId)
        res.json(goal)
    } catch (error) {
        next (error)
    }
})

router.get('/id/:parentGoalId/expanded', async (req, res, next) => {
    try {
        let goal = {}
        let {parentGoalId} = req.params
        goal.parent = await Goal.findByPk(req.params.goalId)
        goal.children = await Goal.findAll({
            where: {
                parentGoalId
            }
        })
        res.json(goal)
    } catch (error) {
        next (error)
    }
})