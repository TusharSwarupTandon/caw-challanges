import { menuItems } from "./menuItems.js";
import {
  createImagetag,
  createPlate,
  createContent,
  createQuantityWrapper,
  createSubtotal,
} from "./create.js";
import { updateTotals } from "./calculations.js";

const addButtons = document.querySelectorAll(".add");
let cartSummary = document.querySelector(".cart-summary");

const inCartImage = "images/check.svg";
const arrowForIncreaseDecrease = "images/chevron.svg";

const initialisePlateQuantity = (index) => {
  return ++menuItems[index].count;
};

const numberOfThisItemInCart = (index) => {
  return menuItems[index].count;
};

const changeAddToInCart = (button) => {
  button.classList.add("in-cart");
  button.innerHTML = "";

  button.appendChild(createImagetag(inCartImage));
  let textOfButton = document.createTextNode("In Cart");
  button.appendChild(textOfButton);
};

const changeInCartToAddCart = (button) => {
  button.classList.remove("in-cart");
  button.innerHTML = "Add to Cart";
};

const addItemsToCart = (index) => {
  let listItem = document.createElement("li");
  listItem.append(
    createPlate(index),
    createContent(index),
    createQuantityWrapper(index),
    createSubtotal(index)
  );
  cartSummary.appendChild(listItem);
  updateTotals();
};

const removeItemFromCart = (button) => {
  cartSummary.removeChild(button.parentNode.parentNode);
};

const hideEmptyTag = () => {
  let emptyTag = document.querySelector(".empty");
  emptyTag.style.visibility = "hidden";
};

const displayEmptyTag = () => {
  let emptyTag = document.querySelector(".empty");
  emptyTag.style.visibility = "visible";
};

const initialiseButtons = () => {
  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", () => {
      if (!addButtons[i].classList.contains("in-cart")) {
        changeAddToInCart(addButtons[i]);
        addItemsToCart(i);
      }
    });
  }
};

initialiseButtons();

export {
  addButtons,
  cartSummary,
  inCartImage,
  arrowForIncreaseDecrease,
  initialisePlateQuantity,
  numberOfThisItemInCart,
  changeAddToInCart,
  changeInCartToAddCart,
  addItemsToCart,
  removeItemFromCart,
  hideEmptyTag,
  displayEmptyTag,
};
