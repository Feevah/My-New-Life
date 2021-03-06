const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const overlay = document.getElementById('overlay');

// Play and Pause Video

function toggleVideoStatus() {
	if (video.paused) {
		video.play();
		overlay.classList.remove('overlay2');
		overlay.classList.add('overlay');
		// overlay.classList.toggle('overlay');
		// overlay.innerHTML = 'Lead Your Life!';
	} else {
		video.pause();
	}
}
// update play/pause icon

function updatePlayIcon() {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}

// Update progree and timesamp
function updateProgress() {
	progress.value = video.currentTime / video.duration * 100;

	// console.log(video.currentTime);
	// console.log(video.duration);

	// get minutes
	let mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = '0' + String(mins);
	}

	// get seconds
	let secs = Math.floor(video.currentTime % 60);
	if (secs < 10) {
		secs = '0' + String(secs);
	}

	timestamp.innerHTML = `${mins}:${secs}`;
}

// set video time to progress
function setVideoProgress() {
	video.currentTime = progress.value * video.duration / 100;
}

// Stop Vide0
function stopVideo() {
	video.currentTime = 0;
	video.pause();
}

// Event Listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
