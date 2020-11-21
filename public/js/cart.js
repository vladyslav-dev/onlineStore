let cart = {};

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    getGoodsInfo();
} else {
    console.log('Local storage is empty');
    if (window.location.pathname == '/order') {
        window.location.replace("/");
    }
}

let cartAnimation = document.querySelector('.cartImg');
let header_row = document.querySelector('.header__row');
let cart_block = document.querySelector('.cart__block');
let header_icons = document.querySelectorAll('.header__icons');
let cart_modal = document.querySelector('.cart__modal');
let cartIcon = document.querySelector('#cart');
let close_cart = document.querySelector('.close-cart');
let products__count_number = document.querySelector('.products__count-number');
let body = document.getElementsByTagName('body');
let mainLogo = document.querySelector('.logo');
let _ButtonAddToCart = document.querySelector('.product-button');

document.querySelectorAll('.product-button').forEach( item => {
    item.onclick = addToCart;
    _ButtonAddToCart = item;
});

document.querySelectorAll('.to-cart-icon').forEach( item => {
    item.onclick = addToCart;
});

if (window.location.pathname == '/goods') {
    checkCart();
}

function checkCart() {
    getGoodsInfo(); 

    let el = document.querySelector('.product-button');
    let goodsId = el.dataset.goods_id;

    if(cart[goodsId] >= 1) {
        el.innerHTML = "Уже в корзине";
    } else {
        el.innerHTML = "В корзину";     
    }

}

function addToCart() {
    let goodsId = this.dataset.goods_id;

    if(cart[goodsId] >= 1) {
        this.innerHTML = "Уже в корзине";
        return false;
    } else {
        
        this.innerHTML = "Уже в корзине";
        if(cart[goodsId]) {
            cart[goodsId]++;
        } else {
            cart[goodsId] = 1;
        }
    }

    cartAnimation.classList.add('active');

    setTimeout( () => {
        cartAnimation.classList.remove('active');
    }, 3000);

    getGoodsInfo(); 
};

function getGoodsInfo() {

    updateLocalStorageCart();

    fetch('/get-goods-info', {
        method : 'POST',
        body : JSON.stringify({ key : Object.keys(cart)}),
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then( (response) => {
        return response.text();
    }).then( (body) => {
        if (window.location.pathname == '/order') {          
            showOrder(JSON.parse(body));
        } else {
            showCart(JSON.parse(body));     
        }   
    })
};

if (window.location.pathname !== '/order') {

    cartIcon.addEventListener('click', () => {

        cart_modal.classList.add('active');
        cart_block.classList.add('active');
        mainLogo.style.marginLeft = '0';
        header_row.classList.add('active');
        close_cart.classList.add('active');
        body[0].classList.add('active');

        for (let i = 0; i < header_icons.length; i++) {
            header_icons[i].style.display = 'none';
        }

        if (cart_block.children.length <= 1) {
            cart_block.innerHTML = `<div class="cart-empty">Ваша корзина пуста</div>`;
            cart_block.style.height = '100vh';
        }
    });

    close_cart.addEventListener('click', () => {

            cart_block.classList.remove('active');
            cart_modal.classList.remove('active');      
            close_cart.classList.remove('active');
            body[0].classList.remove('active');
            mainLogo.style.marginLeft = '-45px';

            for (let i = 0; i < header_icons.length; i++) {
                header_icons[i].style.display = 'flex';
            }
            
            if(header_row.className == 'header__row active' && window.scrollY < 50) {
                header_row.classList.remove('active');
            }    
    });

    cart_modal.addEventListener('click', () => {
            cart_block.classList.remove('active');
            cart_modal.classList.remove('active');    
            close_cart.classList.remove('active');
            body[0].classList.remove('active');
            mainLogo.style.marginLeft = '-45px';

            for (let i = 0; i < header_icons.length; i++) {
                header_icons[i].style.display = 'flex';
            }

            if(header_row.className == 'header__row active' && window.scrollY < 50) {
                header_row.classList.remove('active');
            }          
    });
}

function showCart(data) {

    let content = `<div class="cart__header">КОРЗИНА</div>`;
    let total = 0;
    let sumElements = 0;

    for (let key in cart) {

        content +=  `<div class='cart__row'>
                        <h1><a href='/goods?id=${key}'>${data[key]['name']}</a></h1>
                        <div class="flex-content">
                            <div class="flex-content-left">
                                <div class='cart__info-left'>
                                    <img src="images/goods-img${data[key]['image']}">
                                </div>
                                <div class="cart__info-center">
                                    <div class="cart__info-text">
                                        <p class="cart__info-price-detail">Цена: ${data[key]['cost']} &#8372;</p>
                                    </div>
                                    <div class="cart-numbers">
                                        <div class="cart-count">${cart[key]}</div>
                                        <div class="cartPlus_button" data-goods_id=${key}>
                                            <img src="./images/change-arrow.svg">
                                        </div>
                                        <div class="cartMinus_button" data-goods_id=${key}>
                                            <img src="./images/change-arrow.svg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cart__info-price">
                                <div class="product-cost">${data[key]['cost']*cart[key]} грн</div>
                                <div class="delete-product" data-goods_id=${key}>Убрать</div>
                            </div>                    
                        </div>    
                    </div>`;

        sumElements++;
        total += data[key]['cost']*cart[key];   
    }

    if (sumElements > 0) {
        products__count_number.classList.add('active');
        content += `<div class="order-info-block">
                        <div class="total">Итого: ${total} грн</div>
                        <a href='/order' class="order-all">Оформить заказ</a>
                    </div>`;

    } else {
        products__count_number.classList.remove('active');
        cart_block.classList.remove('active');
        cart_modal.classList.remove('active');
        header_row.classList.remove('active');
        close_cart.classList.remove('active');
        body[0].classList.remove('active');  

        for (let i = 0; i < header_icons.length; i++) {
            header_icons[i].style.display = 'flex';
        }

    }

    products__count_number.innerHTML = sumElements;
    cart_block.innerHTML = content;

    let cartPlus_button = document.querySelectorAll('.cartPlus_button');
    let cartMinus_button = document.querySelectorAll('.cartMinus_button');
    let delete_product = document.querySelectorAll('.delete-product');

    cartPlus_button.forEach( e => {
        e.onclick = cartPlus;
    });

    cartMinus_button.forEach( e => {
        e.onclick = cartMinus;
    });

    delete_product.forEach( e => {
        e.onclick = deleteProduct;
    });  

};

function cartPlus() {

    let goodsId = this.dataset.goods_id;
    cart[goodsId]++;
    getGoodsInfo();
}

function cartMinus() {

    let goodsId = this.dataset.goods_id; 

    if(cart[goodsId] - 1 > 0) {
        cart[goodsId]--;
    } else {
        delete(cart[goodsId]);
        checkCart();
    }
    getGoodsInfo();
}

function deleteProduct() {
    let goodsId = this.dataset.goods_id; 
    delete(cart[goodsId]);
    checkCart();
    getGoodsInfo();
}

function updateLocalStorageCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showOrder(data) {

        console.log(cart);

        let innerContent = document.querySelector('.innerContent');
        let total = 0;
        let content = ``;

        for (let key in cart) {
            content += `<div class="order__item">
                            <div class="order__item-image">
                                <img src="images/goods-img${data[key]['image']}">
                            </div>
                            <div class="order__item-info">
                                <div class="order__item-info-name">${data[key]['name']}</div>
                                <div class="order__item-info-cost">${data[key]['cost']} ₴</div> 
                            </div>
                            <div class="order__item-count">
                               кол. ${cart[key]}
                            </div>
                            <div class="order__item-price">
                                ${data[key]['cost']*cart[key]} ₴
                            </div>
                        </div>`;
            total += data[key]['cost']*cart[key]; 
        }
        content += `<div class="totalCost"><div class="totalCost-inside">Итого: ${total} ₴</div></div>`;

        innerContent.innerHTML = content;
}

// modal window "Copyed link" 

if (window.location.pathname == '/goods') {

    let URLlink = document.querySelector('#good-link');
    let modal_link = document.querySelector('.modal-link');
    let modal__content_link = document.querySelector('.modal__content-link');

        URLlink.addEventListener('click', function() {

            modal_link.classList.add('active');
            modal__content_link.classList.add('active');
            body[0].classList.add('active');
        
            setTimeout( function() {
                modal_link.classList.remove('active');
                modal__content_link.classList.remove('active');
                body[0].classList.remove('active');
            }, 2000);
        
            let tempInput = document.createElement('textarea');
        
                tempInput.value = window.location.href;
        
                URLlink.parentNode.appendChild(tempInput);
        
                tempInput.select();
                tempInput.setSelectionRange(0, 99999);
        
                document.execCommand('copy');
        
                tempInput.parentNode.removeChild(tempInput);
        
        });     
};



