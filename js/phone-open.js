let openBntPhone = document.querySelector('.open-btn-phone')
let closeBntPhone = document.querySelector('.x-btn-phone')

let phoneBox = document.querySelector('.phone-view-box')

openBntPhone.addEventListener('click',openBntPhoneClick)
closeBntPhone.addEventListener('click',closeBntPhoneClick)

function openBntPhoneClick(){
    phoneBox.style.display = 'block'
    closeBntPhone.style.display = 'block'
    openBntPhone.style.display = 'none'
}

function closeBntPhoneClick(){
    phoneBox.style.display = 'none'
    closeBntPhone.style.display = 'none'
    openBntPhone.style.display = 'block'
}

const form__phone = document.querySelector("#form__phone");


form__phone.addEventListener("submit", (e) => {
   var text1__ism = document.getElementById("phone__telegram").value;
   var text2__raqam = document.getElementById("phone__telegramNumber").value;
   if(text1__ism === '' || text2__raqam === ''){
    alert('Malumotlarni to\'liq holatda to\'diring')
   }
   else{
          e.preventDefault();
          var my_text__footer = `Xabar qoldiruvchi:%0A%0A - <b>Ismi: </b> <u> ${text1__ism}</u> %0A -  <b>Telefon raqami :</b> <i> ${text2__raqam}</i>`
       
          var token = "5795810475:AAHqrnPV0hGKzUzYCi_OpFycevMlLNWeL6w";
          var chat_id = -1001704417890;
          var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text__footer}&parse_mode=html`;
          let api = new XMLHttpRequest();
          api.open("GET", url, true);
          api.send();
          form__phone.reset()
   }

})
