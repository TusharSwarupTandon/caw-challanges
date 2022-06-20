import {menuItems} from './menuItems.js';
import {updateTotals} from './calculations.js';
import {
    createImagetag,
    createPlate,
    createContent,
    createQuantityWrapper,
    createSubtotal,
} from './create.js';

const addButtons = document.querySelectorAll('.add');
const cartSummary = document.querySelector('.cart-summary');

const inCartImage = 'images/check.svg';
const arrowForIncreaseDecrease = 'images/chevron.svg';

const initialisePlateQuantity = (index) => {
    return ++menuItems[index].count;
};

const getNumberOfThisItemInCart = (index) => {
    return menuItems[index].count;
};

const changeAddToInCart = (button) => {
    button.classList.add('in-cart');
    button.innerHTML = '';

    button.appendChild(createImagetag(inCartImage));
    const textOfButton = document.createTextNode('In Cart');
    button.appendChild(textOfButton);
};

const changeInCartToAddCart = (button) => {
    button.classList.remove('in-cart');
    button.innerHTML = 'Add to Cart';
};

const addItemsToCart = (index) => {
    const listItem = document.createElement('li');
    listItem.append(
        createPlate(index),
        createContent(index),
        createQuantityWrapper(index),
        createSubtotal(index),
    );
    cartSummary.appendChild(listItem);
    updateTotals();
};

const removeItemFromCart = (button) => {
    cartSummary.removeChild(button.parentNode.parentNode);
};

const hideEmptyTag = () => {
    const emptyTag = document.querySelector('.empty');
    emptyTag.style.visibility = 'hidden';
};

const displayEmptyTag = () => {
    const emptyTag = document.querySelector('.empty');
    emptyTag.style.visibility = 'visible';
};

export {
    addButtons,
    cartSummary,
    inCartImage,
    arrowForIncreaseDecrease,
    initialisePlateQuantity,
    getNumberOfThisItemInCart,
    changeAddToInCart,
    changeInCartToAddCart,
    addItemsToCart,
    removeItemFromCart,
    hideEmptyTag,
    displayEmptyTag,
};
