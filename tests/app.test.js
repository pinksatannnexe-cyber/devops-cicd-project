const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  test('GET /api/hello should return a message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello from DevOps CI/CD!');
  });

  test('GET /api/status should return OK', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});