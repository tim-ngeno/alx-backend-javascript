import { expect } from 'chai';
import sinon from 'sinon';
import sendPaymentRequestToApi from './3-payment.js';
import Utils from './utils.js';

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', ()=> {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);

    calculateNumberSpy.restore();
  });

  it('should log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
    consoleSpy.restore();
  });
});
