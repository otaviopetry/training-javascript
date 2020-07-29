const candles = [3, 2, 1, 3];

function howManyCandlesWillBlow (candles) {

    // store the highest values in array
    const maxValue = Math.max(...candles);

    // start occurrences array
    const highestCandles = [];

    // iterate through array and if number is equal to max value, store it in occurrences array
    candles.forEach( candle => {
        candle === maxValue && highestCandles.push(candle);
    })

    // how many candles? :}
    const numberOfCandles = highestCandles.length;

    return numberOfCandles;
}

document.getElementById('root').innerHTML = howManyCandlesWillBlow(candles);