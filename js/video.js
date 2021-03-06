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

window.addEventListener('load', function () {
  playVid();
  nav();
  closeNav();
});
