const Category = require('../models/CategoryGoods');
const Subcategory = require('../models/SubcategoryGoods');

module.exports.categoryPage = (req, res) => {

    let category = new Promise((resolve, reject) => {
        Category.findOne({'id' : req.query.id}, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });

    let subcategory = new Promise((resolve, reject) => {
        Subcategory.find({'category' : req.query.id}, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });

    Promise.all([category, subcategory]).then( (value) => {
        res.render('category', {
            category : value[0],
            subcategory : value[1]
        })
    })

};
