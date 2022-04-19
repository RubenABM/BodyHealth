//COMPLETA O index.js


const {Client} = require('pg');

const client = new Client({
    host: "ec2-52-212-228-71.eu-west-1.compute.amazonaws.com",
    user: "zrznopdgddhzpb",
    port: 5432,
    password: "c25ef89e544d07ff6382509ce1ec20a4535bffede8a2d96367c35ec1910e88b2",
    database: "d8sb04nd3dc7fk"
})

module.exports = client
