// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listeners to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
            handleButtonClick(e);
        });
    });
});

// Function to handle button clicks
function handleButtonClick(event) {
    const button = event.target;
    const buttonText = button.textContent;

    if (buttonText.includes('Donate')) {
        alert('Thank you for your interest in donating!');
    } else if (buttonText.includes('Login')) {
        alert('Redirecting to login page...');
    } else if (buttonText.includes('Explore More')) {
        alert('Exploring more...');
    } else if (buttonText.includes('Join with us')) {
        alert('Thank you for your interest in joining us!');
    } else if (buttonText.includes('Know More')) {
        alert('Here is more information...');
    } else {
        alert('Button clicked: ' + buttonText);
    }
}
