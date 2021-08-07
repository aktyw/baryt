const nav = document.querySelector(".navigation__list");

export function open() {
    this.classList.toggle('is-active');
    if(nav.style.transform == 'translateX(0%)' && window.screen.width < 769) {
        nav.style.transform = 'translateX(100%)';
    } else {
        nav.style.transform = 'translateX(0%)';
    }
}

export function hideMenu() {
    const burger = document.querySelector('.hamburger');
    if (window.screen.width < 768) {
        burger.classList.remove('is-active');
        if(nav.style.transform == 'translateX(0%)') {
            nav.style.transform = 'translateX(100%)';
        } else {
            nav.style.transform = 'translateX(0%)';
        }
    }
}
