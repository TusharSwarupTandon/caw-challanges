import {selectRandomKey, keyToBePressed} from './utilities.js'

//main keyboard
const keyboard = document.querySelectorAll('button');

let currentJigglingKey;

const startKeyJiggle = (key) =>
{
    //set the current jiggling key as the key
    currentJigglingKey = key;
    //start key's jiggling
    key.classList.add('jiggle');
}

const stopKeyJiggle = (key) =>
{
    //stop key's jiggling
    key.classList.remove('jiggle');
}

const changeJigglingKey = () =>
{
    //stop old key jiggling
    stopKeyJiggle(currentJigglingKey);
    //start new key's jiggle
    startKeyJiggle(selectRandomKey()); 
}

document.onkeyup = (pressedKey) =>
{  
    //if current pressed key is same as pressed key
    //jiggle new key
    if(pressedKey.key.toUpperCase() === keyToBePressed())
        changeJigglingKey();
}

//start key jiggling
startKeyJiggle(selectRandomKey());

export {keyboard, currentJigglingKey, startKeyJiggle, stopKeyJiggle, changeJigglingKey}