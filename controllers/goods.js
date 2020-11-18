const Goods = require('../models/Goods');

module.exports.goodsPage = (req, res) => {

        Goods.find({'id' : req.query.id}, (err, data) => {
            if (err) reject(err);
            res.render('goods', {goods : data});
        })

};
