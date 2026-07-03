const request = require('supertest');
const server = require('../server');

describe('Server', () => {
  beforeAll(() => {
    server.listen(3179);
  });

  afterAll(() => {
    server.close();
  });

  test('GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});