import express = require('express');
import path = require('path');

const app: express.Application = express();

app.use(express.static('dist/client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
