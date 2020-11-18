const Category = require('../models/CategoryGoods');
const Subcategory = require('../models/SubcategoryGoods');

module.exports.mainPage = (req, res) => {

    let category = new Promise((resolve, reject) => {
        Category.find({}, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });

    let subcategory = new Promise((resolve, reject) => {
        Subcategory.find({}, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });

    Promise.all([category, subcategory]).then( (value) => {
        res.render('index', {
            category : value[0],
            subcategory : value[1]
        })
    })

};


