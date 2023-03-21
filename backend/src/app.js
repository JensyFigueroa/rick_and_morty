/* Todo esto lo traemos de server.js ya que sino los test no pasan */
const express = require('express');
const app = express();
const router = require('./routes/index.js')
const cors = require('cors')

const corsOption = {
    origin: '*',
    credentials: true, //Access-Control-Allow-Origin: true
    optionSuccessStatus: 200
};
app.use(cors(corsOption))

app.use(express.json());
app.use('/', router);

module.exports = app;