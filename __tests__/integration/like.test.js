const request = require('supertest');

const app = require('../../src/app');
const Post = require('../../src/models/Post');

describe('Like', () => {
  it('should do a like in a new post', async () => {

    const post = await Post.create({
      description: 'Teste: postou anedota para testar like'
    });

    const response = await request(app)
      .put(`/posts/${post._id}/like`);

    expect(response.status).toBe(200);
  })
});