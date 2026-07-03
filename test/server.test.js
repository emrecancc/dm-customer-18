const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3159);
// Ensure the server is closed after all tests to prevent port conflicts
afterAll(() => server.close());

describe('Server', () => {
  it('should respond to GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});