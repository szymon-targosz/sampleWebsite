$(() => {

    const menuBtn = $('a.menu');
    menuBtn.on('click', showMenu);

    function showMenu(e) {
        e.preventDefault();
        const nav = $('nav');
        const navElements = $('nav ol, nav ul, nav p')
        if (nav.css('right') == '-280px') {
            nav.animate({
                right: '0',
            }, 500);
            navElements.animate({
                left: 0,
                opacity: 1,
            }, 800);

            const navCloseBtn = $('nav a.nav-close');
            navCloseBtn.on('click', closeNav);

            function closeNav() {
                navElements.animate({
                    left: '100px',
                    opacity: 0,
                }, 500);
                nav.animate({
                    right: '-280px',
                }, 800);
            }

        };
    }


});
