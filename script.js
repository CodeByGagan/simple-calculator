// Initialize a variable to store the current input and calculation expression
let string = "";

// Select all elements with the class "button"
let buttons = document.querySelectorAll('.button');

// Add click event listeners to each button
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    // Check if the clicked button is "="
    if (e.target.innerHTML == '=') {
      // Evaluate the expression in 'string' using 'eval'
      string = eval(string);
      // Update the input field with the calculated result
      document.querySelector('input').value = string;
    }
    // Check if the clicked button is "C" (Clear)
    else if (e.target.innerHTML == 'C') {
      // Clear the input by setting 'string' to an empty string
      string = "";
      // Update the input field with the cleared 'string'
      document.querySelector('input').value = string;
    }
    // For other buttons (numbers, operators)
    else {
      // Append the clicked button's content to the 'string'
      string = string + e.target.innerHTML;
      // Update the input field with the updated 'string'
      document.querySelector('input').value = string;
    }
  });
});
