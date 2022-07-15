import {menuItems} from './menuItems.js';
import {
    addButtons,
    getNumberOfThisItemInCart,
    changeInCartToAddCart,
    removeItemFromCart,
    hideEmptyTag,
    displayEmptyTag,
} from './utilityFunctions.js';

const roundToTwoDecimalPlaces = (number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
};

const decreaseQuantity = (button, index) => {
    --menuItems[index].count;
    if (!getNumberOfThisItemInCart(index)) {
        removeItemFromCart(button);
        changeInCartToAddCart(addButtons[index]);
    }

    const listItem = button.parentNode.parentNode;
    const plateQuantity = listItem
        .querySelector('.plate')
        .querySelector('.quantity');
    const qualityWrapperQuantity = listItem
        .querySelector('.quantity__wrapper')
        .querySelector('.quantity');
    const subtotal = listItem.querySelector('.subtotal');

    plateQuantity.innerHTML = menuItems[index].count;
    qualityWrapperQuantity.innerHTML = menuItems[index].count;
    subtotal.innerHTML =
        '$' + roundToTwoDecimalPlaces(calculateSubtotalPeritem(index));
    updateTotals();
};

const increaseQuantity = (button, index) => {
    if (getNumberOfThisItemInCart(index) == 0) return ++menuItems[index].count;
    ++menuItems[index].count;
    const listItem = button.parentNode.parentNode;
    const plateQuantity = listItem
        .querySelector('.plate')
        .querySelector('.quantity');
    const qualityWrapperQuantity = listItem
        .querySelector('.quantity__wrapper')
        .querySelector('.quantity');
    const subtotal = listItem.querySelector('.subtotal');

    plateQuantity.innerHTML = menuItems[index].count;
    qualityWrapperQuantity.innerHTML = menuItems[index].count;
    subtotal.innerHTML =
        '$' +
        Math.round((calculateSubtotalPeritem(index) + Number.EPSILON) * 100) /
            100;
    updateTotals();
};

const calculateSubtotalPeritem = (index) => {
    const price = menuItems[index].price / 100;
    const quantity = menuItems[index].count;
    return price * quantity;
};

const updateTotals = () => {
    const totalsParentDiv = document.querySelector('.totals');
    const subtotalDiv = totalsParentDiv.querySelector('.subtotal');
    const taxDiv = totalsParentDiv.querySelector('.tax');
    const totalDiv = totalsParentDiv.querySelectorAll('.total')[1];

    let subtotal = 0.0;

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].count > 0) {
            subtotal +=
                roundToTwoDecimalPlaces(menuItems[i].price / 100) *
                menuItems[i].count;
            subtotal = roundToTwoDecimalPlaces(subtotal);
        }
    }

    const tax = roundToTwoDecimalPlaces(subtotal * 0.095);
    const total = roundToTwoDecimalPlaces(subtotal + tax);

    subtotalDiv.innerHTML = '$' + subtotal;
    taxDiv.innerHTML = '$' + tax;
    totalDiv.innerHTML = '$' + total;

    subtotal > 0 ? hideEmptyTag() : displayEmptyTag();
};

export {
    roundToTwoDecimalPlaces,
    decreaseQuantity,
    increaseQuantity,
    calculateSubtotalPeritem,
    updateTotals,
};
