let names = [ 'John', 'Amy', 'Megan' ];
const ulNameList = document.querySelector( '#untitled .name-list' );
const newNameInput = document.querySelector('input[name=newName]');
const generator = document.querySelector("#generator");
const buttonOutput = document.querySelector('span.output');

names.forEach( (name) => {
    ulNameList.innerHTML += '<li>' + name + '</li>';
})

function addNewName () {

    if ( newNameInput.value !== '' ) {

        // copy the name to clipboard
        copyToClipboard();
        
        // little alert to inform the user
        buttonOutput.style.opacity = 1;
        setTimeout( () => {
            buttonOutput.style.opacity = 0;
        }, 400)

        ulNameList.innerHTML += '<li>' + newNameInput.value + '</li>';

        newNameInput.value = "";

    }
}

function copyToClipboard () {

    // selects the text first
    newNameInput.select();
    newNameInput.setSelectionRange(0, 99999); /* Safeguard for mobile devices*/

    // copy the text to clipboard
    document.execCommand('copy');
    
}