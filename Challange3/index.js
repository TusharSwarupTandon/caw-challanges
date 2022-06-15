function playPianoSound(url)
{
    return function ()
    {
        return new Audio(url).play();
    }
}

function makeUrl(index)
{
    return './audio/key-' + index + '.mp3';
}

function assignAudioFile()
{
    let anchorTags = document.querySelectorAll('a');
    for(let i = 0 ; i < anchorTags.length; i++)
        anchorTags[i].addEventListener('click',playPianoSound(makeUrl(i+1)));
}
assignAudioFile();