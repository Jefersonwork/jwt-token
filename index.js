require("dotenv-safe").config();
var http = require('http');
const express = require('express')
const app = express()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
var jwt = require('jsonwebtoken');


app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/login', (req, res, next) => {
  if(req.body.user === 'tarley' && req.body.pwd === '123'){
    const id = 1;
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    });
    res.status(200).send({ auth: true, token: token });
  }
  
  res.status(500).send('Login inválido!');
})

var server = http.createServer(app);
server.listen(3000);