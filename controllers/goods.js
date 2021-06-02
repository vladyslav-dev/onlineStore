const Goods = require('../models/Goods');
const Product = require('../models/Product')

module.exports.goodsPage = (req, res) => {
        Product.find({_id : req.query.id}, (err, data) => {
            if (err) console.log(err);
            res.render('goods', {goods : data});
        })

};
