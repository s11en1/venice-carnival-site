"use strict";


let slideClass = '.main__slider-slide';
let sliderMarkerClass = '.main__slider-marker';
let activeClass = 'active';

let interval = 3500;
let currentIndex = 0;
let intervalFunc;

let slides = document.querySelectorAll(slideClass);
let sliderMarkers = document.querySelectorAll(sliderMarkerClass);

function initializeSlider()
{
    currentIndex = 0;
    showSlide();
    intervalFunc = setInterval(nextSlide, interval);
}

function nextSlide()
{
    currentIndex++;

    if (currentIndex >= slides.length)
        currentIndex = 0;

    showSlide();
}

function reset()
{
    slides.forEach(slide => {
        slide.classList.remove(activeClass);
    });

    sliderMarkers.forEach(marker => {
        marker.classList.remove(activeClass);
    });
}

function showSlide()
{
    reset();

    slides[currentIndex].classList.add(activeClass);
    sliderMarkers[currentIndex].classList.add(activeClass);
}

initializeSlider();