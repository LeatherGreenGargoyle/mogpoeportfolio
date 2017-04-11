const assert = require('chai').assert;
const add = require('./testFunctions').add

describe('add function', function() {
  it('should add numbers', function() {
    assert.strictEqual(add(1,2), 3)
  })
})