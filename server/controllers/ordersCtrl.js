const customer = {
  pay: (req, res) => {
    console.log('Payment API hit')
    res.send('Payment received')
  },
}

module.exports = {
  customer,
}
