const stripe = require('stripe')(process.env.STRIPE_TEST_SECRET_KEY)

const customer = {
  pay: (req, res) => {
    console.log(`Serving PAY request, number of keys in req.body is: ${Object.keys(req.body)}`)
    const token = req.body.stripeToken
    console.log(`Token has keys: ${Object.keys(token)}`)
    console.log(`Req amount is ${req.body.amount}`)
    stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      source: token.id,
    }, (err, charge) => {
      if (err) {
        console.log('Charge err: ', err)
        res.send(err)
      }
      if (charge) {
        console.log('Charge obj created: ', charge)
        res.send(charge)
      }
    })
  },
}

module.exports = {
  customer,
}
