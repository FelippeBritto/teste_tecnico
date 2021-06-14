const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: "Desafio API",
        version: 1.0
    });
});

router.get('/token', (req, res, next)=>{
    var Username = req.headers.username;
    var token = jwt.sign({username:Username}, 'supersecret', {expiresIn: 1800});

    res.send(token);
})

module.exports = router;