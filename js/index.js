let lastScrollTop = 0;
let isClicked = false;
const navbar = document.getElementById('nav_id');

// Listen for click events on nav links
navbar.addEventListener('click', function() {
    isClicked = true;
});

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (!isClicked && scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
        navbar.classList.add('headspace--hidden');
    } else {
        navbar.classList.remove('headspace--hidden');
    }
    lastScrollTop = scrollTop;
    isClicked = false; // Reset the click status after scroll event
});


let i = 0;
let txt = ["Welcome to my portfolio.", "Alassane Wone."];
let speed = 150; // Speed in milliseconds
let delay = 1000; // Delay in milliseconds
let originalText = document.getElementById('welcome_message').innerHTML;
let currentTxt = 0;

function typeWriter() {
    if (i < txt[currentTxt].length) {
        document.getElementById('welcome_message').innerHTML = originalText + txt[currentTxt].substring(0, i+1);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseWriter, speed + delay);
    }
}

let j = txt[currentTxt].length;
function eraseWriter() {
    if (j >= 0) {
        document.getElementById('welcome_message').innerHTML = originalText + txt[currentTxt].substring(0, j);
        j--;
        setTimeout(eraseWriter, speed/2);
    } else {
        i = 0;
        currentTxt = (currentTxt + 1) % txt.length; // Switch to the other text
        j = txt[currentTxt].length;
        setTimeout(typeWriter, speed/2 + delay);
    }
}

typeWriter();