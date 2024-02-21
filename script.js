//your JS code here. If required.
// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * 2 : num);
}

// Function to update the text of an HTML element with the ID "output"
function updateOutput(text) {
    document.getElementById('output').innerText = text;
}

// Chain promises to manipulate the data and update the output
getNumbers()
    .then(numbers => {
        // Display even numbers after 1 second
        setTimeout(() => {
            updateOutput(filterOddNumbers(numbers).join(', '));
        }, 1000);
        return numbers;
    })
    .then(numbers => {
        // Multiply even numbers by 2 after 2 seconds
        setTimeout(() => {
            updateOutput(multiplyEvenNumbers(numbers).join(', '));
        }, 2000);
    });
