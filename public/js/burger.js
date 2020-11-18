if (window.location.pathname !== '/order') {
    
    let burger = document.getElementsByClassName('header__burger');
    let menu = document.getElementsByClassName('header__menu');
    let body = document.getElementsByTagName('body');
    let header__menu_back = document.querySelectorAll('.header__menu-back')[0];
    let categor_more_icon = document.querySelector('.categor-more-icon');
    let header_list_general = document.querySelector('.header__list-general');
    let header__list_select = document.querySelector('.header__list-select');
    let arrow_back = document.querySelector('.arrow-back');

    burger[0].addEventListener('click', () => {
        burger[0].classList.toggle('active');
        menu[0].classList.toggle('active');
        body[0].classList.toggle('active');
        header__menu_back.classList.toggle('active');

        if (!(burger[0].className == "header__burger active")) {
            header_list_general.classList.remove('active');
            categor_more_icon.classList.remove('active');
            header__list_select.classList.remove('active');
            arrow_back.classList.remove('active');
        }
    });

    header__menu_back.addEventListener('click', () => {
        burger[0].classList.remove('active');
        menu[0].classList.remove('active');
        body[0].classList.remove('active');
        header__menu_back.classList.remove('active');
        header_list_general.classList.remove('active');
        categor_more_icon.classList.remove('active');
        header__list_select.classList.remove('active');
        arrow_back.classList.remove('active');
    });

        categor_more_icon.addEventListener('click', () => {
            header_list_general.classList.add('active');
            categor_more_icon.classList.add('active');
            header__list_select.classList.add('active');
            arrow_back.classList.add('active');
        });
    
        arrow_back.addEventListener('click', () => {
            header_list_general.classList.remove('active');
            categor_more_icon.classList.remove('active');
            header__list_select.classList.remove('active');
            arrow_back.classList.remove('active');
        });

} 
