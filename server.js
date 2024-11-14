var port = 1111;
if (process.argv.length > 2) port = parseInt(process.argv[2]);

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./')); 

app.listen(port, () => console.log('Listening on port '+port));