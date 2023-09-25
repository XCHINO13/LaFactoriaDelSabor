const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const app = express();
const userRouteUser = require('./routes/user');
// const userRouteBooking = require('./routes/booking');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/user',userRouteUser);
// app.use('/reservas',userRouteBooking);

const htmlResponse = `<h1>Hola backend</h1>`

module.exports = app;