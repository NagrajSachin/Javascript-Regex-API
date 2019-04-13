const express = require('express');
const morgan = require('morgan');
const router = require('./router');

const app = express();

const hostname = 'localhost';
const port = 80;

app.use(morgan('dev'));
app.use('/', router);

app.listen(port,hostname, ()=>{
    console.log('server listening on ' + hostname + ":" + port);
})