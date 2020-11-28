let favorites = {};

if (window.location.pathname == '/favorite') {
    document.querySelector('.under-header').style.backgroundColor = '#1d1d1d';
}

document.querySelectorAll('.to-heart-icon').forEach( item => {
    item.onclick = addToHeart;
});
document.querySelectorAll('.heart-button').forEach( item => {
    item.onclick = addToHeart;
});

if (localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
    getFavoriteGoodsInfo();
}

if (window.location.pathname == '/goods') {
    checkFavor();
}

function checkFavor() {
    getFavoriteGoodsInfo(); 

    let el = document.querySelector('.heart-button');
    let goodsId = el.dataset.goods_heart_id;

    if(favorites[goodsId] >= 1) {
        el.innerHTML = "Уже в избранном";
    } else {
        el.innerHTML = "Добавить в избранное";    
    }
}

function addToHeart() {
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
        showFavoritesGoods(JSON.parse(body));
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
                                <p class="cart-price">${data[key]['cost']} грн</p>
                            </div>
                            <div class="to-cart">
                                <p>Смотреть товар</p>
                            </div>
                        </a>
                        <div class="to-cart-icon" id="delete-from-favorites">
                            <img src="./images/close-icon.png" class="delete-from-favor-icon" data-goods_heart_id=${key}>
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

