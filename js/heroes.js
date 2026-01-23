/* =========================
   HEROES – CIRCULAR CAROUSEL
========================= */

// 🔁 redirect to intro on reload
const nav = performance.getEntriesByType("navigation")[0];
if (nav && nav.type === "reload") {
  window.location.href = "index.html";
}

// 🦸 HERO DATA
const heroes = [
  {
    name: "Iron Darren",
    img: "img/Darren.png",
    desc: "Founder & strategist",
    stats: ["Leadership", "Strategy", "Vision"]
  },
  {
    name: "Ross",
    img: "img/Ross.png",
    desc: "Tech advisor",
    stats: ["Logic", "Systems", "Analysis"]
  },
  {
    name: "Captain Dave",
    img: "img/Dave.png",
    desc: "Operations lead",
    stats: ["Decisions", "Calm", "Speed"]
  },
  {
    name: "Jim",
    img: "img/Jim.png",
    desc: "James Ernrstovych Chanen",
    stats: ["Smart", "Strong", "Agresive"]
  },
  {
    name: "Darrell",
    img: "img/Darrell.png",
    desc: "TACO Captain",
    stats: ["Ingeneer", "Logik", "Timing"]
  },
  {
    name: "Val",
    img: "img/Val.png",
    desc: "Precision shooter",
    stats: ["Accuracy", "Focus", "Timing"]
  },
  {
    name: "Scott",
    img: "img/Scott.png",
    desc: "Precision shooter",
    stats: ["Accuracy", "Focus", "Timing"]
  },
  {
    name: "Cody",
    img: "img/Cody.png",
    desc: "Precision shooter",
    stats: ["Accuracy", "Focus", "Timing"]
  },
  {
    name: "Melany",
    img: "img/Melany.png",
    desc: "Precision shooter",
    stats: ["Accuracy", "Focus", "Timing"]
  },
  {
    name: "Jerry",
    img: "img/Jerry.png",
    desc: "Precision shooter",
    stats: ["Accuracy", "Focus", "Timing"]
  },
  {
    name: "Melanie",
    img: "img/Melanie.jpg",
    desc: "Precision shooter",
    stats: ["Accuracy", "Focus", "Timing"]
  },
  {
    name: "Bohdan",
    img: "img/me.png",
    desc: "Charisma master",
    stats: ["Energy", "Speed", "Control"]
  },
  {
    name: "Alibhon",
    img: "img/Alibhon.png",
    desc: "Charisma master",
    stats: ["Energy", "Speed", "Control"]
  },
  {
    name: "Francis",
    img: "img/Francis.png",
    desc: "Charisma master",
    stats: ["Energy", "Speed", "Control"]
  },
  {
    name: "Asheile",
    img: "img/Asheil.png",
    desc: "Charisma master",
    stats: ["Energy", "Speed", "Control"]
  }
];

// 🎠 INFINITE LOOP (2x)
const grid = document.getElementById("hero-grid");
const loopHeroes = [...heroes, ...heroes];

loopHeroes.forEach(hero => {
  const card = document.createElement("div");
  card.className = "hero-card";

  card.innerHTML = `
    <div class="hero-inner">
      <div class="hero-face hero-front">
        <img src="${hero.img}" alt="${hero.name}">
        <h2>${hero.name}</h2>
      </div>

      <div class="hero-face hero-back">
        <h3>${hero.name}</h3>
        <p>${hero.desc}</p>
        <ul>
          ${hero.stats.map(s => `<li>${s}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  // 🔁 DOUBLE CLICK → FLIP
  card.addEventListener("dblclick", e => {
    e.stopPropagation();
    card.classList.toggle("is-flipped");
  });

  grid.appendChild(card);
});

// ▶️ AUTO MOVE
const track = document.querySelector(".carousel-track");

// 🖱️ ONE CLICK ANYWHERE → PAUSE / RESUME
let paused = false;

document.addEventListener("click", () => {
  paused = !paused;
  track.style.animationPlayState = paused ? "paused" : "running";
});

// 🎧 AUDIO
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-toggle");
const volumeSlider = document.getElementById("volume-slider");

music.volume = 0.5;
music.play().catch(()=>{});

muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
};

volumeSlider.oninput = () => {
  music.volume = volumeSlider.value;
};
