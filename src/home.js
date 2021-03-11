import { mainSection } from './index.js';
import { createMenuSection } from './menu.js'; // for order button
import { removeTabsClasses, updateSelectedTab } from './index.js'; // for order button

const content = document.querySelector('#content');

function createHomeSection() {
    mainSection.classList.add('home-section');

    const h1 = document.createElement('h1');
    h1.classList = 'main-message';
    h1.appendChild(document.createTextNode('High Quality Service'));
    mainSection.appendChild(h1);

    const message = document.createElement('h2');
    message.classList = 'second-message';
    message.appendChild(document.createTextNode('Very tasty!'));
    mainSection.appendChild(message);

    const orderButton = document.createElement('button');
    orderButton.classList = 'order-button';
    orderButton.appendChild(document.createTextNode('Order now'));
    orderButton.addEventListener('click', (e) => {
        // create menu section
        mainSection.innerHTML = '';
        createMenuSection();

        // make background scrollable
        content.style.height = 'auto';
        content.style.minHeight = '100vh';

        // update the tab selected class
        removeTabsClasses();
        updateSelectedTab(e);
    })
    mainSection.appendChild(orderButton);
}

export { createHomeSection }