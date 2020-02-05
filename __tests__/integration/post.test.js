const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../../src/app');

const PostModel = require('../../src/models/Post');

describe('Post', () => {

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

  // testa a rota de post
  it('should do a post', async () => {

    const response = await request(app)
      .post('/posts')
      .send({
        description: "Teste: postou anedota"
      });

    expect(response.status).toBe(200);
  })

  //testa a rota de listagem de post
  it('should list all post', async () => {

    const response = await request(app)
      .get('/posts');

    expect(response.status).toBe(200);
  });

});