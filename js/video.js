let openVideo = document.querySelector('.video-start-box')
let imageBox = document.querySelector('.jihozvent-company-banner-video')
let videoBox = document.querySelector('.video-box')

openVideo.addEventListener('click', openVideoClick)

function openVideoClick(){
    imageBox.style.display = 'none'
    videoBox.style.display = 'flex'
}