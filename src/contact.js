import { mainSection } from './index.js';

function createContactSection() {
    mainSection.classList.add('contact-section');

    const contactTitle = document.createElement('div');
    contactTitle.classList = 'contact-title';
    contactTitle.appendChild(document.createTextNode('Get in touch with us!'));
    mainSection.appendChild(contactTitle);

    // FORM
    const form = document.createElement('form');
    form.classList = 'contact-form';
    mainSection.appendChild(form);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList = 'contact-name-input';
    nameInput.name = 'name';
    nameInput.placeholder = 'Your Name';
    nameInput.required = true;
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.classList = 'contact-email-input';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email';
    emailInput.required = true;
    form.appendChild(emailInput);

    const messageArea = document.createElement('textarea');
    messageArea.classList = 'message-area';
    messageArea.name = 'message-area';
    messageArea.placeholder = 'Message';
    messageArea.required = true;
    form.appendChild(messageArea);

    const submitButton = document.createElement('button');
    submitButton.classList = 'contact-submit-button';
    submitButton.type = 'submit';
    submitButton.appendChild(document.createTextNode('Send'));
    form.appendChild(submitButton);

    // CONTACT INFO
    const contactInfo = document.createElement('div');
    contactInfo.classList = 'contact-info';
    mainSection.appendChild(contactInfo);

    const addressDiv = document.createElement('div');
    addressDiv.classList = 'address-div';
    contactInfo.appendChild(addressDiv);
    const addressIcon = document.createElement('i');
    addressIcon.classList = 'im im-location';
    addressDiv.appendChild(addressIcon);
    const addressText = document.createElement('p');
    addressText.classList = 'address-text';
    addressText.appendChild(document.createTextNode('Placeholder Adress Here'));
    addressDiv.appendChild(addressText);

    const phoneDiv = document.createElement('div');
    phoneDiv.classList = 'phone-div';
    contactInfo.appendChild(phoneDiv);
    const phoneIcon = document.createElement('i');
    phoneIcon.classList = 'im im-phone';
    phoneDiv.appendChild(phoneIcon);
    const phoneText = document.createElement('p');
    phoneText.classList = 'phone-text';
    phoneText.appendChild(document.createTextNode('(617) 420-6666'));
    phoneDiv.appendChild(phoneText);

    const mailDiv = document.createElement('div');
    mailDiv.classList = 'mail-div';
    contactInfo.appendChild(mailDiv);
    const mailIcon = document.createElement('i');
    mailIcon.classList = 'im im-mail';
    mailDiv.appendChild(mailIcon);
    const mailText = document.createElement('p');
    mailText.classList = 'mail-text';
    mailText.appendChild(document.createTextNode('placeholder@gmail.com'));
    mailDiv.appendChild(mailText);
}

export { createContactSection }