let stars = document.querySelector('.stars');
let moon = document.querySelector('.moon');
let mountain_behind = document.querySelector('.mountain-behind');
let text = document.querySelector('.text');
let btn = document.querySelector('.btn');
let mountain_front = document.querySelector('.mountain-front');
let header = document.querySelector('header')

window.addEventListener('scroll', function() {
    let value = window.scrollY

    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountain_behind.style.top = value * 0.5 + 'px';
    mountain_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})

