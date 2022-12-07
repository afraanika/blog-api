const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');
const userRoutes = require('./routes/userRoutes');

const PORT = 3500;
const app = express();

(async () => {
  await db.sequelize.sync();
})();

app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.end("Home Page");
});

 
app.listen(PORT, () => {
  console.log(`Server is listening to the PORT ${PORT}`);
});