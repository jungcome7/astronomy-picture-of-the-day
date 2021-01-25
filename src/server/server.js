/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const express = require('express');

const port = 9999;
const app = express();

app.use('/', express.static(path.join(__dirname, '../../build')));

app.listen(port, function () {
  console.log('Server started: http://localhost:' + port + '/');
});
