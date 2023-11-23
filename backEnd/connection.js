const {Pool} = require('pg')

const connection = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: false
//     }
})

// const mysql = require('mysql');
// require('dotenv').config();

// var connection = mysql.createConnection({
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME

// });

// connection.connect((err) =>{
//     if(!err){
//         console.log("connected");
//     }
//     else{
//         console.log(err);
//     }
// });

module.exports = connection;