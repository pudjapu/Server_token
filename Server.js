const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());

const data = require('./data.json')

const jwtSecret = 'shhhhhhhhhhhhhhhhhhhh';

app.get('/dwadwaf4a5w5ffr531sd5qw1d5aw1d32s54f@dwad54ddwad%4d5!@dwa2dw', (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: 'hod' }, jwtSecret, {expiresIn: '5s'})
  });
});

app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));

app.get('/data', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data)
});

app.listen(4040);
console.log('App running on localhost:4040');