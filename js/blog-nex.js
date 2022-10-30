let btn1 = document.querySelector('.first-btn span')
let btn2 = document.querySelector('.second-btn span')

let blogCardsOne = document.querySelector('.oooo')
let blogCardTwo = document.querySelector('.lllll')

btn1.addEventListener('click',btn1Click)
btn2.addEventListener('click',btn2Click)

function btn1Click(){
    blogCardTwo.style.display = 'none'
    blogCardsOne.style.display = 'block'
    btn1.style.background = '#0D6EFD'
    btn1.style.color = 'white'
    btn2.style.background = 'white'
    btn2.style.color = '#0D6EFD'
}

function btn2Click(){
    blogCardsOne.style.display = 'none'
    blogCardTwo.style.display = 'block'
    btn2.style.background = '#0D6EFD'
    btn2.style.color = 'white'
    btn1.style.background = 'white'
    btn1.style.color = '#0D6EFD'
}


