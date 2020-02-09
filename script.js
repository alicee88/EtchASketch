const wrapper = document.querySelector('.wrapper');
const resetControls = document.querySelector('.resetControls');
const resetSquares = document.querySelector('input[name="squares"]');
const colourControl = document.querySelectorAll('input[name="coloured"]');
const body = document.querySelector('body');
// For CSS Custom Property (numSquares)
const root = document.documentElement;

const squares = [];
let isPainting = false;
let currSquare;
let numSquares = 16;
let isMono = true;

function createGrid(numSquares) {
    const totalSquares = numSquares * numSquares; 

    for(let i = 0; i < totalSquares; i++) {

        let square = {div: Object, visited: false};

        square.div = document.createElement('div');
        square.div.classList.add('square');
        wrapper.appendChild(square.div);

        square.visited = false;
        square.div.addEventListener('mouseenter', () => {
            paintSquare(square);
        });

        squares.push(square);
    }
}

function paintSquare(square) {
    square.div.style.setProperty('background', getColour(square));
    square.visited = true;

}

function getColour(square) {
    let r, g, b, rgb;
    if(isMono) {
        if(!square.visited) {
            return 'rgb(0, 0, 0, 0.3)';
        } else {
            // Make the existing alpha 10% more black
            rgb = getComputedStyle(square.div).backgroundColor;
            rgb = rgb.replace(/[^\d,.]/g, '').split(',');
            alpha = parseFloat(rgb[3]) + 0.1;
            return `rgb(0, 0, 0, ${alpha})`;
        }
    } else {
        // Rainbow colours!
        let h, l;
        if(!square.visited) {
            // Set a random colour
            r = Math.floor(Math.random() * 256); 
            g = Math.floor(Math.random() * 256); 
            b = Math.floor(Math.random() * 256);
           
        } else {
            // Make the existing colour 10% more black
            rgb = getComputedStyle(square.div).backgroundColor;
            rgb = rgb.replace(/[^\d,]/g, '').split(',');
            r = Math.floor(parseInt(rgb[0]) * 0.9);
            g = Math.floor(parseInt(rgb[1]) * 0.9);
            b = Math.floor(parseInt(rgb[2]) * 0.9);
        }
        return `rgb(${r}, ${g}, ${b})`;
    }
    
}

function reset(e) {
    e.preventDefault();

    squares.forEach(square => {
        wrapper.removeChild(square.div);
    });

    squares.length = 0;
    root.style.setProperty('--numSquares', numSquares);
    root.style.setProperty('--numSquares', numSquares);

    createGrid(numSquares);

    if(!isMono) {
        body.classList.add('rainbow-body');
    } else {
        body.classList.remove('rainbow-body');
    }

}

function updateNumSquares(e) {
    numSquares = this.value;
}

function updateColourChoices(e) {
    this.value === "mono" ? isMono = true : isMono = false;
    reset(e);
}

createGrid(numSquares);

resetControls.addEventListener('submit', reset);
resetSquares.addEventListener('change', updateNumSquares);
colourControl.forEach(cc => cc.addEventListener('change', updateColourChoices));
