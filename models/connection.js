var pg = require('pg');

const connectionString = "postgres://postgres:20200453@localhost:5432/students"
//heroku:
//"postgres://zrznopdgddhzpb:c25ef89e544d07ff6382509ce1ec20a4535bffede8a2d96367c35ec1910e88b2@ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/d8sb04nd3dc7fk"
//"postgres://NomeUtilizador:password@localhost:5432/students"


const Pool = pg.Pool
const pool = new Pool({
 connectionString,
 max: 10,
 /*ssl: {
  require: true,
  rejectUnauthorized: false
  }*/
})

//Ao correr o ficheiro a query funciona
pool.query('SELECT * FROM students', (error, results) => {
  if (error) {
    throw error
  }
  console.log(results)
});

pool.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = pool;
