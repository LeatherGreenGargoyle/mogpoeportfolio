const router = require('express').Router()
const ordersCtrl = require('../controllers/ordersCtrl')

router.post('/pay', ordersCtrl.customer.pay)

module.exports = router
