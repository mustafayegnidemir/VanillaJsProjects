const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Event Listeners
    // toggleVideoStatus
video.addEventListener("click", ()  => {
    if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
});

    // updatePlayIcon
const updatePlayIcon = () =>{
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}
video.addEventListener("pause", updatePlayIcon);

video.addEventListener("play", updatePlayIcon);

    // calculate Time function
const calculateTime = (totalSecond) =>{
    const mins = Math.floor( totalSecond / 60);
    const updatedMins = mins < 10 ? `0${mins}` : `${mins}`;
    const sec = Math.floor(totalSecond % 60);
    const updatedSecond = sec < 10 ? `0${sec}` : `${sec}`;
    const innerHTML = ` ${updatedMins}:${updatedSecond} `;
    return innerHTML;
}

    //updateProgress
video.addEventListener("timeupdate", () => {
    progress.value = (video.currentTime / video.duration) * 100;
    timestamp.textContent = calculateTime(video.currentTime);
});

    // toggleVideoStatus with play button
play.addEventListener('click',()  => {
    if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
});

    //stopVideo
stop.addEventListener('click', () =>{
    video.currentTime = 0;
    video.pause();
});

    //setVideoProgress
progress.addEventListener('change', ()=>{    
    video.currentTime = (+progress.value * video.duration) / 100;
});