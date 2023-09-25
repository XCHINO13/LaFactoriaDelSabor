const dotenv = require('dotenv').config();
//var env = require('node-env-file'); // .env file
//env(__dirname + '../.env');
const app = require('./app.js');

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});