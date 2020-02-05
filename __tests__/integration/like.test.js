const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../../src/app');
const PostModel = require('../../src/models/Post');

describe('Like', () => {

  // conecta com banco local
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .catch(err => console.log('Caught: ', err.stack));
  });

  // exclui dados antes de testar
  beforeEach(async () => {
    await PostModel.deleteMany({});
  });

  // fecha conexão após testar
  afterAll(async () => {
    await mongoose.close();
  });

  // testa a rota de like
  it('should do a like in a new post', async () => {

    const post = await PostModel.create({
      description: 'Teste: postou anedota para testar like'
    });

    const response = await request(app)
      .put(`/posts/${post._id}/like`);

    expect(response.status).toBe(200);
  });

});