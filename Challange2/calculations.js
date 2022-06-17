import { menuItems } from "./menuItems.js";
import {addButtons, numberOfThisItemInCart, changeInCartToAddCart, removeItemFromCart, hideEmptyTag, displayEmptyTag} from "./index.js"

const roundToTwoDecimalPlaces = (number) => {
  return Math.round((number + Number.EPSILON) * 100) / 100;
};

const decreaseQuantity = (button, index) => {
  --menuItems[index].count;
  if (!numberOfThisItemInCart(index)) {
    removeItemFromCart(button);
    changeInCartToAddCart(addButtons[index]);
  }

  let li = button.parentNode.parentNode;
  let plateQuantity = li.querySelector(".plate").querySelector(".quantity");
  let qualityWrapperQuantity = li
    .querySelector(".quantity__wrapper")
    .querySelector(".quantity");
  let subtotal = li.querySelector(".subtotal");

  plateQuantity.innerHTML = menuItems[index].count;
  qualityWrapperQuantity.innerHTML = menuItems[index].count;
  subtotal.innerHTML =
    "$" + roundToTwoDecimalPlaces(calculateSubtotalPeritem(index));
  updateTotals();
};

const increaseQuantity = (button, index) => {
  if (numberOfThisItemInCart(index) == 0) return ++menuItems[index].count;
  ++menuItems[index].count;
  let li = button.parentNode.parentNode;
  let plateQuantity = li.querySelector(".plate").querySelector(".quantity");
  let qualityWrapperQuantity = li
    .querySelector(".quantity__wrapper")
    .querySelector(".quantity");
  let subtotal = li.querySelector(".subtotal");

  plateQuantity.innerHTML = menuItems[index].count;
  qualityWrapperQuantity.innerHTML = menuItems[index].count;
  subtotal.innerHTML =
    "$" +
    Math.round((calculateSubtotalPeritem(index) + Number.EPSILON) * 100) / 100;
  updateTotals();
};

const calculateSubtotalPeritem = (index) => {
  let price = menuItems[index].price / 100;
  let quantity = menuItems[index].count;
  return price * quantity;
};

const updateTotals = () => {
  let totalsParentDiv = document.querySelector(".totals");
  let subtotalDiv = totalsParentDiv.querySelector(".subtotal");
  let taxDiv = totalsParentDiv.querySelector(".tax");
  let totalDiv = totalsParentDiv.querySelectorAll(".total")[1];

  let subtotal = 0.0;
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].count > 0) {
      subtotal +=
        roundToTwoDecimalPlaces(menuItems[i].price / 100) * menuItems[i].count;
      subtotal = roundToTwoDecimalPlaces(subtotal);
    }
  }
  let tax = roundToTwoDecimalPlaces(subtotal * 0.095);
  let total = roundToTwoDecimalPlaces(subtotal + tax);

  subtotalDiv.innerHTML = "$" + subtotal;
  taxDiv.innerHTML = "$" + tax;
  totalDiv.innerHTML = "$" + total;

  subtotal > 0 ? hideEmptyTag() : displayEmptyTag();
};

export {roundToTwoDecimalPlaces, decreaseQuantity, increaseQuantity, calculateSubtotalPeritem, updateTotals}