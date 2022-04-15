const express = require('express');
const app = express();
const port = 3000;
//const pool = require('./models/connection.js')

app.get("/", (req, res) => {

    res.send("Hello World")

});

//pool.connect();

app.listen(port, () => console.log('App is online in ${port}'));