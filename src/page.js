const content = document.querySelector('#content');

export function createHeader() {
    const header = document.createElement('header');
    header.classList = 'header';
    content.appendChild(header);

    const logo = document.createElement('div');
    logo.classList = 'logo';
    logo.appendChild(document.createTextNode('My Restaurant'));
    header.appendChild(logo);

    const navbar = document.createElement('nav');
    navbar.classList = 'navbar';
    header.appendChild(navbar);

    const navbarUl = document.createElement('ul');
    navbarUl.classList = 'navbar-ul';
    navbar.appendChild(navbarUl);

    const homeLi = document.createElement('li');
    homeLi.classList = 'navbar-ul-li';
    homeLi.appendChild(document.createTextNode('Home'));
    navbarUl.appendChild(homeLi);

    const menuLi = document.createElement('li');
    menuLi.classList = 'navbar-ul-li';
    menuLi.appendChild(document.createTextNode('Menu'));
    navbarUl.appendChild(menuLi);

    const contactLi = document.createElement('li');
    contactLi.classList = 'navbar-ul-li';
    contactLi.appendChild(document.createTextNode('Contact Us'));
    navbarUl.appendChild(contactLi);
}

export function createHomeSection() {
    const homeSection = document.createElement('section');
    homeSection.classList = 'home-section';
    content.appendChild(homeSection);

    const h1 = document.createElement('h1');
    h1.classList = 'main-message';
    h1.appendChild(document.createTextNode('High Quality Service'));
    homeSection.appendChild(h1);

    const message = document.createElement('h2');
    message.classList = 'second-message';
    message.appendChild(document.createTextNode('Very tasty!'));
    homeSection.appendChild(message);

    const orderButton = document.createElement('button');
    orderButton.classList = 'order-button';
    orderButton.appendChild(document.createTextNode('Order now'));
    homeSection.appendChild(orderButton);
}