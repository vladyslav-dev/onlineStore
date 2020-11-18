   
if (window.location.pathname !== '/order') {
    
    let header_row2 = document.querySelectorAll('.header__row')[0];
    let header_burger2 = document.querySelectorAll('.header__burger')[0];
    let search_icon2 = document.querySelectorAll('.header__search img')[0];
    let heart_icon2 = document.querySelectorAll('.header__icons-heart a img')[0];
    let cart_icon2 = document.querySelectorAll('.header__icons-cart img')[0];
    let inp_search = document.querySelectorAll('.inp-search')[0];
    let main_logo = document.querySelectorAll('.logo')[0];
    let logoImg = document.querySelectorAll('.logo img')[0];

    window.addEventListener('scroll', function () {
        
        if (window.scrollY > 50) {
            header_row2.classList.add('active');
            inp_search.classList.add('active');
            header_burger2.classList.add('tool');
            search_icon2.src = '../images/search.svg';
            heart_icon2.src = '../images/heart.svg';
            cart_icon2.src = '../images/bag.svg';
            logoImg.src = '../images/logo.png';
            logoImg.style.display = 'block';
        } else {
            header_row2.classList.remove('active');
            inp_search.classList.remove('active');
            header_burger2.classList.remove('tool');
            search_icon2.src = '../images/search-white.svg';
            heart_icon2.src = '../images/heart-white.svg';
            cart_icon2.src = '../images/bag-white.svg';
            logoImg.style.display = 'none';
        }

        if (window.location.pathname == '/subcategory') {  
            header_row2.classList.add('active');
            inp_search.classList.add('active');
            header_burger2.classList.add('tool');
            search_icon2.src = '../images/search.svg';
            heart_icon2.src = '../images/heart.svg';
            cart_icon2.src = '../images/bag.svg';
            logoImg.src = '../images/logo.png';
            logoImg.style.display = 'block';
        
        }

        if (window.location.pathname == '/') {
            if (window.scrollY > 440) {
                main_logo.classList.add('active');
            } else {
                main_logo.classList.remove('active');
            }
        } else {
            main_logo.classList.add('active');
        }

        if (window.location.pathname == '/favorite') {
            if (window.scrollY > 50) {
                logoImg.src = '../images/logo.png';
                logoImg.style.display = 'block';
            } else {
                logoImg.src = '../images/logo-white.png';
                logoImg.style.display = 'block';
            }
        }

        if (window.location.pathname == '/goods') {
            if (window.scrollY > 50) {
                logoImg.src = '../images/logo.png';
                logoImg.style.display = 'block';
            } else {
                logoImg.src = '../images/logo-white.png';
                logoImg.style.display = 'block';
            }
        }
    });

    if (window.location.pathname == '/favorite') {
        logoImg.src = '../images/logo-white.png';
        main_logo.classList.add('active');
    }

    if (window.location.pathname == '/goods') {
        logoImg.src = '../images/logo-white.png';
        main_logo.classList.add('active');
    }


    if (window.location.pathname == '/subcategory') {     
        header_row2.classList.add('active');
        inp_search.classList.add('active');
        main_logo.classList.add('active');
        header_burger2.classList.add('tool');
        search_icon2.src = '../images/search.svg';
        heart_icon2.src = '../images/heart.svg';
        cart_icon2.src = '../images/bag.svg';
        logoImg.src = '../images/logo.png';
        logoImg.style.display = 'block';
    }

    
}

