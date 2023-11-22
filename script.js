document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.hero__card');
    const text = document.querySelector('.hero__text');

    card.classList.add('show');
    text.classList.add('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutContainer = document.querySelector(".about__container");

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
    const appointmentItems = document.querySelector(".appointment__itens");

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
    var items = document.querySelectorAll('.services__itens div');

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

