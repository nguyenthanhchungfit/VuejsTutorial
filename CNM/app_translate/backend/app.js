var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var engTranslator = require('./apiControllers/engTranslateApi');
var fraTranslator = require('./apiControllers/fraTranslateApi');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    var ret = {
        msg: 'hello from nodejs express api'
    };
    res.json(ret);
});

app.use('/en', engTranslator);
app.use('/fr', fraTranslator);

var PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('api is running on ' + PORT);
});