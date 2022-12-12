const express = require('express');
const { register, signin } = require('../controllers/authController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to our Blog Site");
});

router.post('/register', register);

router.post('/signin', signin);

module.exports = router;