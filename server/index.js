const express = require('express');
const jsonServer = require('json-server');
const path = require('path')

const app = express();

app.use('/api', jsonServer.router('db.json'));
app.use('/app2', express.static(path.join(__dirname, 'public/app2')));
app.use('/app1', express.static(path.join(__dirname, 'public/app1')));
app.listen(3000, () => {
  console.log('JSON Server is running')
})