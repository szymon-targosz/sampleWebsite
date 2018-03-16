$(() => {


    // SHOW/HIDE NAVIGATION
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

            const anchors = $('.nav-main-list a');
            anchors.on('click', (e) => {
                e.preventDefault();
                const target = $(e.target).attr('href');
                $('html, body').animate({
                    scrollTop: $(target).offset().top,
                }, 600, () => {
                    closeNav()
                });
            });


            // closing navigation
            $('nav a.nav-close').on('click', closeNav);

            // CLOSE NAVIGATION PANEL
            function closeNav() {
                navElements.animate({
                    left: '100px',
                    opacity: 0,
                }, 400);
                nav.animate({
                    right: '-280px',
                }, 500);
            }

        };
    }

    // PREVENT SUBMIT
    $('input[type="submit"]').on('click', (e) => {
        e.preventDefault();
    });

    //scroll to top button
    const scrollUpBtn = $('.scroll-up');
    $(window).on('scroll', (e) => {
        if ($(this).scrollTop() > 350) scrollUpBtn.fadeIn();
        else scrollUpBtn.fadeOut();
    });

    scrollUpBtn.on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 600);
    });

});
