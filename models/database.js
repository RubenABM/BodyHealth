//CÓDIGO QUE LIGA BASE DE DADOS

var pg = require('pg');

const connectionString = "postgres://rseyionrdlqafm:84d61f6abfa8c910d9bbc729c05eae094bf605779341b4c23c3435a825bbe9ec@ec2-63-34-180-86.eu-west-1.compute.amazonaws.com:5432/dflfor52b1lqbq"
//heroku:
//"postgres://zrznopdgddhzpb:c25ef89e544d07ff6382509ce1ec20a4535bffede8a2d96367c35ec1910e88b2@ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/d8sb04nd3dc7fk"
//"postgres://NomeUtilizador:password@localhost:5432/students"

//HEROKU NOVO: postgres://ztvljuubrwqlbj:6526b8c1fc57028302754761c52b50d7458c89db5987a09cbf74a5aefbe94573@ec2-52-30-67-143.eu-west-1.compute.amazonaws.com:5432/d5rohblj5db5qm
//heroku NOVO 2: postgres://rseyionrdlqafm:84d61f6abfa8c910d9bbc729c05eae094bf605779341b4c23c3435a825bbe9ec@ec2-63-34-180-86.eu-west-1.compute.amazonaws.com:5432/dflfor52b1lqbq
console.log("connectionString = " + connectionString);


const Pool = pg.Pool
const pool = new Pool({
 connectionString,
 max: 10,
 ssl: {
  require: true,
  rejectUnauthorized: false
  }
})

//Ao correr o ficheiro a query funciona
/*pool.query('SELECT * FROM utilizador', (error, results) => {
  if (error) {
    throw error
  }
  console.log(results)
});*/

pool.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = pool;
