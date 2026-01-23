const enterBtn = document.getElementById("enter");
const hero = document.querySelector(".hero");

enterBtn.addEventListener("click", () => {
  hero.classList.add("is-entering");

  const music = new Audio("audio/intro.mp3");
  music.volume = 0.7;
  music.play().catch(()=>{});

  setTimeout(() => {
    window.location.href = "heroes-page.html";
  }, 1000);
});
