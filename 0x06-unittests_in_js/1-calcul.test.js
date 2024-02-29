const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('Addition operation', () => {
    it('should add and round 2 positive numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 3.6, 7.2), 11);
    });

    it('should round and add 2 negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -3.6, -7.2), -11);
    });

    it('should round and add a positive and negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 3.6, -7.2), -3);
    });

    it('should round and add a negative and a positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -3.6, 7.2), 3);
    });
  });

  describe('Subtraction Operation', () => {
    it('should round and subtract 2 positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7.2, 3.6), 3);
    });

    it('should round and subtract 2 negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -7.2, -3.6), -3);
    });

    it('should round and subtract a positive and negative number', () =>
      {
	assert.strictEqual(calculateNumber('SUBTRACT', 3.6, -7.2), 11);
      });

    it('should round and subtract a negative and positive number', () =>
      {
	assert.strictEqual(calculateNumber('SUBTRACT', -3.6, 7.2), -11);
      });
  });

  describe('Division operation', () => {
    it('should round and divide two positive numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.2, 3.6), 1.75);
    });

    it('should round and divide two negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.2, -3.6), 1.75);
    });

    it('should round and divide a positive and a negative number', () =>
      {
	assert.strictEqual(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
      });

    it('should round and divide a negative and a positive number', () =>
      {
	assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
      });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.6, 0), 'Error');
    });
  });
});
