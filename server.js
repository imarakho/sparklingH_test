let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});