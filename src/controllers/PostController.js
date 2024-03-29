const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt');

    return res.json(posts);
  },

  async store(req, res) {

    const { description } = req.body;

    try {
      const post = await Post.create({ description });
      return res.json(post);
    } catch (err) {
      console.log(err);
      return res.json({ msg: 'Verifique os campos' });
    }

  }
}   