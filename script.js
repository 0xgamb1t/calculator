console.log("I'm Alive!")

let mainNumber = '';
let secondaryNumber = '';
let currentOperator = '';

const calculator = document.querySelector('.calculator')


let calcNumbers = ['dot', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let calcMiscButtons = ['reset', 'delete', 'equal']
let calcFunctions = ['add', 'subtract', 'divide', 'multiply', 'square', 'exponent']
let calcScreens = ['main-screen', 'secondary-screen']

function createDivs(divList, classesToAdd) {
    divList.forEach(element => {    
        const div = document.createElement('div')
        calculator.append(div)
        div.textContent = element

        div.classList.add(...classesToAdd)
    })
}


function createScreen() {
    createDivs(calcScreens, ['screen'])
    const screenElement = document.querySelectorAll('.screen')
    screenElement.forEach(element => {
        element.id = `${element.textContent}`
        element.textContent = ''
    })
}

createScreen();

function createNumbers() {
    createDivs(calcNumbers, ['button', 'number'])
    const numbersElement = document.querySelectorAll('.number')
    const mainScreen = document.querySelector('#main-screen')


    numbersElement.forEach(element => {
        element.id = `n${element.textContent}`
        if(element.id == 'ndot') {element.textContent = '.'} 
        element.addEventListener('click', () => {
            console.log(`you clicked ${element.id}`)
            mainNumber += element.textContent 
            mainScreen.textContent = mainNumber
        })
    
    })
}

createNumbers();



function createFunctions() {
    createDivs(calcFunctions, ['button', 'function'])
    const functionsElement = document.querySelectorAll('.function')

    functionsElement.forEach(element => {
        element.id = `${element.textContent}`
        // element.style.gridArea = 'name' >> want to find a js solution for this
    })
}
createFunctions();


function createMiscButtons() {
    createDivs(calcMiscButtons, ['button', 'misc-button'])

    const miscButtonsElement = document.querySelectorAll('.misc-button')
    miscButtonsElement.forEach(element => {
        element.id = `${element.textContent}`
    })


}
createMiscButtons();


// function operate(a, b) {
//     a = ''
//     b = ''

//     const secondaryScreen = document.querySelector('#secondary-screen')


//     const functions = document.querySelectorAll('.function')
//     functions.forEach(element => {
//         element.addEventListener('click', () => {
//             console.log(element)
//             if(element.id == 'equ') {
//                 console.log('equals has been clicked syre')
//                 console.log(mainNumber)
//                 if(mainNumber !== '' && secondaryNumber !== ''){
                    
//                 }
//             } else {
//                 if(mainNumber !== '' && secondaryNumber !== '') {
//                     currentOperator = element.textContent
//                     console.log('there are two numbers')
//                 } else if(mainNumber !== '') {
//                     currentOperator = element.textContent
//                     console.log(`function ${element.id} has been selected`)
//                     console.log(currentOperator)
//                     secondaryNumber = mainNumber
//                     mainNumber = ''
//                     secondaryScreen.textContent = secondaryNumber
//                     console.log(secondaryScreen)
//                 }
//             }
//         })
//     });
// }

// operate();


equalsBtn = document.querySelector('#equal')
equalsBtn.addEventListener('click', () => {
    output = `${mainNumber} ${currentOperator} ${secondaryNumber}`
    console.log(output)
})



functionBtns = document.querySelectorAll('.function')
functionBtns.forEach((element) => {
    element.addEventListener('click', () => {
        idName = element.id
        switch (idName) {
            case 'add':
                currentOperator = '+'
                console.log(currentOperator) 
                break;
            case 'subtract':
                currentOperator = '-'
                console.log(currentOperator) 
                break;
            case 'divide':
                currentOperator = '/'
                console.log(currentOperator) 
                break;
            case 'multiply':
                currentOperator = '*'
                console.log(currentOperator) 
                break;
            case 'exponent':
                currentOperator = '**'
                console.log(currentOperator) 
                break;
            case 'square':
                currentOperator = 'unsure'
                console.log(currentOperator) 
                break;
        }
        secondaryScreen = document.querySelector('#secondary-screen')
        secondaryScreen.textContent = currentOperator

        
    })
});



