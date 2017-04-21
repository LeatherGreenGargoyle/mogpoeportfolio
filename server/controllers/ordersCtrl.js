const stripe = require('stripe')(process.env.STRIPE_TEST_SECRET_KEY)

const customer = {
  pay: (req, res) => {
    console.log(`Serving PAY request, req is: ${req}`)
    const token = req.stripeToken
    console.log(`Token is: ${token.id}`)
    console.log(`Req amount is ${req.amount}`)
    stripe.charges.create({
      amount: req.amount,
      currency: 'usd',
      source: token,
    }, (err, charge) => {
      if (err) {
        console.log(err)
        res.send(err)
      }
      if (charge) {
        console.log(charge)
        res.send(charge)
      }
    })
  },
}

module.exports = {
  customer,
}
