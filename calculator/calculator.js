let dugme = document.getElementsByTagName("button");
let scren = document.getElementsByClassName("scren")[0];
let sonuc = document.getElementById("sonuc");
let reset = document.getElementById("reset");
for (var i = 0; i < 16; i++) {
  if (i != 12 && i != 14) {
    dugme[i].addEventListener("click", yazdir);
  }
}

function yazdir() {
  scren.value = scren.value + this.value;
}

sonuc.addEventListener("click", hesapla);

function hesapla() {
  scren.value = eval(scren.value); //eval: içerisinde mat ifade gördüğünde işlem önceliğine göre hesaplama yapan bir function
}
reset.addEventListener("click", temizle);
function temizle() {
  scren.value = "";
}
