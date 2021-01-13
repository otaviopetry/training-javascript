const flockOfBirds = [2, 3, 3, 5, 8, 9, 5, 9, 3, 2, 1, 9, 3, 9];

function migratoryBirds (birds) {
    const removedDuplicatesArray = [];
    birds.forEach(bird => {
        if (!removedDuplicatesArray.includes(bird)) {
            removedDuplicatesArray.push(bird);
        }        
    })
    
    // Start an object to count the ocurrence of each bird on input array
    let counts = {};
    
    // Construct the object key-values and set the values to zero
    for (let i = 0; i < removedDuplicatesArray.length; i++) {
        counts[removedDuplicatesArray[i]] = 0;
    }
    
    // Count each bird on input array    
    birds.forEach(bird => {
        counts[bird] = counts[bird] + 1;
    })
    
    // Destructure the counts object into two arrays (keys and values)
    const countsKeys = Object.keys(counts);
    const countsValues = Object.values(counts);
    
    // Start an array to store what is the highest occurrence
    // and how many species reached it (the array length).
    // Starting the array with the first value
    let higherOccurrences = [countsValues[0]];
        
    for (let i = 1; i < countsKeys.length; i++) {
        // if the second value is higher, REPLACE the first
        if (countsValues[i] > higherOccurrences[0]) {
            higherOccurrences[0] = countsValues[i];
        // if it is equal AND is the higher value, ADD to the array
        } else if (higherOccurrences.includes(countsValues[i]) && countsValues[i] == Math.max(countsValues)) {
            higherOccurrences.push(countsValues[i]);
        }
    };
    
    let answer = '';
    
    // Find the requested answer (higher occurrence bird with lowest ID)
    // using the destructured counts object and the higherOccurrences array
    for (let i = 0; i < countsKeys.length; i++) {
        // if the current bird matches the higher occurrence, lets dig more
        if (countsValues[i] == higherOccurrences[0]) {
            // if the answer is still the empty string, set it to the current bird
            if (answer == '') {
                answer = countsKeys[i];
            // if it is already filled, check if the current bird has a lower ID
            // number. If yes, set the final answer
            } else {
                if (answer > countsKeys[i]) {
                    answer = countsKeys[i];
                }
            }
        }
    }
    
    return answer;
}

document.querySelector('#root').innerHTML = migratoryBirds(flockOfBirds);