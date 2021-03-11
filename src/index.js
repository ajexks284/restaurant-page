import { createHeader } from './header.js';
import { createHomeSection } from './home.js';
import { createMenuSection } from './menu.js';
import { createContactSection } from './contact.js';

// All tabs will have the header
createHeader();

const content = document.querySelector('#content');

// The section the tabs will be modifying
const mainSection = document.createElement('section');
mainSection.classList = 'main-section';
content.appendChild(mainSection);

// Add tab switching events
const tabs = document.querySelectorAll('.navbar-ul-li');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        // Reset class
        mainSection.classList = 'main-section';

        // Change tab
        if (tab.classList.contains('home')) {
            mainSection.innerHTML = '';
            createHomeSection();
        };
        if (tab.classList.contains('menu')) {
            mainSection.innerHTML = '';
            createMenuSection();
        };
        if (tab.classList.contains('contact')) {
            mainSection.innerHTML = '';
            createContactSection();
        };

        // Add scroll on menu page
        if (mainSection.classList.contains('menu-section')) {
            content.style.height = 'auto';
            content.style.minHeight = '100vh'; 
        } else {
            content.style.height = '100vh';
        }

        // Update selected tab
        removeTabsClasses();
        updateSelectedTab(e);
    });
})

function removeTabsClasses() {
    tabs.forEach(tab => {
        tab.classList.remove('selected');
    })
}

function updateSelectedTab(e) {
    if (e.target.classList.contains('order-button')) {
        // if click on order button update menu 'selected' tab
        document.querySelector('.menu').classList.add('selected');
    } else {
        // else update the 'selected' tab you clicked on
        e.target.classList.add('selected');
    }
}

// By default we load the home section
createHomeSection();

export { mainSection };
export { removeTabsClasses, updateSelectedTab }; // for order button