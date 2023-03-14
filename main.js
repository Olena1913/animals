const videoBtn = document.querySelector('.video-btn');
const videoPicture = document.querySelector('.video-picture');
const videoWrapper = document.querySelector('.video');
const careVideo = document.querySelector('#video-file');


videoWrapper.addEventListener('click', function() {
    if (careVideo.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-care');
        videoBtn.classList.add('hidden');
        careVideo.play();
    } else {
        videoPicture.classList.remove('hidden');
        videoWrapper.classList.add('video-care');
        videoBtn.classList.remove('hidden');
        careVideo.pause();
    }
   
});
const videoSecond = document.querySelector('.video-btn-second');
const pictureSecond = document.querySelector('.video-picture-second');
const wrapperSecond = document.querySelector('.video-second');
const caresecondVideo = document.querySelector('#video-file-second');


wrapperSecond.addEventListener('click', function() {
    console.log(videoWrapper)
    if (caresecondVideo.paused) {
        pictureSecond.classList.add('hidden');
        wrapperSecond.classList.remove('video-care-second');
        videoSecond.classList.add('hidden');
        caresecondVideo.play();
    } else {
        pictureSecond.classList.remove('hidden');
        wrapperSecond.classList.add('video-care-second');
        videoSecond.classList.remove('hidden');
        caresecondVideo.pause();
    }
   
});