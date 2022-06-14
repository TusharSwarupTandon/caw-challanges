//check if time is currently in editing state
const isEditingTime = () =>
{
    //check if seconds text field is currenty is editing state
    //if yes return true
    //else return false
    let secondTextField = getSecondTextField();
    if(secondTextField.disabled == false)
        return true;
    return false;
}

//check if entered time value is valid
const checkValidTime = () =>
{
    //get minute and seconds value 
    let minutes = getMinuteTextField().value;
    let seconds = getSecondTextField().value;
    //minutes and seconds should be between 59 and 0
    //also it should be an integer, no decimal values allowed 
    if(minutes <= 59 && minutes >= 0 && seconds <= 59 && seconds >= 0 && !Number.isNaN(minutes) && !Number.isNaN(seconds) && minutes.indexOf('.') < 0 && seconds.indexOf('.') < 0)
        return true;
    return false;
}