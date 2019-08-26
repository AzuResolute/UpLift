const router = require('express').Router()
const {Goal} = require('../db/models')
const db = require('../db')
const Sequelize = require('sequelize')

router.get('/', async (req, res, next) => {
    try {
        const goals = await Goal.findAll()
        res.send(goals)
    } catch (error) {
        next(error)
    }
})