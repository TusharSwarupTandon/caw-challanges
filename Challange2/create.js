import { menuItems } from "./menuItems.js";
import { arrowForIncreaseDecrease, initialisePlateQuantity } from "./utilityFunctions.js";
import {
  decreaseQuantity,
  increaseQuantity,
  calculateSubtotalPeritem,
} from "./calculations.js";

const createElement = (elementType, elementClass, elementText) => {
  let element = document.createElement(elementType);
  element.classList.add(elementClass);
  element.innerHTML = elementText;
  return element;
};

const createElementWithChild = (elementType, elementClass, elementChild) => {
  let element = document.createElement(elementType);
  element.classList.add(elementClass);
  element.appendChild(elementChild);

  return element;
};

const createImagetag = (imageLink) => {
  let imgTag = document.createElement("img");
  imgTag.src = imageLink;
  return imgTag;
};

const createImageTagForPlate = (index) => {
  let imgTag = document.createElement("img");
  imgTag.src = "images/" + menuItems[index].image;
  return imgTag;
};

const createPlate = (index) => {
  let plate = document.createElement("div");
  plate.classList.add("plate");

  let quantity = createElement(
    "div",
    "quantity",
    initialisePlateQuantity(index)
  );

  plate.appendChild(createImageTagForPlate(index));
  plate.appendChild(quantity);

  return plate;
};

const createContent = (index) => {
  let content = document.createElement("div");
  content.classList.add("content");

  let menuItem = createElement("p", "menu-item", menuItems[index].name);
  let price = createElement("p", "price", "$" + menuItems[index].price / 100);

  content.appendChild(menuItem);
  content.appendChild(price);

  return content;
};

const createQuantityWrapper = (index) => {
  let quantityWrapper = document.createElement("div");
  quantityWrapper.classList.add("quantity__wrapper");

  let decreaseButton = createElementWithChild(
    "button",
    "decrease",
    createImagetag(arrowForIncreaseDecrease)
  );
  decreaseButton.addEventListener("click", () =>
    decreaseQuantity(decreaseButton, index)
  );

  let quantity = createElement("div", "quantity", menuItems[index].count);

  let increaseButton = createElementWithChild(
    "button",
    "increase",
    createImagetag(arrowForIncreaseDecrease)
  );
  increaseButton.addEventListener("click", () =>
    increaseQuantity(increaseButton, index)
  );

  quantityWrapper.append(decreaseButton, quantity, increaseButton);

  return quantityWrapper;
};

const createSubtotal = (index) => {
  let subtotal = createElement(
    "div",
    "subtotal",
    "$" + calculateSubtotalPeritem(index)
  );
  return subtotal;
};

export {
  createElement,
  createElementWithChild,
  createImagetag,
  createImageTagForPlate,
  createPlate,
  createContent,
  createQuantityWrapper,
  createSubtotal,
};
