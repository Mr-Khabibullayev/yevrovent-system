let btnMenu = document.querySelector('.menu-icon')
let btnXMenu = document.querySelector('.menu-x-icon')
let menuBox = document.querySelector('.menu-box')
let allMenu = document.querySelector('.all-menu-box')

btnMenu.addEventListener('click', btnMenuClick)
btnXMenu.addEventListener('click',btnXMenuClick)

function btnMenuClick(){
    btnMenu.style.display = 'none'
    menuBox.style.display = 'block'
    btnXMenu.style.display = 'flex'
    btnXMenu.style.position = 'absolute'
    btnXMenu.style.top = '1%'
    btnXMenu.style.right = '5%'
}
function btnXMenuClick(){
    btnXMenu.style.zIndex = '1090'
    menuBox.style.display = 'none'
    btnMenu.style.display = 'flex'
    btnXMenu.style.display = 'none'
}

