import { chai } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  describe('Addition operation', () => {
    it('should add and round 2 positive numbers correctly', () => {
      expect(calculateNumber('SUM', 3.6, 7.2)).to.equal(11);
    });

    it('should round and add 2 negative numbers correctly', () => {
      expect(calculateNumber('SUM', -3.6, -7.2)).to.equal(-11);
    });

    it('should round and add a positive and negative number', () => {
      expect(calculateNumber('SUM', 3.6, -7.2)).to.equal(-3);
    });

    it('should round and add a negative and a positive number', () => {
      expect(calculateNumber('SUM', -3.6, 7.2)).to.equal(3);
    });
  });

  describe('Subtraction Operation', () => {
    it('should round and subtract 2 positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 7.2, 3.6)).to.equal(3);
    });

    it('should round and subtract 2 negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -7.2, -3.6)).to.equal(-3);
    });

    it('should round and subtract a positive and negative number', () => {
      expect(calculateNumber('SUBTRACT', 3.6, -7.2)).to.equal(11);
    });

    it('should round and subtract a negative and positive number', () => {
      expect(calculateNumber('SUBTRACT', -3.6, 7.2)).to.equal(-11);
    });
  });

  describe('Division operation', () => {
    it('should round and divide two positive numbers correctly', () => {
      expect(calculateNumber('DIVIDE', 7.2, 3.6)).to.equal(1.75);
    });

    it('should round and divide two negative numbers correctly', () => {
      expect(calculateNumber('DIVIDE', -7.2, -3.6)).to.equal(1.75);
    });

    it('should round and divide a positive and a negative number', () => {
      expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25);
    });

    it('should round and divide a negative and a positive number', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 3.6, 0)).to.equal('Error');
    });
  });
});
