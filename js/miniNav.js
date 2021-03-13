const miniNav = () => {
  let navbtn = document.querySelector(".burger");
  navbtn.onclick = miniNavAppear;
}

const miniNavAppear = () => {
  let showMe = document.querySelector(".miniNav");
  showMe.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: flex-start; font-size: 5em;  list-style-type: none; position: fixed; top: 0; left: 0; background: rgba(255, 255, 255, 0.9); height: 100%; width: 67vw; z-index: 10; ';
  showMe.style.transition = "2s";
  }

const closeMini = () => {
  let closeBtn = document.querySelector(".close");
  closeBtn.onclick = miniDisappear;
}

const miniDisappear = () => {
  let showMe = document.querySelector(".miniNav");
  showMe.style.display = 'none';
  showMe.style.transition = ".8s";
}

window.addEventListener('load', function () {
  miniNav();
  closeMini();
  console.log('ola');
});
