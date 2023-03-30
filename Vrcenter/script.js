const cards = [...document.querySelectorAll(".card-item")]
cards.map(card => {
    card.addEventListener("click", () => {
        cards.map(card => card.classList.remove("card-active"))
        card.classList.toggle("card-active")
    })
}) 

//heder
document.addEventListener('scroll', ( )=>{

  const header = document.querySelector('header')
   if (window.pageYOffset > 250 && screen.width > 1024) {
  header.style.background='rgb(15, 23, 42)'
  }
  else {
  header.removeAttribute('style')
  }
  })

  //burger-menu
  function openNav() {
    document.getElementById("brg_btn1").classList.toggle("hidden");
    document.getElementById("brg_btn2").classList.toggle("hidden");
    document.getElementById("brg").classList.toggle("-translate-y-[120%]");
    document.getElementById("brg").classList.toggle("opacity-0");
}

//slider
let defaultTransform = 0;
function goNext() {
  defaultTransform = defaultTransform - 398;
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
    defaultTransform = 0;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
  else defaultTransform = defaultTransform + 398;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);


 