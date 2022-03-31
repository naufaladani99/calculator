const numbers = document.querySelectorAll(".number")
console.log(numbers)

numbers.forEach((number) => {
console.log(number)
})

numbers.forEach((number) => {
number.addEventListener("click",(event)=> {
    console.log(event.target.value)
})
})

const kalkulatorLayar = document.querySelector('.kalkulator-layar')

const updateScreen = (number) => {
kalkulatorLayar.value = number
}

const number = document.querySelectorAll(".number")

numbers.forEach((number) => {
number.addEventListener("click",(event) => {
    updateScreen(event.target.value)
})
})

let prevNumber =''
let calculationOperator =''
let currentNumber ='0'

const inputNumber = (number) => {
    if (currentNumber === '0')  {
        currentNumber = number
    }else{
        currentNumber +=number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value);
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})


const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', (event) => {
    console.log('equal button is pressed');
})


const calculate = () => {
    let result = ''
    switch(calculationOperator) {
    case '+':
        result = prevNumber + currentNumber
        break

    case '-':
        result = prevNumber - currentNumber
        break  
        
    case '*':
        result = prevNumber * currentNumber
        break

    case '/':
        result = prevNumber / currentNumber
        break 

        default:
return
              
    
    }
    currentNumber = result
    calculationOperator = ''
}