/*const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/users', (req, res)=>{
    client.query(`select * from utilizador`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
*/
