const router = require('express').Router()
const {Goal} = require('../db/models')
module.exports = router

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

router.get('/user/:userId/list', async (req, res, next) => {
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

router.get('/user/:userId/main', async (req,res, next) => {
    try {
        let mainGoal = await Goal.findOne({
            where: {
                userId: req.params.userId,
                mainGoal: true
            },
            include: [{
                model: Goal, as: 'milestone'
            }]
        })
        res.json(mainGoal)
    } catch (error) {
        next (error)
    }
})
