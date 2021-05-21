const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());

const data = require('./data.json')

const jwtSecret = 'shhhhhhhhhhhhhhhhhhhh';

app.post('/jwt', (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: 'hod' }, jwtSecret, {expiresIn: '3s'})
  });
});

app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));

app.post('/data/root', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data.root)
})

app.post('/data/root/:name',  (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data.root.find(data => data.name === req.params.name))
})

app.post('/data/matrix',  (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data.matrix)
})

app.post('/data/matrix/:name',  (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data.matrix.find(data => data.name === req.params.name))
})

app.post('/data/interpolation',  (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data.interpolation)
})

app.post('/data/interpolation/:name',  (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data.interpolation.find(data => data.name === req.params.name))
})

app.listen(4040);
console.log('App running on localhost:4040');