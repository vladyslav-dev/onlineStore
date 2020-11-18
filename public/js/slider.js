$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay : 3000,
        dots : true
    });
});


$(function(){
    $('.slider-cart').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 850,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '10%',
              }
            },
            {
                breakpoint: 1115,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '5%',
              }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '1%',
              }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '13%',
              }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '7%',
              }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '2%',
              }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '23%',
              }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '8%',
              }
            }
        ]
    });
});

