// const assert = require('chai')
const expect = require('chai').expect
const request = require('supertest')
const app = require('../server/server.js')
// const testUtils = require('./testUtils')

const testSecret = process.env.STRIPE_TEST_SECRET_KEY
const Stripe = require('stripe')(testSecret)

describe('Orders API', () => {
  console.log(`Test secret is: ${testSecret}`)
  const tokenTestReqBody = {}
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
        console.log(`Token object created, with ID: ${token.id}`)
      }
      tokenTestReqBody.token = token
      done()
    })
  })

  it('should accept a token, and return a success message', () => {
    return request(app)
      .post('/orders/pay')
      .send(tokenTestReqBody)
      .expect(200)
      .expect(res => {
        expect(res.text).to.equal('Payment received')
      })
  })
})
