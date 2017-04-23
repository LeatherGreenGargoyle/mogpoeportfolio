// const assert = require('chai')
const expect = require('chai').expect
const request = require('supertest')
const app = require('../server/server.js')
// const testUtils = require('./testUtils')

const testSecret = process.env.STRIPE_TEST_SECRET_KEY
const Stripe = require('stripe')(testSecret)

describe('Orders API', () => {
  const tokenTestReqBody = {}
  tokenTestReqBody.amount = 666
  before(done => {
    Stripe.tokens.create({
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2020,
        cvc: '123',
      },
    }, (err, token) => {
      // if(err) console.log('Token creation error: ', err)
      if (err) {
        console.log(`Token creation error: ${err}`)
      } else {
        console.log(`Token object created, with keys: ${Object.keys(token)}`)
      }
      tokenTestReqBody.stripeToken = token
      done()
    })
  })

  it('should accept a token, and return a charge object', () => {
    console.log(`tokenTestReqBody.stripeToken.id is ${tokenTestReqBody.stripeToken.id}`)
    return request(app)
      .post('/orders/pay')
      .send(tokenTestReqBody)
      .expect(200)
      .expect(res => {
        // console.log('Test order res is: ', res)
        const chargeObj = JSON.parse(res.text)
        console.log('JSON parsed res.text: ', chargeObj)
        // charge = JSON.parse(res).text
        // console.log('charge: ', charge)
        expect(chargeObj.id).to.be.a('string')
        expect(chargeObj.amount).to.be.equal(666)
      })
  })
})
