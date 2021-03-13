const miniNav = () => {
  let navbtn = document.querySelector(".burger");
  navbtn.onclick = navAppear;
}

const miniNavAppear = () => {
let showMe = document.querySelector(".classicNav");
showMe.style.display = flex;
showMe.style.transition = "2s";
}

const closeMini = () => {
let closeBtn = document.getElementById("closeNav");
closeBtn.onclick = navDisappear;
}

const miniDisappear = () => {
  let showMe = document.querySelector(".classicNav");
  showMe.style.opacity = 0;
  showMe.style.transition = ".3s";
}

window.addEventListener('load', function () {
  miniNav();
  closeMini();
  console.log('ola');
});
