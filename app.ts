require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 4500;
const app = express();

app.get('/', (req, res) => {
    res.end("Welcome to our blogsite");
});

app.listen(PORT, () => {
    console.log(`Server is listening to the PORT ${PORT}`);
});
