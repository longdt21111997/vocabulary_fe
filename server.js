//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/vocabulary-fe'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: './dist/vocabulary-fe'}),
);

app.listen(process.env.PORT || 8080);
