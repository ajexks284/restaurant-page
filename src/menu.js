import { mainSection } from './index.js';

function createMenuSection() {
    mainSection.classList.add('menu-section');

    for (let i = 1; i <= 10; i++) {
        const productDiv = document.createElement('div');
        productDiv.classList = 'product-div';
        mainSection.appendChild(productDiv);
        
        const image = document.createElement('img');
        image.classList = 'product-image'
        image.src = 'https://via.placeholder.com/150';
        image.alt = 'placeholder for now';
        productDiv.appendChild(image);

        const productDescription = document.createElement('div');
        productDescription.classList = 'product-description';
        productDiv.appendChild(productDescription);

        const productNameAndPrice = document.createElement('div');
        productNameAndPrice.classList = 'product-name-price';
        productDescription.appendChild(productNameAndPrice);

        const productName = document.createElement('span');
        productName.classList = 'product-name';
        productName.appendChild(document.createTextNode('Placeholder'));
        productNameAndPrice.appendChild(productName)

        const productPrice = document.createElement('span');
        productPrice.classList = 'product-price';
        productPrice.appendChild(document.createTextNode('$10'));
        productNameAndPrice.appendChild(productPrice);

        const productRecipe = document.createElement('div');
        productRecipe.classList = 'product-recipe';
        productRecipe.appendChild(document.createTextNode('This is a placeholder for now for now for now for now for now for now'));
        productDescription.appendChild(productRecipe);

    }
}

export { createMenuSection }