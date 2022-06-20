import {currentJigglingKey, keyboard} from './index.js';

// get total number of keys in the keyboard
const getNumberOfKeys = () => {
    return keyboard.length; // 53
};

// generate random number between 0 and total number of keys
const generateRandomNumber = (numberOfKeys) => {
    return Math.floor(Math.random() * numberOfKeys);
};

// select the random key
const selectRandomKey = () => {
    return keyboard[generateRandomNumber(getNumberOfKeys())];
};

// the key which should be pressed to stop jiggling
const keyToBePressed = () => {
    return currentJigglingKey.getAttribute('data-key').toUpperCase();
};

export {
    getNumberOfKeys,
    generateRandomNumber,
    selectRandomKey,
    keyToBePressed,
};
