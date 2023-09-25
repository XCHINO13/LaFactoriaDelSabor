const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/user',require('./routes/user'));
app.use('/reservas',require('./routes/booking'));

const htmlResponse = `<h1>Hola backend</h1>`
app.use('/', (req, res) => {
    res.json({msg:htmlResponse});
})

module.exports = app;