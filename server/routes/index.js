const ordersRoutes = require('./ordersRoutes.js')

module.exports = app => {
  app.use('/orders', ordersRoutes)
}
