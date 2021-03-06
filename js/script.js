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

            // smooth scroll - menu elements
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

            // CLOSE NAVIGATION PANEL func
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

    //smooth scroll - internal elements
    const innerScrollElems = $('a.scrollDown, .home-content a');
    innerScrollElems.on('click', (e) => {
        let target = $(e.target).attr('href');
        if (typeof target === 'undefined') target = '#about';
        $('html, body').animate({
            scrollTop: $(target).offset().top,
        }, 500);
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


    // prevent projects links
    $('#projects a').on('click', e => {
        e.preventDefault();
    });

    // show on scroll
    const elemsToShow = $('.hide');
    $(window).on('scroll', checkIfShow);

    function checkIfShow() {
        elemsToShow.each((index, elem) => {
            const bottomOfWindow = $(window).scrollTop() + $(window).height();
            const topOfElem = $(elem).offset().top;

            if (bottomOfWindow > topOfElem) $(elem).addClass('emerge');
        });
    }

    // sticky header
    const header = $('header');
    const headerDist = header.offset().top;

    $(window).on('scroll', (e) => {
        if ($(window).scrollTop() > headerDist) header.addClass('sticky');
        else header.removeClass('sticky');
    });


    // validation of the form
    const form = $('form');
    form.on('submit', validateAndSubmit);
    const nameInput = $('#name');
    const emailInput = $('#email');
    const messageInput = $('#message');

    function validateAndSubmit(e) {
        e.preventDefault();
        const submitInfo = $('.submitInfo');
        submitInfo.empty();
        const validName = validateName();
        const validEmail = validateEmail();
        const validMessage = validateMessage();

        if (validName && validEmail && validMessage) {
            submitInfo.append('<p>The message has been successfully sent.</p>').addClass('ok');
            // $(this).unbind('submit').submit();
        } else {
            submitInfo.removeClass('ok');
        };

        function validateName() {
            const name = nameInput.val();
            const isValid = name.length > 2;
            if (!isValid) {
                submitInfo.append($('<p>Your name is too short.</p>'));
                nameInput.val('');
            };
            return isValid;
        }

        function validateEmail() {
            const email = emailInput.val();
            const isValid = (email.indexOf('@') !== -1) && (email.indexOf('.') !== -1);
            if(!isValid) {
                submitInfo.append($('<p>The email must have the "@" and "."</p>'));
                emailInput.val('');
            }
            return isValid;
        }

        function validateMessage() {
            const message = messageInput.val();
            const isValid = message.length > 10;
            if(!isValid) {
                submitInfo.append($('<p>Your message must be longer than 10 characters.</p>'));
                messageInput.val('');
            }
            return isValid;
        }
    }


});
