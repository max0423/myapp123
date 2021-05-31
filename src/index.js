import express from 'express';
import add from './lib'
const app = express();

debugger;

app.get('/', function (req, res) {

  var dd = add(1+1);

  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
