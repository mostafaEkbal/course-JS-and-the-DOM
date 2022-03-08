const unorderList = document.querySelector('#navbar__list');

//POPULATING THE UL
for (let i = 1; i < 5; i++) {
    const list =  document.createElement('li');
    list.innerHTML = `<a id="link-section${i}" class="menu__link">Section ${i}</a>`;
    unorderList.appendChild(list);
}

//CREATING ARRAYS FOR SECTIONS, SECTIONSlOCATION, AND SECTIONSLINKS
const sections = Array.from({length: 4});

sections.forEach((element, index) => {
        sections[index] = document.querySelector(`#section${index + 1}`);
});

const sectionsLocations = Array.from({length: 4});

sectionsLocations.forEach((element, index) => {
    sectionsLocations[index] = sections[index].getBoundingClientRect().y;
});

const sectionsLinks = Array.from({length: 4});

sectionsLinks.forEach((element, index) => {
    sectionsLinks[index] = document.querySelector(`#link-section${index + 1}`);
});

let viewportLocation = window.visualViewport;



//A FUNCTION TO CHANGE THE CLASS OF A SECTION ON SCROLL
document.addEventListener('scroll',function update(event) {
    if(viewportLocation['pageTop'] >= (sectionsLocations[1] - 100) && viewportLocation['pageTop'] < (sectionsLocations[2] - 100)) {
        sections[1].classList.add('your-active-class');
        sections[0].classList.remove('your-active-class');
        sections[2].classList.remove('your-active-class');
        sections[3].classList.remove('your-active-class');
        event.preventDefault();
        
    }
    else if(viewportLocation['pageTop'] >= (sectionsLocations[2] - 100) && viewportLocation['pageTop'] < (sectionsLocations[3] - 100)) {
        sections[2].classList.add('your-active-class');
        sections[0].classList.remove('your-active-class');
        sections[1].classList.remove('your-active-class');
        sections[3].classList.remove('your-active-class');
        event.preventDefault();
        
    }
    else if(viewportLocation['pageTop'] >= (sectionsLocations[3] - 100)) {
        sections[3].classList.add('your-active-class');
        sections[0].classList.remove('your-active-class');
        sections[1].classList.remove('your-active-class');
        sections[2].classList.remove('your-active-class');
        event.preventDefault();
        
    }
    else {
        sections[0].classList.add('your-active-class');
        sections[1].classList.remove('your-active-class');
        event.preventDefault();
    }
 });
 
sectionsLinks[0].addEventListener('click', (event) => {
    window.scroll({
        top: sectionsLocations[0],
        behavior: 'smooth'
    });
    event.preventDefault();
});

sectionsLinks[1].addEventListener('click', (event) => {
    window.scroll({
        top: sectionsLocations[1],
        behavior: 'smooth'
    });
    event.preventDefault();
});

sectionsLinks[2].addEventListener('click', (event) => {
    window.scroll({
        top: sectionsLocations[2],
        behavior: 'smooth'
    });
    event.preventDefault();
});

sectionsLinks[3].addEventListener('click', (event) => {
    window.scroll({
        top: sectionsLocations[3],
        behavior: 'smooth'
    });
    event.preventDefault();
});
