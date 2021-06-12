const Category = require('../models/CategoryGoods');
const Subcategory = require('../models/SubcategoryGoods');
const Goods = require('../models/Goods');

const Product = require('../models/Product')

module.exports.subcategoryPage = (req, res) => {

    let category = new Promise((resolve, reject) => {
        Category.find({}, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });

    let subcategory = new Promise((resolve, reject) => {
        Subcategory.find({'id' : req.query.id}, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });

    let goods = new Promise( async (resolve, reject) => {
        let dat = await Product.find({'subcategory' : req.query.id}, (err) => {
            if (err) reject(err);
        }).sort([['availability', -1], ['order_id', 0]])

        resolve(dat);
    })

    Promise.all([category, subcategory, goods]).then( (value) => {
        res.render('subcategory', {
            category : value[0],
            subcategory : value[1],
            goods : value[2]
        })
    })

};
