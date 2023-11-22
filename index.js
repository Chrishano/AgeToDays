function convertAgeToDays() {
    // Get input value
    const ageInput = document.getElementById('ageInput');
    const age = parseFloat(ageInput.value);
  
    // Check if the input is a valid number
    if (isNaN(age)) {
      alert('Please enter a valid number for age.');
      return;
    }
  
    // Convert age to days (assuming 365 days in a year)
    const days = age * 365;
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your age of ${age} years is approximately ${days} days.`;
  }
  