window.addEventListener('DOMContentLoaded', show);
const btn = document.querySelector('.back-to-top');
const footer = document.querySelector('.footer');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};

let optionsBtn = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, options);

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            btn.classList.add('in-view');
            btn.classList.remove('btn__none');
        } else {
            btn.classList.remove('in-view');
            btn.classList.add('btn__none'); 
        }
    });
    
}, optionsBtn);

io.observe(footer);

function show(){
    const fades = document.querySelectorAll('.fade');
    const indexes = document.querySelectorAll('.fade__index');
    const titles = document.querySelectorAll('.fade__titles');

    for(let fade of fades) {
        observer.observe(fade);
    }

    for(let index of indexes) {
        observer.observe(index);
    }

    for(let title of titles) {
        observer.observe(title);
    }
}
