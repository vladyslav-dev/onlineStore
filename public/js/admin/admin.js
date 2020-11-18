window.onload = function() {

    let burger = document.getElementsByClassName('header__burger');
    let menu = document.getElementsByClassName('header__menu');
    let body = document.getElementsByTagName('body');
    let header__menu_back = document.querySelectorAll('.header__menu-back')[0];
    let header_list_general = document.querySelector('.header__list-general');

    burger[0].addEventListener('click', () => {
        burger[0].classList.toggle('active');
        menu[0].classList.toggle('active');
        body[0].classList.toggle('active');
        header__menu_back.classList.toggle('active');

        if (!(burger[0].className == "header__burger active")) {
            header_list_general.classList.remove('active');
        }
    });

    header__menu_back.addEventListener('click', () => {
        burger[0].classList.remove('active');
        menu[0].classList.remove('active');
        body[0].classList.remove('active');
        header__menu_back.classList.remove('active');
        header_list_general.classList.remove('active');

    });

    document.querySelector('.search_btn').onclick = function () {
        let inp = document.querySelector('#search-inp');
        let val = inp.value.trim();
        let data = document.querySelectorAll(".good__info-text");
        let flag = 0;

            data.forEach( item => {

                if (val != '') {
                    if (item.innerText.search(val) == -1) {
                    
                        item.classList.remove('active');
                    } else {
                        item.classList.add('active');
                        flag++;
                        if (flag == 1) {
                            window.location = '/api/admin-page/dashboard#'+item.id;
                        }
                    }
                }  
            });    
    };
}
    
    


