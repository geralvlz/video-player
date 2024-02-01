const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $backward = document.querySelector('#backward');

$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)

function handleplay() {

    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
}

function handlepause() {

    $video.pause()
    $play.hidden = false;
    $pause.hidden = true;
}

$forward.addEventListener('click', handleforward)
$backward.addEventListener('click', handlebackward)

function handleforward(){
    $video.currentTime = $video.currentTime + 10;
    console.log('para adelante 10 segundos', $video.currentTime);

}

function handlebackward(){
    $video.currentTime = $video.currentTime - 10;
    console.log('para atras 10 segundos', $video.currentTime);
}

const $progress = document.querySelector('#progress');

$video.addEventListener('loadedmetadata', handleloaded)
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleloaded(){
    $progress.max = $video.duration;
    console.log('ha cargado mi video', $video.duration);
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
    
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value;
    console.log($progress.value);
}