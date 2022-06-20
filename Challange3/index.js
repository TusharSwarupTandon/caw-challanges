// Input - url of file to be played
// Output - function
const playPianoSound = (url) => {
    // returns a function to mount to every key
    return function() {
        return new Audio(url).play();
    };
};

// Input - index of key
// Output - url of audio file
const makeUrl = (index) => {
    // default path - ./audio/key-
    // index is the number of audio file
    // default extension .mp3
    return './audio/key-' + index + '.mp3';
};

// function to assign audio files to each key on click
const assignAudioFile = () => {
    // select all anchor tags
    const anchorTags = document.querySelectorAll('a');

    // loop through all the anchor tags
    for (let i = 0; i < anchorTags.length; i++) {
        // for each anchor tag add a click listener that plays paino sound
        // playPianoSound takes url as input which we get from makeUrl function
        // while passing index increment the value by 1 because
        // array has indexing from 0 and audio files are labeled from 1
        anchorTags[i].addEventListener('click', playPianoSound(makeUrl(i+1)));
    }
};

// on start call this function
assignAudioFile();
