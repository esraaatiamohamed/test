// menu-btn-fixed-when-scroll
    $(window).scroll(function(){
        if($(document).scrollTop () > 20){
            $('.navigation').addClass('fix-icon');
        }
        else{
            $('.navigation').removeClass('fix-icon');
        }
    });

// Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        },
    });
