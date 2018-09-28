var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors');

var productCtrl = require('./apiControllers/productControllers');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        msg: 'hello from nodejs express api'
    })
});

app.use('/api/products/', productCtrl);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`QLBH API is running on port ${port}`);
})