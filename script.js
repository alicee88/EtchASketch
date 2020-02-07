const container = document.querySelector('.wrapper');
const squares = [];
let isPainting = false;
let currSquare;

function createGrid() {
   const numSquares = 16 * 16;

    for(let i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        // square.textContent = i;
        container.appendChild(square);
        squares.push(square);
    }
}

function paintSquare(e) {
    this.classList.add('painted');
}

createGrid();
squares.forEach(square => square.addEventListener('mousemove', paintSquare));
