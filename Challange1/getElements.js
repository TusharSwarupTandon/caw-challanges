// get aacess to minute text field
const getMinuteTextField = () => {
    const minuteDiv = document.querySelector('.minutes');
    const minuteTextField = minuteDiv.children[0];
    return minuteTextField;
};

// get access to second's text field
const getSecondTextField = () => {
    const secondDiv = document.querySelector('.seconds');
    const secondTextField = secondDiv.children[0];
    return secondTextField;
};

// get access to ring
const getRing = () => {
    const ring = document.querySelector('.ring');
    return ring;
};

export {getMinuteTextField, getSecondTextField, getRing};
