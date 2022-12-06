const express = require('express');
const db = require('./models/index');
const dbConnection = require('./models/index');

const PORT = 3500;
const app = express();

(async () => {
  await db.sequelize.sync();
})();

app.get('/', (req, res) => {
  console.log(typeof (res));
  console.log(typeof (req));
  res.end("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is listening to the PORT ${PORT}`);
});