const generator = document.querySelector('#generator');
const squareContainer = document.querySelector('.squareContainer');

generator.addEventListener( 'click', function () {
    createSquare();
} );

function createSquare () {
    
    const square = document.createElement('div');

    square.setAttribute('class', 'square');
    
    squareContainer.appendChild(square);

    square.addEventListener('mouseover', function (evt) {
        var newColor = randomColor();
        evt.target.style.backgroundColor = newColor;
    })
}

function randomColor () {

    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

    return(`rgb(${r}, ${g}, ${b})`);
}