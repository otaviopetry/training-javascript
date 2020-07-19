const generator = document.querySelector('#generator');
const squareContainer = document.querySelector('.squareContainer');

// the generator button listener
generator.addEventListener( 'click', function () {
    createSquare();
} );

function createSquare () {
    
    // create the element and set its class
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    
    // append it as a child of the container
    squareContainer.appendChild(square);

    // set the event listener for the created element
    square.addEventListener('mouseover', function (evt) {

        // generate the new color rgb value
        var newColor = randomColor();

        // set the new background color
        evt.target.style.backgroundColor = newColor;
    })
}

function randomColor () {

    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

    return(`rgb(${r}, ${g}, ${b})`);
    
}