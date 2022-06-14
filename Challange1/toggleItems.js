//changing ring colour to red when timer runs out.
const changeRingColorToRed = () =>
{
    let ring = getRing();
    ring.style.stroke = "#900A0A";
}

//changing timer colour to green when timer runs.
const changeRingColorToGreen = () =>
{
    let ring = getRing();
    ring.style.stroke = "#09A65A";
}

//starts the timer
const startTimer = () =>
{
    //set the timer running state to running
    //stop the interval
    //change the start/stop button text.
    timerRunning = true;
    changeRingColorToGreen();
    toggleTimerText();
    reduceTimer();
}

//stop timer
const stopTimer = () =>
{
    //set the timer running state to not running
    //stop the interval
    //change the start/stop button text.
    timerRunning = false;
    clearInterval(timerDecreasing);
    toggleTimerText();
}

//when start or stop button is clicked toggele its state
const toggleTimer = () =>
{
    //if time is currently being edited show alert message
    if(isEditingTime())
    {
        alert("Finish editing to use the clock.")
    }
    //if timer is already running stop it.
    else if(timerRunning)
    {
        stopTimer();
    }
    //otherwise start the timer
    else
    {
       startTimer();
    }
}

//toggle start/stop button text
const toggleTimerText = () =>
{
    //check whatever the current start button text
    //is and reverse it
    startButton.innerHTML = startButton.innerHTML === 'start' ? 'stop' : 'start';
}

//disable time editing
const setTimeEditDisabled = () =>
{
    //get minute and second field and set there disabled property as true
    let minuteTextField = getMinuteTextField();
    let secondTextField = getSecondTextField();
    minuteTextField.disabled = true;
    secondTextField.disabled = true;
}

//enable time editing
const setTimeEditEnabled = () =>
{
    //get minute and second field and set there disabled property as false
    let minuteTextField = getMinuteTextField();
    let secondTextField = getSecondTextField();
    minuteTextField.disabled = false;
    secondTextField.disabled = false;
}