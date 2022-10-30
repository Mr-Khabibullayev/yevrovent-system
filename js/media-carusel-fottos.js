let openCaruselOne = document.querySelector('.card-media-decoration')
let openCaruselTwo = document.querySelector('.card-media-product')
let openCaruselThree = document.querySelector('.card-media-quality')

let caruselOne = document.querySelector('.foto-box-one')
let caruselTwo = document.querySelector('.foto-box-two')

let mediaBanner = document.querySelector('.media-information-banner')
let xxxxx = document.querySelector('.xxxxx')

openCaruselOne.addEventListener('click',openCaruselOneClick)
openCaruselTwo.addEventListener('click',openCaruselTwoClick)

function openCaruselOneClick(){
    caruselOne.style.display = 'block'
    mediaBanner.style.display = 'none'
    xxxxx.style.display = 'block'
    caruselOne.innerHTML = `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                 <div class="carousel-item active">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/K8GoyNs5ICb8zbV87mf4VtiLzZQTow4hupdyMtC1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/kn6b8kpHlo9JC5i6cg6zubGrOCvazNJT37y2kPjY.webp" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/vSRvV5fRP2r8DxaruMpM7Vvz7BwNsfyAy5NZEJqD.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/kqRV8QiA37p31mnAgUrarzOCT5IAx1TLGiK7YwhG.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/HgxkwFCuGaeEEztF9tBantFDRW6ExAJfApWpUR4c.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/kUFQFAfd0zv0zKV71UJhzNpOWU3h3zW2Nz9b2NIA.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/K8GoyNs5ICb8zbV87mf4VtiLzZQTow4hupdyMtC1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/kn6b8kpHlo9JC5i6cg6zubGrOCvazNJT37y2kPjY.webp" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/vSRvV5fRP2r8DxaruMpM7Vvz7BwNsfyAy5NZEJqD.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/kqRV8QiA37p31mnAgUrarzOCT5IAx1TLGiK7YwhG.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/HgxkwFCuGaeEEztF9tBantFDRW6ExAJfApWpUR4c.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/kUFQFAfd0zv0zKV71UJhzNpOWU3h3zW2Nz9b2NIA.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/K8GoyNs5ICb8zbV87mf4VtiLzZQTow4hupdyMtC1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/kn6b8kpHlo9JC5i6cg6zubGrOCvazNJT37y2kPjY.webp" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/vSRvV5fRP2r8DxaruMpM7Vvz7BwNsfyAy5NZEJqD.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/kqRV8QiA37p31mnAgUrarzOCT5IAx1TLGiK7YwhG.jpg" class="d-block w-100" alt="...">
                </div> 
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`

}

function openCaruselTwoClick(){
    caruselTwo.style.display = 'block'
    xxxxx.style.display = 'block'
    mediaBanner.style.display = 'none'
    caruselTwo.innerHTML = `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/CsjE0iBR3F7oPCtK2LsNUSCkncmDnghtDaPRbcD3.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/8eKNTdQNPNbYCRziEdZrKhS4slCePWZIOHutw1Cn.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/4QnP2T3K7ZyHtes4IgdMJH1Vh1AcJE2AbKYQLxOa.jpg" class="d-block w-100" alt="...">
                </div>
                 <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/wocX7KFuCn87MQ5qWabe3f2NxkB5LKCPPHFVUQX1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/DIJdtwebcr14v3rBm8PiIRtOsVDLTsDhQiHEODzO.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/mJ3lUbYUuALJilYR4xi4QG5NBG6c5ibXCIHF9ARO.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item ">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/3iAQXHh81dJPrCpAzlB15KNqDj9vC6uPPERZXVA9.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/dMu0DVkJAdXl09VAPJVibNdHT1jm635dnwpXFXei.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/d5kTL6l1sXyO4JuqYkwWgc9C0WbJ4NDotnyUP1Kw.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item ">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/rR2IQmcisb5PO4LwtAJX5qgo6oIYGOGca46sal6m.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/NTBpuLYNwl3f1syRaXw0NTED6pt1TpzJ05Zq6sKh.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/vYYXDAr1UMnwDrEZr94gIb2MALqXtfSE2P5ioqZy.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item ">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/ZbAXXuI9ync3kWwJapQxYnb8xv84zsak6zo8doCF.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/KDFbS3fSPEXNKgfrTWyDPyFD45QdaAoVduKE4OVM.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/CsjE0iBR3F7oPCtK2LsNUSCkncmDnghtDaPRbcD3.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/8eKNTdQNPNbYCRziEdZrKhS4slCePWZIOHutw1Cn.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/4QnP2T3K7ZyHtes4IgdMJH1Vh1AcJE2AbKYQLxOa.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/wocX7KFuCn87MQ5qWabe3f2NxkB5LKCPPHFVUQX1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/DIJdtwebcr14v3rBm8PiIRtOsVDLTsDhQiHEODzO.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/mJ3lUbYUuALJilYR4xi4QG5NBG6c5ibXCIHF9ARO.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/3iAQXHh81dJPrCpAzlB15KNqDj9vC6uPPERZXVA9.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/dMu0DVkJAdXl09VAPJVibNdHT1jm635dnwpXFXei.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/d5kTL6l1sXyO4JuqYkwWgc9C0WbJ4NDotnyUP1Kw.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://jihozvent.uz:2118/images/multiple/2021-08-20/rR2IQmcisb5PO4LwtAJX5qgo6oIYGOGca46sal6m.jpg" class="d-block w-100" alt="...">
                </div> 
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`
}

xxxxx.addEventListener('click' ,xxxxxClick)

function xxxxxClick(){
    caruselOne.innerHTML = ``
    caruselTwo.innerHTML = ``
    caruselOne.style.display = 'none'
    caruselTwo.style.display = 'none'
    mediaBanner.style.display = 'block'
    xxxxx.style.display = 'none'
}