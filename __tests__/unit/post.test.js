const mongoose = require('mongoose');

const PostModel = require('../../src/models/Post');
const postData = { description: 'Teste: postou anedota' };

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

  // testa função post com dados validos
  it('create a post successfully', async () => {

    const post = await PostModel.create(postData);

    expect(post._id).toBeDefined();
    expect(post.description).toBe(postData.description);
  });

  // testa função post sem campo requerido
  it('create a post without required field should failed ', async () => {

    let err;

    try {
      await PostModel.create({ description: '' });

    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    expect(err.errors.description).toBeDefined();
  });

});