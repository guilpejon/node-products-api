const express = require('express');
const mongoose = require('mongoose');

// iniciando o app
const app = express();

// iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// root route
app.get('/', (req, res) => {
  res.send('Hello 2!');
});

app.listen(3001);
