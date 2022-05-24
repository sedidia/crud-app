const express = require('express')
const route = express.Router()

const services = require('../services/render')

route.get('/',services.homeRoutes)

route.get('/add_user',services.add_user)

route.get('/update_user',services.update_user)

module.exports = route