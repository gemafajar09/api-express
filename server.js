const express = require('express');
const bodyParser = require('body-parser');
// deklarasi app express
const app = express();
// seting port yang akan dijalankan
const port = process.env.PORT || 5000;
// permintaan dari content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// permintaan dari content-type - application/json
app.use(bodyParser.json())
// memanggil router
const routers = require('./src/router/routes')
// menggunakan middleware
app.use('/api/', routers)
// membaca pada port yang di sarankan
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
 