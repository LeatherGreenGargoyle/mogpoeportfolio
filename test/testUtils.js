const testUtils = {
  stripeResponseHandler: (status, response) => {
    if (response.error) {
      console.log('Error creating test token')
      return 'Error creating test token'
    }
    const testToken = response.id
    return testToken
  },
}

module.exports = testUtils
