const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const jwt_key = 'dev-jwt';

//models
const AdminPanel = require('../models/adminPanel');
const Goods = require('../models/Goods');
const Product = require('../models/Product')
const Category = require('../models/CategoryGoods');
const Subcategory = require('../models/SubcategoryGoods');
const User = require('../models/Users');
const OrderList = require('../models/OrdersList');

module.exports.adminPage = (req, res) => {
    res.render('admin-auth');
};

module.exports.dashboard = async (req, res) => {

    let category = new Promise( async (resolve, reject) => {
        let categor = await Category.find({}, (err, data) => {
            if (err) console.log(err);
        });

        resolve(categor);
    });

    let subcategory = new Promise( async (resolve, reject) => {
        let subcategor = await Subcategory.find({}, (err, data) => {
            if (err) console.log(err);
        }).sort({id : 0})

        resolve(subcategor);
    });

    let goods = new Promise( async (resolve, reject) => {
        let dat = await Product.find({}, (err, data) => {
            if (err) console.log(err);
        }).sort('order_id');

        resolve(dat);
    })

    

    if (req.session.admin && req.cookies.admin_sid) {
        console.log("render admin page");
        Promise.all([category, subcategory, goods]).then( (value) => {
            res.render('admin', {
                category : value[0],
                subcategory : value[1],
                goods : value[2]
            })
        })
      } else {
        res.redirect("/api/admin-page/login");
      }
};

module.exports.exit = (req, res) => {
    if (req.session.admin && req.cookies.admin_sid) {
        res.clearCookie("admin_sid");
        res.redirect("/api/admin-page");
      } else {
        res.redirect("/api/admin-page/login");
      }
};

module.exports.login = async (req, res) => {

    let login = req.body.login,
        password = req.body.password;
    
      const candidate = await AdminPanel.findOne({phone : login});

      if (candidate) {
          // check password, admin found.
          const passwordResult = bcrypt.compareSync(password, candidate.password);
          if (passwordResult) {
              // generation token
              // password true
              const token = jwt.sign({
                  phone: candidate.phone,
                  userId: candidate._id
              }, jwt_key, {
                  expiresIn: 60 * 60
              })
              req.session.admin = candidate;
              res.redirect('/api/admin-page/dashboard')
          } else {
              //password false
              res.redirect('/api/admin-page/fail')
          }
      } else {
          // admin not found
          res.redirect('/api/admin-page/fail')
      }

};

module.exports.fail = (req, res) => {
    res.render('admin-fail');
};


module.exports.getChangeGood = (req, res) => {

    if (req.session.admin && req.cookies.admin_sid) {

        Product.find({_id : req.query.id}, (err, data) => {
            if (err) reject(err);
            res.render('admin-changer', {goods : data});
        })
      } else {
        res.redirect('/api/admin-page/login');
      }
};


module.exports.changeProduct = async (req, res) => {

    console.log("ID = ", req.body.id);
    console.log("NAME = ", req.body.name);
    console.log("DESCRIPTION = ", req.body.description);
    console.log("COST = ", req.body.cost);
    console.log("AVAILABILITY = ", req.body.availability);

    const new_id = req.body.id;

    const options = {
        name : req.body.name || null,
        description : req.body.description || null,
        cost : req.body.cost || null,
        availability : req.body.availability == undefined ? null : req.body.availability
    }

    function setUpdate(options) {
        for (let key in options) {
            if (options[key] == null) {
                delete options[key];
            }
        }

        return options;
    }

    let upd = await Product.findOneAndUpdate({_id : new_id}, setUpdate(options));
    await upd.save();

    res.redirect(`/api/admin-page/changer?id=${new_id}`);

};

module.exports.sendOrders = async (req, res) => {

    let users = new Promise( async (resolve, reject) => {
        let u = await User.find({}, (err, data) => {
            if (err) reject(err);
        });

        resolve(u);
    });

    let orderList = new Promise( async (resolve, reject) => {
        let o = await OrderList.find({}, (err, data) => {
            if (err) reject(err);
        });

        resolve(o);
    });

    if (req.session.admin && req.cookies.admin_sid) {
        Promise.all([users, orderList]).then( (value) => {
            res.render('admin-orders', {
                users : value[0],
                orderList : value[1]
            })
        })
      } else {
        res.redirect("/api/admin-page/login");
      }

}

module.exports.sendPost = async (req, res) => {

    let users = new Promise( async (resolve, reject) => {
        let u = await User.findOne({user_id : req.body.id}, (err, data) => {
            if (err) reject(err);
        });

        resolve(u);
    });

    let orderList = new Promise( async (resolve, reject) => {
        await OrderList.find({order_id: req.body.id}, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });

    });

    Promise.all([users, orderList]).then( (value) => {
        res.json({
            users : value[0],
            orderList : value[1]
        })
    })
}

module.exports.changeStatus = async (req, res) => {

    let upd = await User.findOneAndUpdate({user_id : req.body.id}, {confirmed : true});
    await upd.save();

    res.json({message : "cool"});
}

module.exports.changeFinishStatus = async (req, res) => {

    let upd = await User.findOneAndUpdate({user_id : req.body.id}, {success : true});
    await upd.save();

    res.json({message : "cool"});
}

module.exports.addNewProduct = async (req, res) => {
    res.render('admin-newProduct')
}

const getLastOrderId = async (model) => {
    const result = await Product.find({subcategory : model.subcategory}).sort({order_id : -1}).limit(1)
    return result[0]['order_id'] + 1 // return last index in subcategory
}

module.exports.postNewProduct = async (req, res) => {
    try {
        const data = req.body

        let newProduct = await Product.create(data)

        await newProduct.save()

        let lastOrderId = await getLastOrderId(newProduct)

        let modifyProduct = await Product.findByIdAndUpdate(
            {_id : newProduct._id},
            {order_id : lastOrderId}
        )

        await modifyProduct.save()

    } catch (err) {
        console.log(err)
        res.send('Server error. Something went wrong')
    }
}


