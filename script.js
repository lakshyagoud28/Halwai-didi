// JavaScript for banner slide navigation
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let slideIndex = 0;

function slideNext() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    updateSlider();
}

function slidePrev() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slider.children.length - 1;
    }
    updateSlider();
}

leftArrow.addEventListener('click', slidePrev);
rightArrow.addEventListener('click', slideNext);

function updateSlider() {
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

setInterval(slideNext, 5000); // Change slide every 5 seconds




//copy from yt

var menubar=document.querySelector(".menubar");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");
menubar.onclick=function(){
sidebar.classList.toggle("small-sidebar");
container.classList.toggle("large-container");
}


