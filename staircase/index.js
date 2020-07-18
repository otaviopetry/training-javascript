const button = document.getElementById("generator");

function staircase (n) {

    console.log(' '.repeat(n-1) + '🔴');
    
    for ( let i = 1; i <= n; i++) {
        const newStepSpaces = n - i;
        const newStepHashes = n - newStepSpaces;

        const newStairStep = [];

        for ( let j = 0; j < newStepSpaces; j++) {
            newStairStep.push(' ');
        }

        for ( let k = 0; k < newStepHashes; k++) {
            newStairStep.push('#');
        }

        const leftSide = newStairStep.toString().replace(/,/g, '');
        const rightSide = leftSide.split("").reverse().join("");

        console.log(leftSide + rightSide);
    }
}

const app = () => {
    return '<h1>Check your console for this awesome staircase, dude!</h1>';
}

document.getElementById('root').innerHTML = app();

button.addEventListener('click', () => {
    const userInputNumber = document.querySelector('input[name="rowsNumber"]').value;

    staircase(userInputNumber);
})