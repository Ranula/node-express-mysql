var express = require('express');
var bodyParser = require('body-parser')
const testRoutes = require('./routes/testRoutes.js')


const app = express();

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use('/',testRoutes);

const port = process.env.port || 5000;
app.listen( port, ()=> console.log(`Server stared on port ${port}`))


module.exports = app