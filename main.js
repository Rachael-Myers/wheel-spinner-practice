var rocket = document.querySelector('.rocket');
var btn = document.querySelector('.button');
var rotate = false;
var runner;
var degrees = 0;

function start(){
    runner = setInterval(function(){
        degrees++;
        rocket.style.webkitTransform = 'rotate(' + degrees + 'deg)';
    },10)
}

function stop(){
    clearInterval(runner);
}

btn.addEventListener('click', function(){
    if (!rotate){
        rotate = true;
        start();
    } else {
        rotate = false;
        stop();
    }
})