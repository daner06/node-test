const request = require('supertest');
const app = require('../../../index');

const { expect } = require('chai');

const URL = '/api/v1/';

describe('Search', () => {
    describe('GET /suggestions', () => {
        it('should return an array of results', async () => {
            request(app)
            .get(`${URL}suggestions`)
            .send()
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                expect(err).to.equals(null);
                expect(res.body).to.be.a('array');
            })
        });
    });
});
