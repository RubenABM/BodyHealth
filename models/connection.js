/*var pg = require('pg');

//pode estar mal!
const connectionString = "postgres://zrznopdgddhzpb:c25ef89e544d07ff6382509ce1ec20a4535bffede8a2d96367c35ec1910e88b2@ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/d8sb04nd3dc7fk"
//"postgres://root:password@localhost:5432/students"
const Pool = pg.Pool
const pool = new Pool({
 connectionString,
 max: 10,
 ssl: {
 require: true,
 rejectUnauthorized: false
 }
})

pool.connect()
pool.query('SELECT * FROM utilizador', (err,res)=>{
    console.log(err,res)
    //pool.end()
})

module.exports = ool;*/

const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "zrznopdgddhzpb",
    password: "c25ef89e544d07ff6382509ce1ec20a4535bffede8a2d96367c35ec1910e88b2",
    database : 'd8sb04nd3dc7fk',
    port: '5432'
}); 
 
client.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !')
});

console.log("ligação");
module.exports = client;