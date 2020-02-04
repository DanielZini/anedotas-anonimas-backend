require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { DB_USER, DB_PASS, DB_NAME } = process.env;

// conecta com o banco
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-vdben.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected'))
  .catch(err => console.log('Caught: ', err.stack));

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

module.exports = app