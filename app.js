const express = require('express')
const bodyParser = require('body-parser')

const sequelize = require('./util/database')

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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync({logging: console.log}).then((resp) => {
    app.listen(3000)
})
.catch((err) => {
    console.log(err)
})

