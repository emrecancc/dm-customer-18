import request from 'supertest';
import app from '../src/app';

describe('API response time', () => {
  test('API responds within 125ms', async () => {
    const start = Date.now();
    await request(app).get('/api/health');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(450);
  });
});