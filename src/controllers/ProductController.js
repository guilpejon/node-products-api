const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1, limit = 5 } = req.query;
    const products = await Product.paginate({}, { page, limit: Number(limit) });

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    // new: true is required to return the updated object, not the old one
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
