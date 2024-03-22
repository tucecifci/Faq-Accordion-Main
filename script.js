// Tüm img ve p elementlerini seçme
var imgList = document.querySelectorAll(".myImage");
var textList = document.querySelectorAll(".imageText");

// Her resme click event listener ekleme
imgList.forEach(function (img, index) {
  img.addEventListener("click", function () {
    // İlgili resmin ve metnin durumunu değiştirme
    if (img.src.match("assets/images/icon-plus.svg")) {
      img.src = "assets/images/icon-minus.svg";
      textList[index].style.display = "block";
    } else {
      img.src = "assets/images/icon-plus.svg";
      textList[index].style.display = "none";
    }
  });
});
