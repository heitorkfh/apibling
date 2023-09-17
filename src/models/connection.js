const mysql = require('mysql2/promise')
const fs = require('fs')

require('dotenv').config()
//const connection = mysql.createConnection({
//  host: process.env.MYSQL_HOST,
//  user: process.env.MYSQL_USER,
//  password: process.env.MYSQL_PASSWORD,
//  database: process.env.MYSQL_DB,
//  ssl: {
//    rejectUnauthorized: true,
//    ca: fs.readFileSync('client-key.pem')
//  }})
  
//console.log('Connected to PlanetScale!')
console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_USER)
console.log(process.env.MYSQL_DB)
console.log(process.env.MYSQL_PASSWORD)
console.log(process.env.PORT)
const connection = mysql.createPool({
  host:process.env.MYSQL_HOST,
  user:process.env.MYSQL_USER,
  password:process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DB
})
module.exports = connection