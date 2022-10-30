let btnAplication = document.querySelector('.aplication-form-for-users')
let btnForUsers = document.querySelector('.for-users-btn')


let bannerUsers = document.querySelector('.lllll')
let bannerAplication = document.querySelector('.banner-alication-form')

btnAplication.addEventListener('click',btnAplicationClick)
btnForUsers.addEventListener('click',btnForUserClick)

function btnAplicationClick(){
    bannerAplication.style.display = 'block'
    bannerUsers.style.display = 'none'
    btnAplication.style.color = 'white'
    btnAplication.style.background = '#2088A9 '
    btnForUsers.style.background = '#d3d3d3'
    btnForUsers.style.color = '#000'
}
function btnForUserClick(){
    bannerAplication.style.display = 'none  '
    bannerUsers.style.display = 'block'
    btnForUsers.style.color = 'white'
    btnForUsers.style.background = '#2088A9 '
    btnAplication.style.background = '#d3d3d3'
    btnAplication.style.color = '#000'
}