const fizzBuzz = (n) => {
    let output = [];    

    for ( let i = 1; i <= n; i++ ){
        
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log('FizzBuzz');
            output.push('FizzBuzz');
        } else if ( i % 3 === 0 ) {
            console.log('Fizz');
            output.push('Fizz');
        } else if ( i % 5 === 0 ) {
            console.log('Buzz');
            output.push('Buzz');
        } else {
            console.log(i);
            output.push(i);
        }
    }
    
    const treatedOutput = output.toString().replace(/,/g, "<br>");

    return treatedOutput;
};

document.getElementById("root").innerHTML = fizzBuzz(15);