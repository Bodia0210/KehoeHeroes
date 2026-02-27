const enterBtn = document.getElementById("enter");
const hero = document.querySelector(".hero");

if (enterBtn && hero) {
  const go = () => {
    hero.classList.add("is-entering");

    const music = new Audio("audio/intro.mp3");
    music.volume = 0.7;

    // autoplay інколи блокується — але після кліку зазвичай ок
    music.play().catch(() => {});

    setTimeout(() => {
      window.location.href = "heroes-page.html";
    }, 900);
  };

  enterBtn.addEventListener("click", go);
  enterBtn.addEventListener("pointerdown", () => {
    // під мобілку — швидше відгук
  }, { passive: true });
}