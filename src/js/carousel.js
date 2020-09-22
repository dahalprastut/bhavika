$(document).ready(function () {
    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,

            },
            600: {
                items: 1,
                loop: true,

            },
            1000: {
                items: 1,
                loop: true,
            }
        },
        dots: true,
        nav: false

    })
});


$(document).ready(function () {
    $('.brands-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                loop: true,
                margin: 5

            },
            600: {
                items: 3,
                loop: true,

            },
            1000: {
                items: 5,
                loop: true,
            }
        },
        dots: true,
        nav: false

    })
});

$(document).ready(function () {
    $('.featured-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                loop: true,
                margin: 5

            },
            600: {
                items: 3,
                loop: true,

            },
            1000: {
                items: 4,
                loop: true,
            }
        },
        dots: true,
        nav: false

    })
});