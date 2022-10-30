
let aplication = document.querySelector(' .send-aplication-all');
let aplicationOpen = document.querySelector('.banner-home-top-informations .banner-home-top-informations-btn');
let aplicationClose = document.querySelector('.send-aplication-close');
let aplicationOpenThree = document.querySelector('.header-2 .send-aplication-form-box-2 .banner-home-top-informations-btn');


aplicationOpen.addEventListener('click',aplicationOpenClick)
aplicationClose.addEventListener('click', aplicationCloseClick)
aplicationOpenThree.addEventListener('click', aplicationOpenThreeClick)

function aplicationOpenClick(){
    aplication.style.display = 'flex'
}
function aplicationOpenThreeClick(){
    aplication.style.display = 'flex'
}
function aplicationCloseClick(){
    aplication.style.display = 'none'
}

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    var text1 = document.getElementById("index__ariza__ismi").value;
    var text2 = document.getElementById("index__ariza__raqam").value;
    var text3 = document.getElementById("index__ariza__izoh").value;
    if(text1 === '' || text2 === '' || text3 === ''){
        alert('Malumotlarni to\'liq holatda to\'diring')
    }
    else{
        e.preventDefault();
        var my_text = `Ariza qoldiruvchi:%0A%0A - <b>Ismi: </b> <u> ${text1}</u> %0A -  <b>Telefon raqami :</b> <i> ${text2}</i> %0A - Xabar: <i> ${text3}</i>`
        var token = "5795810475:AAHqrnPV0hGKzUzYCi_OpFycevMlLNWeL6w";
        var chat_id = -1001704417890;
        var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        form.reset()
        aplicationCloseClick();
    }
})
