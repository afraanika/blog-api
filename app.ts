const express = require('express');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.end("Welcome to our blogsite");
});

app.listen(PORT, () => {
    console.log(`Server is listening to the PORT ${PORT}`);
});
