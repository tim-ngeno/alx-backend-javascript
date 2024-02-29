const { expect } = require('chai');
const getPaymentTokenAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal(
	  { data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  });
});
