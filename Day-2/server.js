const express = require('express');

const app = express(); // server creation

app.get('/', (req, res) => {
    res.send('Hello World!') //response to client
});

app.get('/about', (req, res) => {
    res.send('This is about page') //response to client
});

app.get('/home', (req, res) => {
    res.send('This is home page') //response to client
});

app.listen(3000) //server starting