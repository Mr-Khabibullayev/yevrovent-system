let bgcolor = document.querySelector('.vvvv')
let boxxx = document.querySelector('.card-media-decoration')

boxxx.addEventListener('mouseover',boxxxMouseover)
boxxx.addEventListener('mouseout',boxxxMouseout)

function boxxxMouseover(){
    bgcolor.style.background = '#adcae9ba'
    bgcolor.style.margin = 0
}
function boxxxMouseout(){
    bgcolor.style.background = ' linear-gradient(to top, #adcae9,rgba(255, 255, 255, 0))'
    bgcolor.style.marginTop = '100px'

}

let bgcolorb = document.querySelector('.bbbb')
let boxxxb = document.querySelector('.card-media-product')

boxxxb.addEventListener('mouseover',boxxxMouseoverb)
boxxxb.addEventListener('mouseout',boxxxMouseoutb)

function boxxxMouseoverb(){
    bgcolorb.style.background = '#adcae9ba'
    bgcolorb.style.margin = 0
}
function boxxxMouseoutb(){
    bgcolorb.style.background = ' linear-gradient(to top, #adcae9,rgba(255, 255, 255, 0))'
    bgcolorb.style.marginTop = '100px'

}


let bgcolorn = document.querySelector('.nnnn')
let boxxxn = document.querySelector('.card-media-quality')

boxxxn.addEventListener('mouseover',boxxxMouseovern)
boxxxn.addEventListener('mouseout',boxxxMouseoutn)

function boxxxMouseovern(){
    bgcolorn.style.background = '#adcae9ba'
    bgcolorn.style.margin = 0
}
function boxxxMouseoutn(){
    bgcolorn.style.background = ' linear-gradient(to top, #adcae9,rgba(255, 255, 255, 0))'
    bgcolorn.style.marginTop = '100px'

}
