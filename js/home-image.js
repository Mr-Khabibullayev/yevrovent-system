let elementBox = document.querySelector('.element-chekced-help')
let elementBgColorBox = document.querySelector('.element-chekced-help-bgcolor')

elementBox.addEventListener('mouseover' , elementBoxClick)
elementBox.addEventListener('mouseout' , elementBoxClick1)

function elementBoxClick(){
    elementBgColorBox.style.margin = '0'
    elementBgColorBox.style.background = '#85a0bead'
}
function elementBoxClick1(){
    elementBgColorBox.style.marginTop = '100px'
    elementBgColorBox.style.background = 'linear-gradient(rgba(0, 0, 0, 0) ,#85A0BE  )'
}

let productBox = document.querySelector('.prroduction-assistant')
let productBgColorBox = document.querySelector('.prroduction-assistant-bgcolor')

productBox.addEventListener('mouseover' , productBoxClick)
productBox.addEventListener('mouseout' , productBoxClick1)

function productBoxClick(){
    productBgColorBox.style.margin = '0'
    productBgColorBox.style.background = '#207aaba9'
}
function productBoxClick1(){
    productBgColorBox.style.marginTop = '100px'
    productBgColorBox.style.background = 'linear-gradient(rgba(0, 0, 0, 0) ,#207BAB )'
}


let createBox = document.querySelector('.create-our-biznes')
let createBgColorBox = document.querySelector('.create-our-biznes-bgcolor')

createBox.addEventListener('mouseover', createBoxClick)
createBox.addEventListener('mouseout', createBoxClick1)

function createBoxClick(){
    createBgColorBox.style.margin = '0'
    createBgColorBox.style.background = '#e37a7ea9'
}
function createBoxClick1(){
    createBgColorBox.style.marginTop = '100px'
    createBgColorBox.style.background = 'linear-gradient(rgba(0, 0, 0, 0) ,#E27A7D)'
}