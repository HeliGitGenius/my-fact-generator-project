// Replace with your custom fun facts array
const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently.",
    "I’m learning to play the guitar in my free time."
]; // your updated facts

function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}

function showFact() {
    const factText = document.getElementById("fact");
    factText.textContent = getRandomFact();  
}

// Now call the showFact function when the page loads
window.onload = showFact; // This line added to show the fact on page load
