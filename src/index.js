
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// configura servidor http
const server = require('http').Server(app);

// conecta com o banco
mongoose.connect('mongodb+srv://master:qwe123@cluster0-vdben.mongodb.net/anedotasAnonimas?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3333);