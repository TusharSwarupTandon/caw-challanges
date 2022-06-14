let startButton = document.querySelector(".start");
let settingsButton = document.querySelector(".settings");

let timerRunning = false;
let timerDecreasing;

const getMinuteTextField = () =>
{
    let minuteDiv=document.querySelector(".minutes");
    let minuteTextField=minuteDiv.children[0];
    return minuteTextField;
}

const getSecondTextField = () =>
{
    let secondDiv=document.querySelector(".seconds");
    let secondTextField=secondDiv.children[0];
    return secondTextField;
}

const getRing = () =>
{
    let ring = document.querySelector(".ring");
    return ring;
}

const changeRingColorToRed = () =>
{
    let ring = getRing();
    ring.style.stroke = "#900A0A";
}

const changeRingColorToGreen = () =>
{
    let ring = getRing();
    ring.style.stroke = "#09A65A";
}

const timeUp = () =>
{
    clearInterval(timerDecreasing);
    changeRingColorToRed();
    toggleTimerText();
    timerRunning = false;
    setTimeout(function() {alert("Time's up.");}, 1);
}

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

const startTimer = () =>
{
    timerRunning = true;
    changeRingColorToGreen();
    toggleTimerText();
    reduceTimer();
}

const stopTimer = () =>
{
    timerRunning = false;
    clearInterval(timerDecreasing);
    toggleTimerText();
}

const toggleTimer = () =>
{
    if(isEditingTime())
    {
        alert("Finish editing to use the clock.")
        return;
    }
    if(timerRunning)
    {
        stopTimer();
    }
    else
    {
       startTimer();
    }
}

const toggleTimerText = () =>
{
    startButton.innerHTML = startButton.innerHTML === 'start' ? 'stop' : 'start';
}

const isEditingTime = () =>
{
    let secondTextField = getSecondTextField();
    if(secondTextField.disabled == false)
        return true;
    return false;
}

const setTimeEditDisabled = () =>
{
    let minuteTextField = getMinuteTextField();
    let secondTextField = getSecondTextField();
    minuteTextField.disabled = true;
    secondTextField.disabled = true;
}

const setTimeEditEnabled = () =>
{
    let minuteTextField = getMinuteTextField();
    let secondTextField = getSecondTextField();
    minuteTextField.disabled = false;
    secondTextField.disabled = false;
}

const checkValidTime = () =>
{
    let minutes = getMinuteTextField().value;
    let seconds = getSecondTextField().value;
    if(minutes <= 59 && minutes >= 0 && seconds <= 59 && seconds >= 0 && !Number.isNaN(minutes) && !Number.isNaN(seconds))
        return true;
    return false;

}

const editTime = () =>
{
    if(timerRunning == true)
    {
        alert("Stop the timer first to edit the time.");
    }
    else if(isEditingTime())
    {
        if(checkValidTime())
            setTimeEditDisabled();
        else 
            alert("Enter a valid time.");
    }
    else
    {
        setTimeEditEnabled();
    }
}

startButton.addEventListener('click',toggleTimer);
settingsButton.addEventListener('click', editTime);