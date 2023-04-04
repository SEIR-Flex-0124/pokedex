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