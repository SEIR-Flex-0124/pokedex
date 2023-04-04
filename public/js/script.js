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

// Pokemon Slide Show

let pokemonSprites = [
    'https://img.pokemondb.net/sprites/black-white/normal/pikachu-f.png',
    'https://img.pokemondb.net/sprites/black-white/normal/charizard.png',
    'https://img.pokemondb.net/sprites/black-white/normal/mewtwo.png',
    'https://img.pokemondb.net/sprites/black-white/normal/wartortle.png',
    'https://img.pokemondb.net/sprites/black-white/normal/magneton.png',
    'https://img.pokemondb.net/sprites/black-white/normal/onix.png',
    'https://img.pokemondb.net/sprites/black-white/normal/hypno-f.png',
    'https://img.pokemondb.net/sprites/black-white/normal/electrode.png',
    'https://img.pokemondb.net/sprites/black-white/normal/hitmonchan.png',
    'https://img.pokemondb.net/sprites/black-white/normal/marowak.png',
    'https://img.pokemondb.net/sprites/black-white/normal/chansey.png',
    'https://img.pokemondb.net/sprites/black-white/normal/kangaskhan.png',
    'https://img.pokemondb.net/sprites/black-white/normal/starmie.png',
    'https://img.pokemondb.net/sprites/black-white/normal/mr-mime.png',
    'https://img.pokemondb.net/sprites/black-white/normal/scyther-f.png',
    'https://img.pokemondb.net/sprites/black-white/normal/magmar.png',
    'https://img.pokemondb.net/sprites/black-white/normal/electabuzz.png',
    'https://img.pokemondb.net/sprites/black-white/normal/gyarados-f.png',
    'https://img.pokemondb.net/sprites/black-white/normal/ditto.png',
    'https://img.pokemondb.net/sprites/black-white/normal/eevee.png',
    'https://img.pokemondb.net/sprites/black-white/normal/vaporeon.png',
    'https://img.pokemondb.net/sprites/black-white/normal/jolteon.png',
    'https://img.pokemondb.net/sprites/black-white/normal/flareon.png',
    'https://img.pokemondb.net/sprites/black-white/normal/mew.png',
    'https://img.pokemondb.net/sprites/black-white/normal/dragonite.png',
    'https://img.pokemondb.net/sprites/black-white/normal/dragonair.png',
    'https://img.pokemondb.net/sprites/black-white/normal/moltres.png',
    'https://img.pokemondb.net/sprites/black-white/normal/zapdos.png',
    'https://img.pokemondb.net/sprites/black-white/normal/articuno.png',
    'https://img.pokemondb.net/sprites/black-white/normal/snorlax.png',
    'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',
    'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',
];

const pokemonSprite = document.querySelector('.sprite');
let currentSprite = 0;

pokemonSprite.src = pokemonSprites[currentSprite];

setInterval(function() {
    currentSprite = (currentSprite + 1) % pokemonSprites.length;
    pokemonSprite.src = pokemonSprites[currentSprite];
}, 1000);
