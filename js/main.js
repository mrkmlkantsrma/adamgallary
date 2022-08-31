  jQuery(".history-info .btn-read").click(function(){
jQuery(".more").toggle();
});
 $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar").addClass("stickyadd");
    } else {
        $(".navbar").removeClass("stickyadd");
    }
});

         var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: 5000,
    autoplayStopOnLast: false, // loop false also
    // If we need pagination
    pagination: '.swiper-pagination',
    paginationType: "bullets",
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 60,
    //
    slidesPerView: 2,
    //
    centeredSlides: false,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
	  breakpoints: {

        // when window width is >= 320px

        320: {

          slidesPerView: 1,

          spaceBetween: 20

        },

        // when window width is >= 480px

        480: {

          slidesPerView: 1,

          spaceBetween: 30

        },

        // when window width is >= 640px

        640: {

          slidesPerView: 1,

          spaceBetween: 40

        }

       }

  })