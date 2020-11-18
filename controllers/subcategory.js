const Category = require('../models/CategoryGoods');
const Subcategory = require('../models/SubcategoryGoods');
const Goods = require('../models/Goods');

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
        let dat = await Goods.find({'subcategory' : req.query.id}, (err, data) => {
            if (err) reject(err);
        }).sort({'id': 1});

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
