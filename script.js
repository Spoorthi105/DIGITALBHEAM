function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    const displayValue = display.value;
    display.value = ''; // Clear the display first

    // Create falling numbers for each digit in the display
    for (let i = 0; i < displayValue.length; i++) {
        const digit = displayValue[i];
        const fallingNumber = document.createElement('div');
        fallingNumber.classList.add('falling-number');
        fallingNumber.textContent = digit;

        // Increase font size for falling numbers
        fallingNumber.style.fontSize = '60px'; // Adjust the size as needed
        fallingNumber.style.marginRight = '10px'; // Add margin between falling numbers

        display.insertAdjacentElement('afterend', fallingNumber); // Insert falling number after display

        // Adjust the delay for each falling number
        setTimeout(() => {
            fallingNumber.style.opacity = 1; // Show the falling number
        }, 100 * i); // Add a slight delay for staggered animation
    }

    // Reset display after animation completes
    setTimeout(() => {
        display.value = '0';
        document.querySelectorAll('.falling-number').forEach(number => number.remove());
    }, 1000); // Adjust this time to match the falling animation duration
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value).toString();
    } catch (error) {
        display.value = "Error";
    }
}
