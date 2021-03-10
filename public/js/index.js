if (window.location.pathname !== '/order') {
    
    const header_row2 = document.querySelector('.header__row');
    const header_burger2 = document.querySelector('.header__burger');
    const heart_icon2 = document.querySelector('.header__icons-heart a img');
    const cart_icon2 = document.querySelector('.header__icons-cart img');
    const main_logo = document.querySelector('.logo');
    const logoImg = document.querySelector('.logo img');

    window.addEventListener('scroll', function () {
        
        if (window.scrollY > 50) {
            header_row2.classList.add('active');
            header_burger2.classList.add('tool');
            heart_icon2.src = '../images/heart.svg';
            cart_icon2.src = '../images/bag.svg';
            logoImg.src = '../images/logo.png';
            logoImg.style.display = 'block';
        } else {
            header_row2.classList.remove('active');
            header_burger2.classList.remove('tool');
            heart_icon2.src = '../images/heart-white.svg';
            cart_icon2.src = '../images/bag-white.svg';
            logoImg.style.display = 'none';
        }

        if (window.location.pathname == '/subcategory' || window.location.pathname == '/goods' || window.location.pathname == '/contacts') {  
            header_row2.classList.add('active');
            header_burger2.classList.add('tool');
            heart_icon2.src = '../images/heart.svg';
            cart_icon2.src = '../images/bag.svg';
            logoImg.src = '../images/logo.png';
            logoImg.style.display = 'block';
        }

        if (window.location.pathname === '/') {
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
    });

    if (window.location.pathname == '/favorite' || window.location.pathname == '/goods') {
        logoImg.src = '../images/logo-white.png';
        main_logo.classList.add('active');
    }



    if (window.location.pathname == '/subcategory' || window.location.pathname == '/goods' || window.location.pathname == '/contacts') {     
        header_row2.classList.add('active');
        main_logo.classList.add('active');
        header_burger2.classList.add('tool');
        heart_icon2.src = '../images/heart.svg';
        cart_icon2.src = '../images/bag.svg';
        logoImg.src = '../images/logo.png';
        logoImg.style.display = 'block';
    }

    
}

