import {
    isEditingTime,
    checkValidTime,
    isTimerRunning,
} from './booleanChecking.js';
import {
    getMinuteTextField,
    getSecondTextField,
    getRing,
} from './getElements.js';
import {startButton, timerDecreasing, reduceTimer} from './index.js';

const redColor = '#900A0A';
const greenColor = '#09A65A';

// changing ring colour to red when timer runs out.
const changeRingColorToRed = () => {
    const ring = getRing();
    ring.style.stroke = redColor;
};

// changing timer colour to green when timer runs.
const changeRingColorToGreen = () => {
    const ring = getRing();
    ring.style.stroke = greenColor;
};

// starts the timer
const startTimer = () => {
    // set the timer running state to running
    // stop the interval
    // change the start/stop button text.
    changeRingColorToGreen();
    toggleTimerText();
    reduceTimer();
};

// stop timer
const stopTimer = () => {
    // set the timer running state to not running
    // stop the interval
    // change the start/stop button text.
    clearInterval(timerDecreasing);
    toggleTimerText();
};

// when start or stop button is clicked toggele its state
const toggleTimer = () => {
    // if time is currently being edited show alert message
    if (isEditingTime()) {
        alert('Finish editing to use the clock.');
    } else if (isTimerRunning()) { // if timer is already running stop it.
        stopTimer();
    } else { // otherwise start the timer
        startTimer();
    }
};

// toggle start/stop button text
const toggleTimerText = () => {
    // check whatever the current start button text
    // is and reverse it
    startButton.innerHTML =
        startButton.innerHTML === 'start' ? 'stop' : 'start';
};

// disable time editing
const setTimeEditDisabled = () => {
    // get minute and second field and set there disabled property as true
    const minuteTextField = getMinuteTextField();
    const secondTextField = getSecondTextField();
    minuteTextField.disabled = true;
    secondTextField.disabled = true;
};

// enable time editing
const setTimeEditEnabled = () => {
    // get minute and second field and set there disabled property as false
    const minuteTextField = getMinuteTextField();
    const secondTextField = getSecondTextField();
    minuteTextField.disabled = false;
    secondTextField.disabled = false;
};

// edit time
const editTime = () => {
    // check is timer is currently running.
    if (isTimerRunning()) {
        alert('Stop the timer first to edit the time.');
    } else if (isEditingTime()) {
        // if timer is not running check if timer is already in editing state.

        // if entered time is in valid format disable editing
        // else display alert message
        if (checkValidTime()) setTimeEditDisabled();
        else alert('Enter a valid time.');
    } else { // it time is not being edited allow it to be edited
        setTimeEditEnabled();
    }
};

export {
    changeRingColorToRed,
    changeRingColorToGreen,
    startTimer,
    stopTimer,
    toggleTimer,
    toggleTimerText,
    setTimeEditDisabled,
    setTimeEditEnabled,
    editTime,
};
