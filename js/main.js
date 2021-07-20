$(document).ready(function(){

    $('.header__burger,.header__link').click(function(event) {
        $('.header__burger,.header__nav').toggleClass('active');
    });

    $('.work__tab-nav a').click(function(event) {
        $('.work__tab-nav a').removeClass('active');
        $(this).addClass('active');
        var href = $(this).attr('href');
        $('.work__tab').removeClass('active');
        $(href).addClass('active');
        return false;
    });

    $('.services__slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        adaptiveHeight:true,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2
                }
            },{
                breakpoint: 991,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3
                }
            }
        ],
        mobileFirst:true,
    });
    

    
});