const numberArray = [1,2,3,4,10,11];

function simpleArraySum ( ar ) {
    const length = ar.length;
    
    let sum = 0;

    for ( let i = 0; i < length; i++ ) {
        sum += ar[i];
    }

    return sum;
}

console.log(simpleArraySum(numberArray));