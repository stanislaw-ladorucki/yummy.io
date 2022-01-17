import express = require('express');
import React = require('react');
import ReactDOMServer = require('react-dom/server');
import App from './App';


const app = express();

const port : Number = 3000;

app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(<App>Halo goryl</App>)
  )
})
app.listen(port);