let orders = document.querySelectorAll('.orders__content-item');

orders.forEach(item => {
    item.onclick = () => {

        console.log(item.childNodes[0].childNodes[0].childNodes[1])


        const orderID = item.childNodes[0].childNodes[0].childNodes[1].innerText;
        getUserAndOrderList({id : orderID}).then( body => showModalWindow(body, orderID));
    }
})

function getUserAndOrderList(obj) {

    return fetch('/api/admin-page/orders', {
        method: 'POST',
        body : JSON.stringify(obj),
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
    }).then(function(response) {
        return response.text();
    }).then(function(body) {
        return JSON.parse(body);
    });
}

function showModalWindow(data, id) {

    const modalBack = document.querySelector('.modal-window');
    const modalContent = document.querySelector('.modal-content');

    const users = data.users;
    const orderList = data.orderList;

    let fullTotal = 0;
    let content = `<div class="modal__container">
                        <div class="modal__header">
                            <h1>Просмотр заказа<span>${users['user_id']}</span></h1>
                            <img src='../../../images/close-icon.png' id="close-modal-window" alt='Not found'>
                        </div>
                        <div class="modal__userInfo">
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Имя/Фамилия:</span>
                                <span class="userInfo-item-text">${users['fullName']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Город:</span>
                                <span class="userInfo-item-text">${users['city']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Email:</span>
                                <span class="userInfo-item-text">${users['mail']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Телефон:</span>
                                <span class="userInfo-item-text">${users['phone']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Название почты:</span>
                                <span class="userInfo-item-text">${users['postName']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Адресс почтового отделения:</span>
                                <span class="userInfo-item-text">${users['postAddress']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Метод оплаты:</span>
                                <span class="userInfo-item-text">${users['paymentMethod']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Дата/Время заказа:</span>
                                <span class="userInfo-item-text">${users['date']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Статус:</span>
                                <span class="userInfo-item-text" id="confirm-value">${users['confirmed']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Товар получен:</span>
                                <span class="userInfo-item-text" id="success-value">${users['success']}</span>
                            </div>
                            <div class="modal__userInfo-item">
                                <span class="userInfo-item-label">Комментарий:</span>
                                <span class="userInfo-item-text" id="success-value">${users['coment']}</span>
                            </div>
                        </div>
                        <div class="modal__productInfo">
                            <h1 class="productInfo-heading">Товары</h1>
                            <table style="width:100%">
                                <tr>
                                    <th>ID товара</th>
                                    <th>Название</th>
                                    <th>Стоимость</th>
                                    <th>Количество</th>
                                    <th>Полная стоимость</th>
                                </tr>`

                        for (let key in orderList) {
                            content += `<tr>
                                            <td>${orderList[key]['product_id']}</td>
                                            <td class="pos-left">${orderList[key]['product_name']}</td>
                                            <td>${orderList[key]['product_cost']}</td>
                                            <td>${orderList[key]['product_amount']}</td>
                                            <td>${orderList[key]['total']}</td>
                                        </tr>`;
                            fullTotal += orderList[key]['total'];
                        }
                            
                       content += `</table>
                        </div>
                        <div class="productInfo__fullTotal">Всего: ${fullTotal}грн</div>
                        <div class="modal__buttons">${showButton(data)}</div>
                    </div>`

    modalContent.innerHTML = content;

    checkStatuses();

    modalBack.style.display = 'block';
    modalContent.style.display = 'block';

    document.querySelector('#close-modal-window').addEventListener('click', removeModal);
    modalBack.addEventListener('click', removeModal);

    function removeModal() {
        modalBack.style.display = 'none';
        modalContent.style.display = 'none';
    }
   
}



function showButton(data) {

    if (data.users['confirmed'] && data.users['success']) {
        return `<div class="order__finished">Заказ выполнен</div>`;
    } else if (data.users['confirmed']) {
        return `<div class="finish__button" id="${data.users['user_id']}" onclick="makeFinish(this)">Подтвердить получение</div>`;
    } else {
        return `<div class="confirm__button" id="${data.users['user_id']}" onclick="makeConfirm(this)">Подтвердить как обработанный</div>`;
    }

}

function checkStatuses() {

    let conf = document.querySelector('#confirm-value');
    let successVal = document.querySelector('#success-value');

    if (conf.innerText == 'true') {
        conf.innerText = 'ПОДТВЕРЖДЁН';
        conf.classList.add('active')
    } else {
        conf.innerText = 'НЕ ПОДТВЕРЖДЁН';
        conf.classList.remove('active')
    }

    if (successVal.innerText == 'true') {
        successVal.innerText = 'ДА';
        successVal.classList.add('active')
    } else {
        successVal.innerText = 'НЕТ';
        successVal.classList.remove('active')
    }
}


function makeConfirm(e) {

    fetch('/api/admin-page/update-status', {
        method: 'POST',
        body : JSON.stringify({id : e.id}),
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
    }).then(function(response) {
        return response.text();
    }).then(function() {
        location.reload();
    });
}

function makeFinish(e) {

    fetch('/api/admin-page/finish-status', {
        method: 'POST',
        body : JSON.stringify({id : e.id}),
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
    }).then(function(response) {
        return response.text();
    }).then(function() {
        location.reload();
    });

}

function showNumbersOfList() {
    let red = document.querySelector('.orders__content-title.red');
    let yellow = document.querySelector('.orders__content-title.yellow');
    let green = document.querySelector('.orders__content-title.green');

    red.innerText = `НЕПОДТВЕРЖДЕННЫЕ (всего: ${red.nextSibling.childNodes.length})`;
    yellow.innerText = `В ПРОЦЕССЕ (всего: ${yellow.nextSibling.childNodes.length})`;
    green.innerText = `ВЫПОЛНЕНЫЕ (всего: ${green.nextSibling.childNodes.length})`;

}

showNumbersOfList();