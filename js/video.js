  const playVid = () => {
    var vid = document.getElementById("bgvid");
    vid.playbackRate = 0.45;
  }

  const nav = () => {
  	let navbtn = document.getElementById("showNav");
  	navbtn.onclick = navAppear;
  }

const navAppear = () => {
	let showMe = document.querySelector(".classicNav");
	showMe.style.opacity = 1;
	showMe.style.transition = "2s";
}

const closeNav = () => {
  let closeBtn = document.getElementById("closeNav");
  closeBtn.onclick = navDisappear;
}

const navDisappear = () => {
  let showMe = document.querySelector(".classicNav");
  showMe.style.opacity = 0;
  showMe.style.transition = ".3s";
}

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 4*1000, 'This site is under maintenance. The full, functional experience will be delivered April 1.');
}

function fixiphone() {
  document.getElementById("herePutVideoId").controls = false;
}

window.addEventListener('load', function () {
  delayedAlert();
  playVid();
  nav();
  closeNav();
  fixiphone()
});
