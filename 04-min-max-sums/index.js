const sampleArray = [1, 3, 2, 4, 5];

function minMaxSum (arr) {
    
    // order the array ascendantly
    const orderedArray = arr.sort( (a,b) => {return a - b;})

    // store the minimum value (first of array)
    const minValue = orderedArray.shift();

    // store the maximum value (last of array)
    const maxValue = orderedArray.pop();

    // reduce the remaining array
    const remainingSum = orderedArray.reduce( (acummulator, integer) => {
        return acummulator += integer;
    });

    // get the min and max sums
    const minSum = remainingSum + minValue;
    const maxSum = remainingSum + maxValue;

    // return as a space separated string
    return [minSum, maxSum].toString(). replace(/,/g, ' ');
}

const app = () => {
    return minMaxSum(sampleArray);
}

document.getElementById('root').innerHTML = app();