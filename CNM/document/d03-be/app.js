var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var productCtrl = require('./productApiController');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var ret = {
        msg: 'hello from nodejs express api'
    };

    res.json(ret);
})

app.get('/sum', (req, res) => {
    var x = +req.query.x;
    var y = +req.query.y;
    var s = x + y;
    var ret = {
        x: x,
        y: y,
        sum: s
    }

    res.json(ret);
})

app.use('/products', productCtrl);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});