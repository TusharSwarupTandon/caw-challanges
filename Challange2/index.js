import {
  addButtons,
  changeAddToInCart,
  addItemsToCart,
} from "./utilityFunctions.js";

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
