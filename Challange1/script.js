let startButton = document.querySelector(".start");
let settingsButton = document.querySelector(".settings");

let timerRunning = false; //flag to check if the timer is currently running
let timerDecreasing;    //external flag for time decreasing interval id

//perform actions when time is up
const timeUp = () =>
{
    clearInterval(timerDecreasing);
    changeRingColorToRed();
    toggleTimerText();
    timerRunning = false;
    setTimeout(function() {alert("Time's up.");}, 1);
}

//function to perform time reduction every second
const reduceTimer = () =>
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

//edit time
const editTime = () =>
{
    //check is timer is currently running.
    if(timerRunning == true)
    {
        alert("Stop the timer first to edit the time.");
    }
    //if timer is not running check if timer is already in editing state.
    else if(isEditingTime())
    {
        //if entered time is in valid format disable editing
        //else display alert message
        if(checkValidTime())
            setTimeEditDisabled();
        else 
            alert("Enter a valid time.");
    }
    //it time is not being edited allow it to be edited
    else
    {
        setTimeEditEnabled();
    }
}

//perform action when start/ top button is clicked
startButton.addEventListener('click',toggleTimer);

//perform action when settings button is clicked
settingsButton.addEventListener('click', editTime);