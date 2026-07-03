const request = require('supertest');
const server = require('../src/server');

beforeAll(() => {
  server.listen(3039);
});

afterAll(() => {
  server.close();
});

describe('Server', () => {
  it('responds to GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});