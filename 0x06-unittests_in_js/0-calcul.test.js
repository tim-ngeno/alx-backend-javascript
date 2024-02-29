const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round and sum 2 positive numbers correctly', () => {
    assert.strictEqual(calculateNumber(3.6, 7.2), 11);
  });

  it('should round and sum 2 negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-3.6, -7.2), -11);
  });

  it('should round and sum a positive and a negative number', () => {
    assert.strictEqual(calculateNumber(3.6, -7.2), -3);
  });

  it('should round and sum a negative and positive number', () => {
    assert.strictEqual(calculateNumber(-3.6, 7.2), 3);
  });

  it('should round and sum 2 zero numbers correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should round and sum a positive number and zero correctly', () =>
    {
      assert.strictEqual(calculateNumber(3.6, 0), 4);
    });

  it('should round and sum zero and negative number correctly', () => {
    assert.strictEqual(calculateNumber(0, -7.2), -7);
  });
});
