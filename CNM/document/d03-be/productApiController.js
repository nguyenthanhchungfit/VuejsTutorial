var express = require('express'),
    low = require('lowdb'),
    fileSync = require('lowdb/adapters/FileSync');

var router = express.Router();

var adapter = new fileSync('./db/db.json');
var db = low(adapter);

router.get('/', (req, res) => {
    var products = db.get('products');
    res.json(products);
})

router.get('/:id', (req, res) => {
    var id = +req.params.id;
    var products = db.get('products').find(p => p.id === id);
    res.json(products);
})

router.post('/addProduct', (req, res) => {
    db.get('products')
        .push({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price
        })
        .write();

    res.statusCode = 201;
    res.json({
    	msg: 'Product added'
    });
})

module.exports = router;