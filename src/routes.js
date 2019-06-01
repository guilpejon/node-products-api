const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController.js');

routes.get('/products', ProductController.index);
routes.get('/product/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;
