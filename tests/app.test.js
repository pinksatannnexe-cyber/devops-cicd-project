const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  test('GET /api/status should return OK', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });

  test('GET /api/weather/:city should have correct route', async () => {
    const response = await request(app).get('/api/weather/Paris');
    // On teste juste que la route existe (pas 404)
    expect([200, 500]).toContain(response.statusCode);
  });
});