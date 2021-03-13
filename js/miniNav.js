const miniNav = () => {
  let navbtn = document.querySelector(".burger");
  navbtn.onclick = miniNavAppear;
}

const miniNavAppear = () => {
  let showMe = document.querySelector(".miniNav");
  showMe.style.cssText = 'display: flex; flex-direction: column; position: fixed; top: 0; left: 0; background: white; height: 100%; width: 60vw; z-index: 10; ';
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
