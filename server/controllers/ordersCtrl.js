const customer = {
  pay: (req, res) => {
    console.log('Payment API hit')
    res.send('Payment API hit')
  },
}

module.exports = {
  customer,
}
