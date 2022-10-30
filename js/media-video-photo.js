let cardVideoOneOpen = document.querySelector('.card-media-one')
let cardVideoTwoOpen = document.querySelector('.card-media-two')

let videoOne = document.querySelector('.bbbbbb')
let videoTwo = document.querySelector('.bvbvbv')

let po = document.querySelector('.card-media-one p')
let pt = document.querySelector('.card-media-two p')

cardVideoOneOpen.addEventListener('click', cardVideoOneOpenClick)
cardVideoTwoOpen.addEventListener('click',cardVideoTwoOpenClick)

function cardVideoOneOpenClick(){
    videoOne.style.display = 'none'
    videoTwo.style.display = 'flex'
    po.style.color = '#ff8282'
    pt.style.color = '#000'
}

function cardVideoTwoOpenClick(){
    videoOne.style.display = 'flex'
    videoTwo.style.display = 'none'
    po.style.color = '#000'
    pt.style.color = '#ff8282'
}





let btnOpenFoto = document.querySelector('.media-btn-foto')
let btnOpenVideo = document.querySelector('.media-btn-video')

let bannerFoto = document.querySelector('.media-fotos-videos-box')
let bannerVideo = document.querySelector('.cccc')

btnOpenFoto.addEventListener('click',btnOpenFotoClick)
btnOpenVideo.addEventListener('click',btnOpenVideoClick)

function btnOpenFotoClick(){
    bannerFoto.style.display = 'flex'
    bannerVideo.style.display = 'none' 
    btnOpenFoto.style.background = '#2088A9'
    btnOpenFoto.style.color = '#fff'
    btnOpenVideo.style.background = '#d3d3d3'
    btnOpenVideo.style.color = 'black'
}
function btnOpenVideoClick(){
    bannerFoto.style.display = 'none'
    bannerVideo.style.display = 'flex' 
    btnOpenFoto.style.background = '#d3d3d3'
    btnOpenFoto.style.color = 'black'
    btnOpenVideo.style.background = '#2088A9'
    btnOpenVideo.style.color = '#fff'
}