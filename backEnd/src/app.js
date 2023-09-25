const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// const htmlResponse = `<h1>Hola backend</h1>`
// app.use('/', (req, res) => {
//     res.send("Router no found");
// })

app.use('/user',require('./routes/user'));
app.use('/reservas',require('./routes/booking'));



module.exports = app;