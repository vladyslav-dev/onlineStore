let favorites = {};

if (window.location.pathname == '/favorite') {
    document.querySelector('.under-header').style.backgroundColor = '#1d1d1d';
}

if (localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
    getFavoriteGoodsInfo();
}

document.querySelectorAll('.product_btn-heart').forEach( item => {
    item.onclick = addToHeart;
});

if (window.location.pathname == '/goods' || window.location.pathname == '/subcategory') {
    checkFavor();
}

function checkFavor() {
    getFavoriteGoodsInfo(); 
    if (window.location.pathname == '/goods') {
        let el = document.querySelector('.heart-button');
        let goodsId = el.dataset.goods_heart_id;

        if(favorites[goodsId] >= 1) {
            el.innerHTML = "Уже в избранном";
        } else {
            el.innerHTML = "Добавить в избранное";    
        }
    }


    if (window.location.pathname == '/subcategory') {
        let el = document.querySelectorAll('.product_btn-heart');
        el.forEach( item => {
            item.childNodes[0].src = './images/add-to-heart-icon.svg';
            item.style.backgroundColor = '#9a9a9a';
            for (let key in favorites) {
                if (item.dataset.goods_heart_id == key) {
                    if(favorites[item.dataset.goods_heart_id] >= 1) {
                        item.childNodes[0].src = './images/ok-add-to-heart-icon.svg';
                        item.style.backgroundColor = '#4e4e4e';
                    }
                } 
            }
        });
    }

}

function addToHeart() {

    if (window.location.pathname == '/goods') {
        let goodsId = this.dataset.goods_heart_id;
        if(favorites[goodsId] >= 1) {
            this.innerHTML = "Уже в избранном";
            return false;
        } else {
            this.innerHTML = "Уже в избранном";
            if(favorites[goodsId]) {
                favorites[goodsId]++;
            } else {
                favorites[goodsId] = 1;
            }
        }
    }

    if (window.location.pathname == '/subcategory') {
        let goodsId = this.dataset.goods_heart_id;
        if(favorites[goodsId] >= 1) {
            this.childNodes[0].src = './images/ok-add-to-heart-icon.svg';
            this.style.backgroundColor = '#4e4e4e';
            return false;
        } else {
            this.childNodes[0].src = './images/ok-add-to-heart-icon.svg';
            this.style.backgroundColor = '#4e4e4e';
            if(favorites[goodsId]) {
                favorites[goodsId]++;
            } else {
                favorites[goodsId] = 1;
            }
        }
    }

    getFavoriteGoodsInfo();
}

function getFavoriteGoodsInfo() {

    updateLocalStorageFavorites();

    fetch('/get-goods-info', {
        method: 'POST',
        body: JSON.stringify({key: Object.keys(favorites)}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.text();
    }).then(function (body) {
        if (window.location.pathname == '/favorite') {
            showFavoritesGoods(JSON.parse(body));
        }
    })
};

function showFavoritesGoods(data) {

    let inner_heart_content = document.querySelector('#inner__heart-content');
    let content = ``;

    for (let key in favorites) {
        content += `<div class="cart">
                        <a href="/goods?id=${data[key]['id']}">
                            <div class="cart-content">
                                <img src="./images/goods-img${data[key]['image']}" class="cart-img">
                                <p class="cart-name">${data[key]['name']}</p>
                            </div>
                        </a>
                        <div class="to-cart-block">
                            <div class="cart-price">${data[key]['cost']} грн</div>
                        </div>
                        <div class="delete-icon-favorite" id="delete-from-favorites">
                            <img src="./images/close-icon.svg" class="delete-from-favor-icon" data-goods_heart_id=${data[key]['id']}>
                        </div>  
                    </div>`
    }

    if (document.querySelector('#inner__heart-content') == null) {
        console.log("Missing");
    } else {
        if (content == '') {
            inner_heart_content.style.gridTemplateColumns = 'none';
            inner_heart_content.innerHTML = `<span class='favoriteIsEmpty'>У вас нет добавленных товаров в избранное</span>`
        } else {
            inner_heart_content.innerHTML = content;
        }                     
    }

    document.querySelectorAll('.delete-from-favor-icon').forEach( e => {
        e.onclick = deleteFavorite;
    });     
}

function deleteFavorite() {
    let goodsId = this.dataset.goods_heart_id;  
    delete(favorites[goodsId]);
    getFavoriteGoodsInfo();
}

function updateLocalStorageFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

