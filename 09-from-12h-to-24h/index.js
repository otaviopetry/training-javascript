const input = '12:05:45PM';

function convertHourFormat (hour12) {
    // start a boolean
    let isPm = false;

    // check if is PM
    (hour12.indexOf('PM') > 0) && (isPm = true);

    // slice the hour digits
    const hour = Number(hour12.slice(0, 2));

    // start a string for converted hour
    let convertedHour = '';

    // store the string without the hour and AM/PM indicators
    const restOfString = hour12.slice(2, hour12.length - 2);

    if (isPm) {        
        // if hour is 12, return 12, else, add 12
        hour === 12 
            ? convertedHour = '12'
            : convertedHour = (hour + 12).toString();

        // create a new string with converted hour
        const hour24 = convertedHour + restOfString;
        
        return hour24;       
    } else {        
        hour === 12
            ? convertedHour = '00'
            : convertedHour = hour;

        // create string without AM/PM
        const hour24 = convertedHour + restOfString;

        return hour24;
    }    
}

console.log(convertHourFormat(input));