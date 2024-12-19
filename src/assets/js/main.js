const result = document.getElementById("result");
const buttonList = document.querySelectorAll('button');

let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let flag = false;

buttonList.forEach((el) => {
    el.addEventListener('click', (e) => {
        const data = el.dataset.value;
        SetValue(data);
        // if (data != 'clear') {
        //     result.textContent = result.textContent + data;
        // } else {
        //     firstNumber = 0;
        //     secondNumber = 0;
        //     operator = '';
        // }

    });
});
document.addEventListener('keyup', (e) => {
    SetValue(e.key);
});

function SetValue(val) {

    switch (val) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (operator == null || operator == '') {
                firstNumber += val;
            } else {
                secondNumber += val;
            }
            if (flag) {
                result.textContent = val;
                flag = false;
            } else {
                result.textContent += val;
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (firstNumber != 0 && secondNumber != 0 && operator != '') {
                calc();
            } else {
                result.textContent += val;
                operator = val;
            }
            break;
        case '=':
        case 'Enter':
            calc();
            break;
        case 'clear':
        case 'Backspace':
        case 'Escape':
            reset();
            break;
    }
}

function reset() {
    result.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
}

function calc() {
    let res;
    switch (operator) {
        case '+':
            res = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            res = firstNumber - secondNumber;
            break;
        case '*':
            res = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber == 0) {
                alert("Number cannot diveded by zero");
            } else {
                res = firstNumber / secondNumber;
            }
            break;
    }
    result.textContent = res;

    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    flag = true;

}