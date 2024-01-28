// For Task 9: Popup confirmation on recommendation submission
// document.getElementById('submit-recommendation').addEventListener('click', function() {
//     if (confirm('Are you sure you want to submit this recommendation?')) {
//         alert('Recommendation submitted successfully!');
        
//     }
// });

// For Task 7: Adding new recommendation dynamically
// function addRecommendation(name, text) {
//     const ul = document.querySelector('.recommendations');
//     const li = document.createElement('li');
//     li.textContent = `${name}: ${text}`;
//     ul.appendChild(li);
// }

// Sample function call to add a recommendation
// addRecommendation('John Doe', 'Highly skilled and dedicated professional.');

// Additional JavaScript can be added as needed for dynamic content generation and interactivity.

//Animated Effect

const dynamicText = document.querySelector("h1 span");
const words = ["Web Developer", "Designer", "Programmer", "Front-end Developer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

// Function to add a new recommendation
function addRecommendation(name, text) {
    const ul = document.querySelector('.recommendations-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="recommendation">
            <div class="recommendation-info">
                <h3 class="recommendation-name">${name}</h3>
                <p class="recommendation-text">${text}</p>
            </div>
        </div>
    `;
    ul.appendChild(li);
}

// Sample function call to add a recommendation
addRecommendation('John Doe', 'Arthi is an exceptional team player with excellent problem-solving skills.');
addRecommendation('Jane Smith', "Arthi's dedication and attention to detail have greatly contributed to our project's success.");

// Event listener for submitting a recommendation
document.getElementById('submit-recommendation').addEventListener('click', function() {
    const name = prompt('Enter your name:');
    const text = prompt('Enter your recommendation:');
    if (name && text) {
        addRecommendation(name, text);
        alert('Recommendation added successfully!');
    } else {
        alert('Please provide both your name and recommendation.');
    }
});
document.getElementById('explore-button').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

