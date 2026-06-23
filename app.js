const greetingText = document.getElementById('greeting');
const welcomeCopy = document.getElementById('welcome-copy');
const form = document.getElementById('name-form');
const usernameInput = document.getElementById('username');
const exploreButton = document.getElementById('explore-button');
const sparkButton = document.getElementById('spark-button');

const savedName = localStorage.getItem('oliveGuestName');
const welcomeMessages = [
  'ready to serve up new adventures?',
  'curious to discover the next stellar spark?',
  'in the mood for a cosmic pickleball rally?',
  'prepared to explore the orbit and beyond?',
];

function getRandomMessage() {
  return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
}

function updateGreeting(name) {
  const shortName = name.trim() || 'Explorer';
  greetingText.textContent = `Hello, ${shortName}!`;
  welcomeCopy.textContent = `You’ve arrived at the NASA Stardance clubhouse. ${shortName}, ${getRandomMessage()}`;
}

function initialize() {
  if (savedName) {
    updateGreeting(savedName);
    usernameInput.value = savedName;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = usernameInput.value.trim();
  if (!name) return;
  localStorage.setItem('oliveGuestName', name);
  updateGreeting(name);
});

exploreButton.addEventListener('click', () => {
  alert('Playful path ahead: explore Olive’s projects, the Stardance story, and pickleball-inspired ideas!');
});

sparkButton.addEventListener('click', () => {
  alert('Curiosity unlocked: what if the next big idea is a court in orbit?');
});

initialize();
