const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
// allow json formatting on requests
app.use(express.json());

// iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
});

// require model schemas
requireDir('./src/models');
// require('./src/models/Product');

const Product = mongoose.model('Product');

// routes
app.use('/api', require('./src/routes'));

app.listen(3001);
