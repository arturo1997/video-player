const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $video = document.querySelector('#video');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');


$play.addEventListener('click',handlePlay);
$pause.addEventListener('click',handlePause);

function handlePlay(){
    $video.play();
    $pause.hidden = false;
    $play.hidden = true;
}
function handlePause(){
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

function handleBackward(){
    $video.currentTime = $video.currentTime -10
}
function handleForward(){
    $video.currentTime = $video.currentTime + 10
}

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration;
}
function handleTimeUpdate(){
    $progress.value= $video.currentTime;
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    console.log('cmabiastes')
    $video.currentTime = $progress.value; 
}