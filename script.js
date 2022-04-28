console.log("I'm Alive!")

const calculator = document.querySelector('.calculator')

let calcNumbers = ['00', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let calcButtons = ['reset', 'delete',]
let calcFunctions = ['add', 'subtract', 'divide', 'multiply', 'square', 'exponent']
let calcScreens = ['mainScreen', 'secondaryScreen']

function createDivs(divList) {
    divList.forEach(element => {    
        const div = document.createElement('div')
        calculator.append(div)
        screen.textContent = element
    })
}

createDivs(calcScreens,)


function createScreen() {
    
    // screen.style.gridColumn = 'span 4'   
}

createScreen();

function createNumbers() {

    calcNumbers.forEach(element => {
        const button = document.createElement('div');
        calculator.appendChild(button);
        button.textContent = element
        button.classList.add('button', 'number', `n${button.textContent}`)
        // button.style.gridArea = `n${button.textContent}` >> this is dumb, refers to grid-area n / n / n / n
    });
}

createNumbers();

function createCalcButtons() {
    calcButtons.forEach(element => {
        const button = document.createElement('div');
        calculator.append(button);
        button.textContent = element
        button.classList.add('button', `${button.textContent}`)
    })


}

createCalcButtons();


function createCalcFunctions() {
    calcFunctions.forEach(element => {
        const button = document.createElement('div');
        calculator.append(button);
        button.textContent = element
        button.classList.add('button', 'function', `${button.textContent}`)
        
    })


}

createCalcFunctions();

