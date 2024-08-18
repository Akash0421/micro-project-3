const inputBox = document.getElementById('input-box');
const buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText === '=') {
            try {
                string = String(eval(string));  // Evaluate the string as a mathematical expression
                inputBox.value = string;
            } catch (error) {
                inputBox.value = 'Error';  // Display error if eval fails
            }
        } else if (b.target.innerText === 'RESET') {
            string = '';
            inputBox.value = string;
        } else if (b.target.innerText === 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string;
        } else if (b.target.innerText === 'x') {
            string += '*';  // Replace 'x' with '*' for multiplication
            inputBox.value = string;
        } else {
            string += b.target.innerText;
            inputBox.value = string;
        }
    });
});
