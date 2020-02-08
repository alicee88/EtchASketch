const wrapper = document.querySelector('.wrapper');
const resetControls = document.querySelector('.resetControls');
const resetSquares = document.querySelector('input[name="squares"]');
const root = document.documentElement;

const squares = [];
let isPainting = false;
let currSquare;
let numSquares = 16;

function createGrid(numSquares) {
    const totalSquares = numSquares * numSquares; 

    for(let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        wrapper.appendChild(square);
        square.addEventListener('mousemove', paintSquare);
        squares.push(square);
    }
}

function paintSquare(e) {
    this.classList.add('painted');
}

function reset(e) {
    e.preventDefault();

    squares.forEach(square => {
        wrapper.removeChild(square);
    });

    squares.length = 0;
    root.style.setProperty('--numSquares', numSquares);
    root.style.setProperty('--numSquares', numSquares);
    createGrid(numSquares);

}

function updateNumSquares(e) {
    numSquares = this.value;
}

createGrid(numSquares);

resetControls.addEventListener('submit', reset);
resetSquares.addEventListener('change', updateNumSquares);
