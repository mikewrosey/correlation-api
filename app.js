const express = require('express')
const bodyParser = require('body-parser')

const mainRoutes = require('./routes/main')
const analyticsRoutes = require('./routes/analytics')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(mainRoutes)
app.use(analyticsRoutes)

app.listen(3000)