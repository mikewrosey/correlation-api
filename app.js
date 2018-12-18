const express = require('express')
const bodyParser = require('body-parser')

const mainRoutes = require('./routes/main')
const analyticsRoutes = require('./routes/analytics')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(mainRoutes)
app.use(analyticsRoutes)

// Otherwise
app.use((req, res, next) => {
    // set and send status 404
    res.status(404).send()
})

app.listen(3000)