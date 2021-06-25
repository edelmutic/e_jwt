const request = require('supertest');

const app = require('./index').app;

it('should return Hello Test', function (done) {
  request(app).get('/test').expect('Hello from test').end(done);
});
