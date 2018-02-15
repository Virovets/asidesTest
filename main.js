window.addEventListener('scroll', stickyHeader);
var block = document.querySelector('.block');
var blockBottom = block.getBoundingClientRect().bottom + window.pageYOffset;
var header = document.querySelector('header');
var headerBottom = header.getBoundingClientRect().bottom + window.pageYOffset;
var flag = true;

function stickyHeader() {

    if (window.pageYOffset < blockBottom) {
        block.classList.remove('sticky');
        flag = true;
    } else if (window.pageYOffset > blockBottom && flag) {
        block.classList.add('sticky');
        block.style.opacity = 0;
        fade(header, 1000, 50);
        flag = false;
    } else {
        clearInterval(fade);
    }
}

function fade(elem, t, f) {
    var fps = f || 50;
    var time = t || 500;
    var steps = time / fps;
    var op = 0;
    var d0 = 1 / steps;
    var timer = setInterval(function() {
        op += d0;
        block.style.opacity = op;
        steps--;
        if (steps == 0) {
            clearInterval(timer);
        }
    }, (1000 / fps));

};

var buttonL = document.querySelector('#left');
var menuL = document.querySelector('#leftMenu');


buttonL.addEventListener('click', function() {
    menuL.classList.toggle('show');
})

var buttonR = document.querySelector('#right');
var menuR = document.querySelector('#rightMenu')

buttonR.addEventListener('click', function() {
    menuR.classList.toggle('show');
})