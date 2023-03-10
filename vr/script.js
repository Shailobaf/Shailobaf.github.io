let num = 0;
let slides = document.querySelectorAll(".game-item");
slides[num].classList.add("active");
for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", () => {
    console.log(i);
    showSlide(i);
  });
}
function showSlide(num) {
  for (let item of slides) {
    if (item != slides[num]) {
      item.classList.remove("active");
    } else {
      slides[num].classList.add("active");
    }
  }
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("sp").style.opacity = "0";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("sp").style.opacity = "1";
}



// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");
var btns = document.getElementById("myBtns");
// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];
// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}
btns.onclick = function() {
  modal.style.display = "block";
}
// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}
// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
