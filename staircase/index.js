const button = document.getElementById("generator");

function staircase (n) {
    
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

        console.log(newStairStep.toString().replace(/,/g, ''));
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