var express = require('express');
var app = express();
app.use(function (req, res, next) {
  res.send('');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening');
});
