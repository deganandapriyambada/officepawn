window.addEventListener('load', (event) => {
    anime({
        targets: '#box',
        translateX: 1000,
        duration: 5000,
        easing: 'linear'
    });

    anime({
        targets: '#circle',
        translateX: 1000,
        duration: 10000,
        easing: 'linear'
    })

    anime({
        targets: '#mobil',
        translateX: 0,
        duration: random_speed(2500, 5000),
        easing: 'linear',
        rotate: 360,
        loop: true

    })

    function random_speed(min, max) {
        return Math.random() * (max - min) + min;
    }
})
