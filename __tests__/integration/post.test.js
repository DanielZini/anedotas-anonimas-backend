const request = require('supertest');

const app = require('../../src/app');

describe('Post', () => {
  it('should do a post', async () => {

    const response = await request(app)
      .post('/posts')
      .send({
        description: "Teste: postou anedota"
      });

    expect(response.status).toBe(200);
  })
  it('should list all post', async () => {

    const response = await request(app)
      .get('/posts');

    expect(response.status).toBe(200);
  })
});