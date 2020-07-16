const app = (component) => {
    let lines;

    component.forEach( (line) => {
        
    })
    
    return
    
}

// all function inputs must be strings
const othersSellings = [30, 12, 30, 18, 12].toString();
const treatedOtherSellings = othersSellings.replace(/,/g, " ");

const userSellings = [20, 10, 35].toString();
const treatedUserSellings = userSellings.replace(/,/g, " ");


const component = [
    treatedOtherSellings,
    treatedOtherSellings.length,
    treatedUserSellings,
    treatedUserSellings.length,
]

document.getElementById("root").innerHTML = app(component);