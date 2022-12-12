require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const blogRoute = require('./routes/blogRoute');

const PORT = process.env.PORT;

const app = express();

(async () => {
  await db.sequelize.sync();
})();

app.use(bodyParser.json());
app.use('/', authRoute);
app.use('/users', userRoute);
app.use('/blogs', blogRoute);
 
app.listen(PORT, () => {
  console.log(`Server is listening to the PORT ${PORT}`);
});