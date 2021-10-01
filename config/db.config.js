'use strict';
const mysql = require('mysql');
//local mysql db connection
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'express_crud_api'
});
conn.connect(function(err) {
  if (err) throw err;
  console.log("koneksi Berhasil!");
});
module.exports = conn;