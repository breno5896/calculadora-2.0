const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('clear')) {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.value = '';
            return;
        }

        if (button.classList.contains('operation')) {
            if (value === '=') {
                if (operator && previousInput) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                    display.value = currentInput;
                    operator = '';
                    previousInput = '';
                }
            } else {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
            return;
        }

        currentInput += value;
        display.value = currentInput;
    });
});
