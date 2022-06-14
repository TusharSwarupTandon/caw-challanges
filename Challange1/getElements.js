//get aacess to minute text field
function getMinuteTextField()
{
    let minuteDiv=document.querySelector(".minutes");
    let minuteTextField=minuteDiv.children[0];
    return minuteTextField;
}

//get access to seconds text field
function getSecondTextField()
{
    let secondDiv=document.querySelector(".seconds");
    let secondTextField=secondDiv.children[0];
    return secondTextField;
}

//get access to ring
function getRing()
{
    let ring = document.querySelector(".ring");
    return ring;
}

export {getMinuteTextField, getSecondTextField, getRing};