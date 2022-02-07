const express = require('express');
const app = express();
const path = require('path');

const modPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(modPath);
app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
