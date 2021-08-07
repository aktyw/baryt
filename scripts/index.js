import { open, hideMenu } from "./hamburger";
import slide from "./menu";
import handleSubmit from "./form";
import { options, observer, show } from "./observer";
import { gsap } from "gsap";
import { LightGallery } from "lightgallery/lightgallery";

const burger = document.querySelector(".hamburger");
const menu = document.querySelectorAll('.accordion__title');
const links = document.querySelectorAll('.navigation__item-link');
const form = document.querySelector(".form");

burger.addEventListener('click', open);
form.addEventListener('submit', handleSubmit);
menu.forEach(item => item.addEventListener('click', slide ));
links.forEach(link => link.addEventListener('click', hideMenu));    


const tl = gsap.timeline();


    tl.fromTo('.title__span--first', {
        y: '100px'
    }, {
        y: '0px',
        ease: 'Power1.easeInOut',
        duration: 1,
        autoAlpha: 1
    })
    .fromTo('.title__span--second', {
        y: '100px'
    }, {
        y: '0px',
        ease: 'Power1.easeInOut',
        duration: 1,
        autoAlpha: 1
    }, "-=.4")
    .fromTo('.textbox__subtitle', {
        x: '4px',
        y: '150px'
    }, {
        autoAlpha: 1,
        y: '0px',
        duration: .8
    },"-=.4")
    .to('.btn__show', {
        opacity: 1,
        duration: .5,
        autoAlpha: 1
    },"-=.4")
    .from('.hero__image', {
        duration: 1.2,
        ease: 'Power4.easeInOut',
        width: 0,
        autoAlpha: 0
    },"-=.9")
    .fromTo('.navigation', {
        y: '-50'
    }, {
        opacity: 1,
        y: 0,
        duration: .5,
        autoAlpha: 1
    },"-=.7")
    .to(['.arrow__left', '.arrow__right'], {
        duration: .6,
        height: '10px',
        width: '2px',
        autoAlpha: 1
    },"-=.7")
    .fromTo('.arrow', {
        height: 0
    }, {
        height: '125px',
        duration: .6,
        ease: 'expo',
        autoAlpha: 1
    },"-=.7")
    .fromTo('.phone-mobile', {
        opacity: 0
    }, {
        autoAlpha: 1
    });

    // const anime = gsap.timeline(); 

    // anime.fromTo()







