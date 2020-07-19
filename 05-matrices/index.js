const input1 = [
    5,
    3, 6, 11, 7, 4,
    5, 5, 2, 8, 3,
    10, 2, 2, 5, 5,
    1, 3, 5, 7, 5,
    4, 7, 9, 2, -3
];

const input2 = [
    6,
    3, 6, 11, 7, 4, 7,
    5, 5, 2, 8, 3, 8,
    10, 2, 2, 5, 5, 9,
    1, 3, 5, 7, 5, 4,
    4, 7, 9, 2, -3, 2,
    4, 7, 9, 2, -3, 4,
];

function treatInput (input) {
    const rowsAndColumns = input.shift();

    const rowsArray = [];

    for ( let i = rowsAndColumns; i > 0; i-- ) {
        rowsArray.push(input.splice(0, Math.ceil(input.length / i)));
    }

    const diagonalOne = [];
    const diagonalTwo = [];
    for ( let i = 0; i < rowsAndColumns; i++ ) {
        const newDiagOneItem = rowsArray[i][i];
        const newDiagTwoItem = rowsArray[i][rowsAndColumns-1-i];

        diagonalOne.push(newDiagOneItem);
        diagonalTwo.push(newDiagTwoItem);
    }

    return { diagonalOne, diagonalTwo };
}

function diagonalReduce (diag) {
    return diag.reduce((acummulator, integer) => {
        acummulator += integer;

        return acummulator;
    });
}

const app = () => {
    
    const { diagonalOne, diagonalTwo } = treatInput(input2);

    const diag1Sum = diagonalReduce(diagonalOne);
    const diag2Sum = diagonalReduce(diagonalTwo);

    const diagonalDiff = Math.abs(diag1Sum - diag2Sum);

    console.log(diagonalOne);
    console.log(diagonalTwo);
    console.log(diagonalDiff);
    console.log(diag1Sum);
    console.log(diag2Sum);

    return diagonalDiff;
}

document.getElementById('root').innerHTML = app();