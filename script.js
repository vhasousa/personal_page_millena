document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.hero-card');
    const text = document.querySelector('.hero-text');

    card.classList.add('show');
    text.classList.add('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutContainer = document.querySelector(".about-container");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    aboutObserver.observe(aboutContainer);
});

document.addEventListener("DOMContentLoaded", function () {
    const appointmentItems = document.querySelector(".appointment-itens");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const appointmentObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    appointmentObserver.observe(appointmentItems);
});

document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.services-itens div');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showItemsOnScroll() {
        items.forEach(function (item) {
            if (isInViewport(item)) {
                item.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', showItemsOnScroll);

    // Initial check
    showItemsOnScroll();
});

document.querySelector('.scroll-down-arrow').addEventListener('click', function() {
    const targetElement = document.getElementById('home');
    const offset = targetElement.offsetTop;

    window.scroll({
        top: offset,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-button');

    mobileMenu.addEventListener('click', function () {
        document.body.classList.toggle('mobile-menu-open');
    });

    overlay.addEventListener('click', function () {
        document.body.classList.remove('mobile-menu-open');
    });

    closeButton.addEventListener('click', function () {
        document.body.classList.remove('mobile-menu-open');
    });

    // Feche o menu ao clicar em um link do menu
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            document.body.classList.remove('mobile-menu-open');
        });
    });
});

