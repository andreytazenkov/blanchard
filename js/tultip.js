// $('.project-content__tultip').hover(function() {
//     console.log('add');
//     $('.project-content__tultip_small').addClass('project-content__tultip_small-active');
// }, function() {
//     $('.project-content__tultip_small').removeClass('project-content__tultip_small-active');
//     console.log('remove');
// });

$('#tultip__span-1').click(function(e) {
    $('#tultip__small-1').toggleClass('project-content__tultip_small-active');
    console.log('add');
});
$('#tultip__span-2').click(function(e) {
    $('#tultip__small-2').toggleClass('project-content__tultip_small-active');
    console.log('add');
});
$('#tultip__span-3').click(function(e) {
    $('#tultip__small-3').toggleClass('project-content__tultip_small-active');
    console.log('add');
});

// $(document).ready(function() {
//     let w = screen.width;
//     if (screen.width >= 768) {
//         console.log('hii');
//         $('#publication-book__swiper').addClass('publication-book__swiper');
//     } else if (screen.width < 768) {
//         $('#publication-book__swiper').removeClass('publication-book__swiper');
//     }
// });


// $(window).resize(function() {
//     if (document.documentElement.clientWidth >= 768) {
//         console.log('wii');
//         $('#publication-book__swiper').addClass('publication-book__swiper');
//         const bookSwiper = new Swiper('.publication-book__swiper', {
//             // autoplay: {
//             //    delay: 3000
//             // // },
//             slidesPerView: 2,
//             speed: 1800,
//             //loop: true,
//             //effect: 'fade',
//             //fadeEffect: {
//             //   crossFade: true
//             //},
//             // slidesPerView: 'auto',
//             // slidesPerColumn: 2,
//             navigation: {
//                 nextEl: '.publication-book__swiper-button-next',
//                 prevEl: '.publication-book__swiper-button-prev',
//             },
//         });
//     } else if (document.documentElement.clientWidth < 768) {
//         $('#publication-book__swiper').removeClass('publication-book__swiper');
//         console.log('hii');
//     }
// });