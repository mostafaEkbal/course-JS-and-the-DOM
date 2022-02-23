/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const unorderList = document.querySelector('#navbar__list');
for (let i = 1; i < 5; i++) {
    const list =  document.createElement('li');
    list.innerHTML = `<a id="link${i}" class="menu__link">Section ${i}</a>`;
    unorderList.appendChild(list);
}


const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

const section1Location = section1.getBoundingClientRect();
const section3Location = section3.getBoundingClientRect();
const section2Location = section2.getBoundingClientRect();
const section4Location = section4.getBoundingClientRect();

const section1Link = document.querySelector('#link1');
section1Link.addEventListener('click', function(event) {
    window.scroll({
        top: section1Location['top'],
        left: 0,
        behavior: 'smooth'
      });
    event.preventDefault;
});
const section2Link = document.querySelector('#link2');
section2Link.addEventListener('click', function(event) {
    window.scroll({
        top: section2Location['top'],
        left: 0,
        behavior: 'smooth'
      });
    event.preventDefault;
});
const section3Link = document.querySelector('#link3');
section3Link.addEventListener('click', function(event) {
    window.scroll({
        top: section3Location['top'],
        left: 0,
        behavior: 'smooth'
      });
    event.preventDefault;
});

const section4Link = document.querySelector('#link4');
section4Link.addEventListener('click', function(event) {
    window.scroll({
        top: section4Location['top'],
        left: 0,
        behavior: 'smooth'
      });
    event.preventDefault;
});





let viewportLocation = window.visualViewport;
function update() {
    if (viewportLocation['pageTop'].toFixed(0) >= section2Location['top'].toFixed(0)) {
        section2.classList.add('active');
        console.log("Hello world");
    }
}

document.addEventListener('scroll',update);
update();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

