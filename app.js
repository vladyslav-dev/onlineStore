const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

const ip = require("ip");
console.log( ip.address() );

const app = express();
const PORT = process.env.PORT || 80;

require("./server");

// Routes
const mainPageRoutes = require('./routes/index');
const categoryPageRoutes = require('./routes/category');
const subcategoryPageRoutes = require('./routes/subcategory');
const goodsPageRoutes = require('./routes/goods');
const favoritePageRoutes = require('./routes/favorite');
const orderPageRoutes = require('./routes/order');
const contactsPageRoutes = require('./routes/contacts');
const adminPageRoutes = require('./routes/adminPanel');

// Mongo models
const Goods = require('./models/Goods');
const User = require('./models/Users');
const OrderList = require('./models/OrdersList');

app.listen(PORT, () => console.log('Server listening on port ' + PORT));

app.use(express.json());
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      key: "admin_sid",
      secret: "somerandonstuffs",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 86400 * 1000,
      },
    })
  );

app.use((req, res, next) => {
  if (req.cookies.admin_sid && !req.session.admin) {
    console.log("clearCookies");
    res.clearCookie("admin_sid");
  }
  next();
});

let sessionChecker = (req, res, next) => {

  if (req.session.admin && req.cookies.admin_sid) {
    res.redirect("/api/admin-page/dashboard");
  } else {
    next();
  }
};

app.get('/api/admin-page', sessionChecker, (req, res) => {
  res.redirect('/api/admin-page/login');
})

app.use('/', mainPageRoutes);
app.use('/category', categoryPageRoutes);
app.use('/subcategory', subcategoryPageRoutes);
app.use('/goods', goodsPageRoutes);
app.use('/favorite', favoritePageRoutes);
app.use('/order', orderPageRoutes);
app.use('/contacts', contactsPageRoutes);

app.get('/help', (req, res) => {
  res.render('help')
})

app.use('/api/admin-page', adminPageRoutes); 

app.post('/get-goods-info', (req, res) => {

    if (req.body.key.length != 0) {
        (async () => {
            try {
              await Goods.find({ id: { $in: req.body.key}}, function (err, data) {
                if (err) throw err;

                let goods = {};
                for (let i = 0; i < data.length; i++) {
                    goods[data[i]['id']] = data[i];
                } 
                res.json(goods);

              }) 
            } catch (err) {
              console.log('error: ' + err);
            }
          })();

    } else {
        res.json('0');
    }
    
});

app.post('/finish-order', function(req, res) {

    let key = Object.keys(req.body.key);

    if (req.body.key != 0) {
        (async () => {
            try {
              await Goods.find({ id: { $in: key}}, function (err, result) {
                if (err) throw err;
                saveOrder(req.body, result);
                let mailer = require('./nodemailer');
                mailer.sendMail(req.body, result);
                
                res.send('1');

              }) 
            } catch (err) {
              console.log('error: ' + err);
            }
          })();
        
    } else {
        res.send('0');
    }
});


function saveOrder(userData, products) {

    let fullNameStr = userData.firstName + ' ' + userData.lastName;

    const user = new User({
        user_id : userData.orderId,
        fullName : fullNameStr,
        city : userData.city,
        mail : userData.mail,
        phone : userData.phone,
        postName : userData.postName,
        postAddress : userData.post,
        paymentMethod : userData.paymentMethod,
        coment : userData.coment,
        date : userData.date,
        confirmed : false,
        success : false
    });

    user.save( (err, result) => {
        if (err) throw err;
        if(result) {
            // console.log(`New user ${fullNameStr} created`);
            // console.log(result);
        }
    })

    for (let i = 0; i < products.length; i++) {

        let product = new OrderList({
            order_id : userData['orderId'],
            full_name : fullNameStr,
            product_id : products[i]['id'],
            product_name : products[i]['name'],
            product_cost : products[i]['cost'],
            product_amount : userData.key[products[i]['id']],
            total : userData.key[products[i]['id']] * products[i]['cost']
        });
    
        product.save( (err, result) => {
            if (err) throw err;
            if(result) {
                // console.log(`New product ${fullNameStr} pushed`);
            }
        })
    }  
}

// app.use((req, res, next) => {
//   const blockedIPs = ['1.1.1.1', '0.0.0.0'];
//   const remoteAddresParams = req._remoteAddress.split(':');
//   const clientIP = remoteAddresParams[remoteAddresParams.length -1];
//   isClientBlocked= blockedIPs.any(ip => ip.toString() === clientIP.toString());
//   res.status(403)
//   res.json({success: 0, message: 'you are blocked for some reason'})
// });

app.use(function (req, res, next) {
  res.status(404).render("404");
});
