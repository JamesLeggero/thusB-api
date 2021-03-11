const express = require('express')
const router = express.Router()
const db = require('../config/database')
const User = require('../models/User')

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})

router.post('/', async (req, res) => {
    const user = await User.create(req.body)
    res.status(200).send('User created with email: ' + user.email)
})

module.exports = router