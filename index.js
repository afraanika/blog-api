require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT;

const app = express();

(async () => {
  await db.sequelize.sync();
})();

app.use(bodyParser.json());
app.use('/', authRoutes);
app.use('/users', userRoutes);
 
app.listen(PORT, () => {
  console.log(`Server is listening to the PORT ${PORT}`);
});