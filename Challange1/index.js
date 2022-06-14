import {changeRingColorToRed, toggleTimer, toggleTimerText, editTime} from './toggleItems.js';
import {getMinuteTextField, getSecondTextField} from './getElements.js';

let startButton = document.querySelector(".start");
let settingsButton = document.querySelector(".settings");

let timerDecreasing;    //external flag for time decreasing interval id

//perform actions when time is up
function timeUp()
{
    clearInterval(timerDecreasing);
    changeRingColorToRed();
    toggleTimerText();
    setTimeout(function() {alert("Time's up.");}, 1);
}

//function to perform time reduction every second
function reduceTimer()
{
    let minuteTextField = getMinuteTextField();
    let secondTextField = getSecondTextField();
    timerDecreasing = setInterval (function()
    {
        let seconds = secondTextField.value;
        let minutes = minuteTextField.value;

        if(seconds == 0)
        {
            if(minutes > 0)
            {
                minutes--;
                seconds='59';
            }
            else //minutes == 0 seconds == 0
            {
                timeUp()
            }
        }
        else
        {
            seconds--;
        }
        if(minutes >=0 && minutes <= 9)
            minutes = '0' + minutes%10;
        if(seconds >= 0 && seconds <= 9)
            seconds = '0' + seconds%10;
        minuteTextField.value = minutes;
        secondTextField.value = seconds;       
    }, 1000);
}



//perform action when start/ top button is clicked
startButton.addEventListener('click',toggleTimer);

//perform action when settings button is clicked
settingsButton.addEventListener('click', editTime);

export {startButton, settingsButton, timerDecreasing, timeUp, reduceTimer};