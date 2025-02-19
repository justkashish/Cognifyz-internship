// Select button element
const button = document.getElementById('btn');

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event Listener
button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});