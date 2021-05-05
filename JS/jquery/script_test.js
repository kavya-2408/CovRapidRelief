$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,

    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1000: {
            items: 3
        },
    }
})