    const playVid = () => {
    var vid = document.getElementById("bgvid");
    vid.playbackRate = 0.3;
  }

  const nav = () => {
  	let navbtn = document.getElementById("showNav");
  	navbtn.onclick = navAppear;
  }

const navAppear = () => {
	let showMe = document.querySelector(".classicNav");
	showMe.style.opacity = 1;
	showMe.style.transition = "3s";
}

window.addEventListener('load', function () {
  playVid();
  nav();
});
