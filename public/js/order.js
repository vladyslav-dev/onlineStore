
if (window.location.pathname == '/order') {

    const rules = `<div id="rule-text">
    <div class="modal__rule-header"><h2>Условия пользовательского соглашения</h2><img src="../images/close-icon.png" id="close_rule"></div>
    <p><strong>Уважаемый, покупатель!</strong><br>
    Пожалуйста, перед покупкой товара внимательно прочитайте&nbsp;Пользовательское соглашение с Интернет-магазином Vinoro</p>
    <p>Настоящий текст является Пользовательским соглашением между Интернет-магазином Vinoro.com.ua именуемым в дальнейшем "Интернет-магазин", и пользователем услуг Интернет-магазина, именуемым в дальнейшем «Покупатель» и определяет условия приобретения товаров через сайт Интернет-магазина.</p>
    <p><strong>1. Основные положения</strong><br>
    1.1. Настоящее Соглашение заключается между Покупателем и Интернет-магазином в момент оформления заказа.<br>
    1.2. Информация, размещённая на сайте Интернет-магазина, содержит условия предложения покупки товара и представляет собой публичную оферту, статус которого закреплен ст.633 Гражданского кодекса Украины (ГКУ). Акцептом является факт оформления заказа на предложенный товар.<br>
    1.3. При оформлении заказа Покупатель соглашается с условиями, оговоренными настоящим Соглашением, "Я прочитал и согласен с правилами Пользовательского соглашения" при оформлении заказа.<br>
    1.4. Совершить покупку в Интернет-магазине может любое физическое или юридическое лицо, способное принять и оплатить товар.<br>
    1.5. Товар оплачивается в национальной валюте Украины при доставке товара или безналичным банковским переводом.</p>
    <p><strong>2. Информация о товарах</strong><br>
    2.1. Товар представлен в каталоге через фото-образцы, являющиеся собственностью Интернет-магазина.<br>
    2.2. Каждый фото-образец сопровождается текстовой информацией: названием, ценой и описанием товара.<br>
    2.3. По просьбе Покупателя менеджер Интернет-магазина обязан предоставить (по телефону или посредством электронной почты) дополнительную информацию, необходимую и достаточную, с точки зрения Покупателя, для принятия им решения о покупке товара.<br>
    2.4. Указанная на сайте цена товара может быть изменена Интернет-магазином в одностороннем порядке.<br>
    2.5. В случае изменения цены товара, заказанного Покупателем, менеджер Интернет-магазина при первой возможности информирует об этом Покупателя (по телефону или посредством электронной почты) для получения подтверждения либо аннулирования заказа. При невозможности связаться с Покупателем данный заказ считается аннулированным.</p>
    <p><strong>3. Порядок приобретения товара в интернет-магазинe</strong><br>
    3.1. Заказы принимаются через Интернет-магазин и официальные страницы в социальных сетях.<br>
    3.2. Покупатель Интернет-магазина имеет право оформить заказ на любой товар, представленный на сайте Интернет-магазина и имеющийся в наличии. Каждый товар может быть заказан в любом количестве. Заказ может быть оформлен Покупателем следующими способами:&nbsp;<span style="line-height: 1.6em;">сделан по телефону, по электронной почте или оформлен самостоятельно на сайте.</span></p>
    <p>3.3. При отсутствии товара на складе, менеджер компании обязан поставить Покупателя в известность (по телефону или через электронную почту).<br>
    3.4. При отсутствии товара Покупатель вправе заменить его товаром аналогичной модели, отказаться от данного товара, аннулировать заказ.<br>
    3.5. Покупатель вправе отказаться от заказа в любое время до момента его отправки Покупателю, поставив в известность Интернет-магазин по телефону или через электронную почту.</p>
    <p><strong>4. Доставка и передача товара Покупателю</strong><br>
    4.1. Доставка товара, приобретенного в Интернет-магазине, осуществляется курьерскими службами или Укрпочтой.<br>
    4.2 Отправка заказанного товара производится в течение&nbsp;2-х рабочих дней со дня подтверждения заказа Покупателем. Суббота, воскресенье и официально признанные праздники не входят в число рабочих дней.<br>
    4.3. Вместе с заказом&nbsp;Покупателю предоставляются следующие документы:<br>
    товарный чек или расходная накладная, транспортная накладная (выдается курьерской&nbsp;службой при&nbsp;доставке).<br>
    4.4. Покупатель обязан в присутствии курьера или пункте выдачи произвести приемку заказанного товара по количеству, качеству, ассортименту и комплектности товара.<br>
    4.5. Фактом приемки товара Покупателем является оплата товара Покупателем.<br>
    4.6. При отказе Покупателя от заказа в момент доставки, Покупателем оплачиваются расходы Интернет-магазина на доставку заказа.<br>
    4.6. Покупатель не обязан компенсировать расходы Интернет-магазина связанные с доставкой заказа, если в процессе приемки товара обнаружится, что поставлен товар ненадлежащего качества, количества, ассортимента или комплектности.</p>
    <p><strong>5. Оплата заказа</strong><br>
    5.1. Заказ, сделанный в Интернет-магазине, оплачивается Покупателем путем банковского перевода или передачи наличных денег курьерской службой.<br>
    5.2. Оплата заказа по безналичному расчету должна быть сделана Покупателем путем 100% авансового перечисления средств на расчетный счет Интернет-магазина в течение двух рабочих дней со дня подтверждения заказа.<br>
    5.3. При не поступлении денежных средств, интернет-магазин оставляет за собой право аннулировать заказ.</p>
    <p><strong>6. Порядок возврата товара надлежащего качества</strong><br>
    6.1. Покупатель вправе отказаться от поставленного товара в момент получения от курьера или в пункте выдачи.<br>
    6.2. Возврат товара в Интернет-магазин возможен в случае, если сохранены его товарный вид, потребительские свойства, оригинальная фабричная упаковка, бирка прикрепленная к товару ниткой с пломбой производителя, товарный чек или расходная накладная, транспортная накладная.<br>
    6.3. Возврат товара в Интернет-магазин производится за счет Покупателя.<br>
    6.4. При возврате Покупателем товара надлежащего качества, Интернет-магазин возвращает ему уплаченную за товар денежную сумму по факту возврата товара за вычетом компенсации расходов магазина связанных с доставкой товара Покупателю.</p>
    <p><strong>7. Порядок возврата товара, приобретенного через интернет магазин, при обнаружении скрытого брака, гарантийное обслуживание</strong><br>
    7.1. На товары, приобретенные в Интернет-магазине установлен пожизненный гарантийный срок. В течение которого, в случае обнаружения в товаре скрытого брака, Покупатель имеет право на&nbsp;безвозмездное устранение недостатков, соразмерное уменьшение покупной цены, замены на товар аналогичной модели, на любой другой с соответствующим перерасчетом покупной цены, возврата товара и получения за него денег, в установленном Законом Украины "О защите прав потребителей" порядке.<br>
    7.2. Возврат товара в Интернет-магазин производится за счет Покупателя.</p>
    <p><strong>8. Прочее</strong><br>
    8.1. Интернет-магазин оставляет за собой право расширять и сокращать товарное предложение на Сайте, регулировать доступ к покупке любых товаров, а также приостановить или прекратить продажу любых товаров по своему собственному усмотрению.<br>
    8.2. Настоящее Соглашение должно рассматриваться в том виде, как оно опубликовано на Сайте, и должно применяться и толковаться в соответствии с законодательством Украины.</p>
    </div>`;

    document.querySelectorAll('footer')[0].style.display = 'none';

    document.querySelectorAll('.modal__rule-block')[0].innerHTML = rules;
    let modal_rule = document.querySelector('.modal__rule');
    let modal_rule_block = document.querySelector('.modal__rule-block');
    document.querySelector('#close_rule').onclick = function() {
        modal_rule.style.display = 'none';
        modal_rule_block.style.display = 'none';
        document.getElementsByTagName('body')[0].classList.remove('active');
    }

    function showRule() {
        modal_rule.style.display = 'block';
        modal_rule_block.style.display = 'block';
        document.getElementsByTagName('body')[0].classList.add('active');
    }

    let phoneInp = document.querySelector('#phone');

    let maskOptions = {
        mask: '+{38}(000)000-00-00'
    };

    IMask(phoneInp, maskOptions);

    const radios1 = document.getElementsByName('radio-group'); // postName
    const radios2 = document.getElementsByName('radio-group2') // paymentMethod

    let firstName;
    let lastName;
    let city;
    let mail;
    let phone;
    let postName;
    let post;
    let paymentMethod;

    function finishOrder() {

        radios1.forEach(item => {
            if(item.checked) {
                postName = item.value || 'Данные не указаны';
            }
        })

        radios2.forEach(item => {
            if(item.checked) {
                paymentMethod = item.value || 'Данные не указаны';
            }
        })

        if(firstName == undefined || lastName == undefined || city == undefined || mail == undefined || phone == undefined) {
            console.log('canceled');
            document.querySelectorAll('.order__warning')[0].style.display = 'block';
            return false;
        } else {
            document.querySelectorAll('.order__warning')[0].style.display = 'none';
        }

        const orderId = `#${Date.now()}`;
        
        moment.locale('ru');  
        const date = `${moment().format('L')}, ${moment().format('LT')}`;

        const dataOrder = {
            'orderId' : orderId,
            'firstName' : firstName,
            'lastName' : lastName,
            'city' : city,
            'mail': mail,
            'phone': phone,
            'postName' : postName,
            'post' : post,
            'paymentMethod': paymentMethod,
            'date': date,
            'key' : JSON.parse(localStorage.getItem('cart'))
        }

        fetch('/finish-order', {
            method: 'POST',
            body : JSON.stringify(dataOrder),
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(function(response) {
            return response.text();
        }).then(function(body) {
            if(body == 1) {
            console.log('success');
            showCheck(dataOrder);
            } else {
                console.log('something went wrong');
            }
        });
    }

    function checkInput(inp) {

        if (inp.required) {
            inp.classList.add('active');
        } else {
            inp.classList.remove('active');
        }

        if (inp.value == '') {
            emptyField(inp);
            return false;
        } else {
            switch(inp.id) {
                case 'firstName' : if (validateFirstName(inp.value.trim())) {
                    fillRight(inp);
                    firstName = inp.value.trim();
                } else {
                    fillWrong(inp);
                };
                    break;
                case 'lastName' : if (validateLasttName(inp.value.trim())) {
                    fillRight(inp);
                    lastName = inp.value.trim();
                } else {
                    fillWrong(inp);
                };
                    break;
                case 'city' : if (validateCity(inp.value.trim())) {
                    fillRight(inp);
                    city = inp.value.trim();
                } else {
                    fillWrong(inp);
                };
                    break;
                case 'mail' : if (validateEmail(inp.value.trim())) {
                    fillRight(inp);
                    mail = inp.value.trim();
                } else {
                    fillWrong(inp);
                };
                    break;
                case 'phone' : if (validatePhone(inp.value.trim())) {
                    fillRight(inp);
                    phone = inp.value.trim();
                } else {
                    fillWrong(inp);
                };
                    break;
                case 'post' : post = inp.value.trim() || 'Данные не указаны';      
                    break;
            }
        }
    }

    function validateFirstName(firstName) {
        let pattern  = /[A-Za-zА-Яа-яЁё]/
        return pattern.test(firstName);
    }

    function validateLasttName(lastName) {
        let pattern  = /[A-Za-zА-Яа-яЁё]/
        return pattern.test(lastName);
    }

    function validateCity(city) {
        let pattern  = /[A-Za-zА-Яа-яЁё]/
        return pattern.test(city);
    }

    function validateEmail(email) {
        let pattern  = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        return pattern.test(String(email).toLowerCase());
    }

    function validatePhone(phone) { 
        let pattern = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        return pattern.test(phone);
    }

    function emptyField(param) {
        param.nextSibling.classList.remove('active');
        param.style.border = '1px solid #afafaf';
        param.nextSibling.nextSibling.style.display = 'none';
    }

    function fillWrong(param) {

        param.nextSibling.classList.add('active');
        param.nextSibling.nextSibling.style.display = 'block';
        param.style.border = '1px solid red';
    }

    function fillRight(param) {

        param.nextSibling.nextSibling.style.display = 'none';
        param.style.border = '1px solid #afafaf';
    }

    function showCheck(data) {

        window.localStorage.removeItem('cart');
        
        let wrap =  document.querySelectorAll('.wrap')[0];
        wrap.innerHTML = '';
        let content = `
                        <div class="order__header"><div class="order__header-container"><div class="order__header-logo"><img src="./images/logo-footer.png"></div><div class="order__header-exit"><img src="images/exit.svg" onclick="history.back()"></div></div></div>
                        <div class="order__finish-container">
                            <div class="order__finish-header">Заказ оформлен :)</div>
                            <div class="order__finish-orderId">Номер заказа ${data.orderId}</div>
                            <div class="order__finish-row">
                                <div class="order__info-name">Имя</div>
                                <div class="order__info-data">${data.firstName}</div>
                            </div>
                            <div class="order__finish-row">
                                <div class="order__info-name">Фамилия</div>
                                <div class="order__info-data">${data.lastName}</div>
                            </div>
                            <div class="order__finish-row">
                                <div class="order__info-name">Город</div>
                                <div class="order__info-data">${data.city}</div>
                            </div>
                            <div class="order__finish-row">
                                <div class="order__info-name">Email</div>
                                <div class="order__info-data">${data.mail}</div>
                            </div>
                            <div class="order__finish-row">
                                <div class="order__info-name">Телефон</div>
                                <div class="order__info-data">${data.phone}</div>
                            </div>
                            <div class="order__finish-row">
                                <div class="order__info-name">Почта</div>
                                <div class="order__info-data">${data.postName}</div>
                            </div>
                            <div class="order__finish-row">
                                <div class="order__info-name">Адресс и номер отделения</div>
                                <div class="order__info-data">${data.post}</div>
                            </div>
                            <div class="order__finish-row">
                                <div class="order__info-name">Способ оплаты</div>
                                <div class="order__info-data">${data.paymentMethod}</div>
                            </div>
                            <div class="order__finish-date">
                                <div>Дата/время заказа</div>
                                <div>${data.date}</div>
                            </div>
                            <div class="order__finish-end">Ожидайте звонка на телефон</div>
                        </div>`;

        wrap.innerHTML = content;
    }
}






