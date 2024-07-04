// script.js

document.addEventListener('DOMContentLoaded', () => {
    const calculationDisplay = document.getElementById('calculation');
    const resultsDisplay = document.getElementById('results');
    const buttons = document.querySelectorAll('.content > div');

    let calculation = '';
    let result = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                calculation = '';
                result = 0;
            } else if (buttonText === '=') {
                try {
                    result = eval(calculation.replace(/X/g, '*'));
                } catch (error) {
                    result = 'Error';
                }
            } else if (buttonText === '+/-') {
                if (calculation) {
                    if (calculation.startsWith('-')) {
                        calculation = calculation.substring(1);
                    } else {
                        calculation = '-' + calculation;
                    }
                }
            } else {
                calculation += buttonText;
            }

            calculationDisplay.textContent = calculation;
            resultsDisplay.textContent = result;
        });
    });
});
