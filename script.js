console.log("I'm Alive!")

let mainNumber = '';
let secondaryNumber = '';
let currentOperator = '';

const calculator = document.querySelector('.calculator')


let calcNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let calcMiscButtons = ['reset', 'delete', 'equal', 'negative', 'period']
let calcFunctions = ['add', 'subtract', 'divide', 'multiply', 'exponent']
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


secondaryScreen = document.querySelector('#secondary-screen')


const numbersElement = document.querySelectorAll('.number')
const mainScreen = document.querySelector('#main-screen')

numbersElement.forEach(element => {
    element.id = `n${element.textContent}`
    // if(element.id == 'ndot') {element.textContent = '.'} 
    element.addEventListener('click', () => {
        console.log(`you clicked ${element.id}`)
        mainNumber += element.textContent 
        mainScreen.textContent = mainNumber
    })
})



functionBtns = document.querySelectorAll('.function')
functionBtns.forEach((element) => {
    element.addEventListener('click', () => {
        idName = element.id
        switch (idName) {
            case 'add':
                currentOperator = '+'
                break;
            case 'subtract':
                currentOperator = '-'
                break;
            case 'divide':
                currentOperator = '/'
                break;
            case 'multiply':
                currentOperator = '*'
                break;
            case 'exponent':
                currentOperator = '**'
                break;
        }

        if(mainNumber !== ''){
            secondaryNumber = mainNumber
            secondaryScreen.textContent = `${secondaryNumber} ${currentOperator}`
            mainNumber = ''
            mainScreen.textContent = '0'
        } else {
            secondaryScreen.textContent = `${secondaryNumber} ${currentOperator}`
        }
    })
});


equalsBtn = document.querySelector('#equal')
function equals() {
    equalsBtn.addEventListener('click', () => {
        if(mainNumber > 0 && currentOperator && secondaryNumber > 0){
            console.log('all phases complete')
            secondaryScreen.textContent = ` ${secondaryNumber} ${currentOperator} ${mainNumber} =`
            operate();
        // } else if(mainNumber ){
            
        } else {
            secondaryScreen.textContent = mainNumber
            mainScreen.textContent = ''
        }
        
        secondaryNumber = ''

        
        // output = `${mainNumber} ${currentOperator} ${secondaryNumber}`
        // console.log(output)
    })
}
equals();

function operate(a, b){
    a = mainNumber
    b = secondaryNumber
    console.log(currentOperator)

    if(currentOperator === '+'){
        console.log('add')
        mainScreen.textContent = parseInt(secondaryNumber) + parseInt(mainNumber)
    } else if(currentOperator === '-'){
        console.log('subtract')
        mainScreen.textContent = parseInt(secondaryNumber) - parseInt(mainNumber)
    } else if(currentOperator === '*'){
        console.log('multiply')
        mainScreen.textContent = parseInt(secondaryNumber) * parseInt(mainNumber)
    } else if(currentOperator === '/'){
        console.log('divide')
        mainScreen.textContent = parseInt(secondaryNumber) / parseInt(mainNumber)
    } else if(currentOperator === '**'){
        console.log('exponent')
        mainScreen.textContent = parseInt(secondaryNumber) ** parseInt(mainNumber)
    }
    mainNumber = mainScreen.textContent

}

resetBtn = document.querySelector('#reset')
function resetCalc() {
    resetBtn.addEventListener('click', () => {
        mainNumber = ''
        secondaryNumber = ''
        currentOperator = ''

        mainScreen.textContent = ''
        secondaryScreen.textContent = ''
    });
}

resetCalc();



// if there is a number input and you click equals, nothing happens
// if there is a number input and you click a function, the number gets saved >> ready for final number
    //- if a second number is input and you click:
        //equals : the first number | the operator | and the last number will appear on the secondary screen >> the output will appear on the main screen
        //a function: the output will appear on the secondary screen with the new operator and the output will also appear in the main screen. one of the two values will then become '' and wait for another input...


