const content = document.querySelector('#content');

function createHeader() {
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
    homeLi.classList = 'navbar-ul-li home selected';
    homeLi.appendChild(document.createTextNode('Home'));
    navbarUl.appendChild(homeLi);

    const menuLi = document.createElement('li');
    menuLi.classList = 'navbar-ul-li menu';
    menuLi.appendChild(document.createTextNode('Menu'));
    navbarUl.appendChild(menuLi);

    const contactLi = document.createElement('li');
    contactLi.classList = 'navbar-ul-li contact';
    contactLi.appendChild(document.createTextNode('Contact Us'));
    navbarUl.appendChild(contactLi);
}

export { createHeader };