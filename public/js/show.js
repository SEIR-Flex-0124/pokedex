document.addEventListener('DOMContentLoaded', function() {
    const upBtn = document.querySelector('.up');
    const downBtn = document.querySelector('.down');
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');
    const aBtn = document.querySelector('.buttonA');
    const bBtn = document.querySelector('.buttonB');
    const selectBtn = document.querySelector('.select');
    const startBtn = document.querySelector('.start');
    const addBtn = document.querySelector('.add');
    const removeBtn = document.querySelector('.remove');

    upBtn.addEventListener('click', function() {
        console.log('Up button clicked');
    });

    downBtn.addEventListener('click', function() {
        console.log('Down button clicked');
    });

    leftBtn.addEventListener('click', function() {
        console.log('Left button clicked');
    });

    rightBtn.addEventListener('click', function() {
        console.log('Right button clicked');
    });

    aBtn.addEventListener('click', function() {
        console.log('A button clicked');
    });

    bBtn.addEventListener('click', function() {
        console.log('B button clicked');
    });

    selectBtn.addEventListener('click', function() {
        console.log('Select button clicked');
    });

    startBtn.addEventListener('click', function() {
        console.log('Start button clicked');
    });

    addBtn.addEventListener('click', function() {
        console.log('Add button clicked');
    });

    removeBtn.addEventListener('click', function() {
        console.log('Remove button clicked');
    });
});

// Left & Right Div Slide Out

const leftDiv = document.querySelector('.leftDiv');
const rightDiv = document.querySelector('.rightDiv');
let slide = true;

// One Second Delay

setTimeout(() => {
    leftDiv.style.transform = 'translateX(-100%)';
    rightDiv.style.transform = 'translateX(100%)';
    slide = false;
}, 1000);




// Stat Bar

const hpFill = document.querySelector('.hpFill');
hpFill.style.width = `${selectedPokemon.stats.hp/2}%`;




