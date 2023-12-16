var btn = document.querySelector(".btn")

var around = document.querySelector(".around")




btn.addEventListener("click" , function(){

    // arround.style.transform="scale(1.5)";

    around.classList.toggle("scaled")     //toogle e o demekdiki yeni 1 ci defe basanda scss de gosterdiyimiz kimi scale olacag 1 sora 2 ci defede olacag 1
})