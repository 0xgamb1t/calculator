console.log("I'm Alive!")

let firstNumber = '';
let secondNumber;

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
        element.textContent = '0'
    })

}
createScreen();

function createNumbers() {
    createDivs(calcNumbers, ['button', 'number'])
    const numbersElement = document.querySelectorAll('.number')
    const mainScreen = document.querySelector('#main-screen')


    numbersElement.forEach(element => {
        element.id = `n${element.textContent}`
        element.addEventListener('click', () => {
            console.log(`you clicked ${element.id}`)
            firstNumber += element.textContent 
            console.log(firstNumber)
            mainScreen.textContent = firstNumber
            console.log(mainScreen)
        })
    })
}

createNumbers();



function createFunctions() {
    createDivs(calcFunctions, ['button', 'function'])
    const functionsElement = document.querySelectorAll('.function')

    functionsElement.forEach(element => {
        element.id = `${element.textContent.substring(0, 3)}`
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


function resetCalculator (){
    
}
