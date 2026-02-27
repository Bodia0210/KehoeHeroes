/* =========================
   HEROES – STATIC GRID
========================= */

// 🔁 redirect to intro on reload (залишив як у тебе; якщо не треба — видали цей блок)
const nav = performance.getEntriesByType("navigation")[0];
if (nav && nav.type === "reload") {
  window.location.href = "index.html";
}

// 🦸 HERO DATA
const heroes = [
  { name: "Iron Darren", img: "img/Darren.png", desc: "Founder & strategist", stats: ["Leadership", "Strategy", "Vision"] },
  { name: "Ross", img: "img/Ross.png", desc: "Tech advisor", stats: ["Logic", "Systems", "Analysis"] },
  { name: "Captain Dave", img: "img/Dave.png", desc: "Operations lead", stats: ["Decisions", "Calm", "Speed"] },
  { name: "Jim", img: "img/Jim.png", desc: "James Ernrstovych Chanen", stats: ["Smart", "Strong", "Agresive"] },
  { name: "Darrell", img: "img/Darrell.png", desc: "TACO Captain", stats: ["Ingeneer", "Logik", "Timing"] },
  { name: "Val", img: "img/Val.png", desc: "Precision shooter", stats: ["Accuracy", "Focus", "Timing"] },
  { name: "Scott", img: "img/Scott.png", desc: "Precision shooter", stats: ["Accuracy", "Focus", "Timing"] },
  { name: "Cody", img: "img/Cody.png", desc: "Precision shooter", stats: ["Accuracy", "Focus", "Timing"] },
  { name: "Melany", img: "img/Melany.png", desc: "Precision shooter", stats: ["Accuracy", "Focus", "Timing"] },
  { name: "Jerry", img: "img/Jerry.png", desc: "Precision shooter", stats: ["Accuracy", "Focus", "Timing"] },
  { name: "Melanie", img: "img/Melanie.jpg", desc: "Precision shooter", stats: ["Accuracy", "Focus", "Timing"] },
  { name: "Bohdan", img: "img/me.png", desc: "Charisma master", stats: ["Energy", "Speed", "Control"] },
  { name: "Alibhon", img: "img/Alibhon.png", desc: "Charisma master", stats: ["Energy", "Speed", "Control"] },
  { name: "Francis", img: "img/Francis.png", desc: "Charisma master", stats: ["Energy", "Speed", "Control"] },
  { name: "Asheile", img: "img/Asheil.png", desc: "Charisma master", stats: ["Energy", "Speed", "Control"] }
];

// 🧱 RENDER
const grid = document.getElementById("hero-grid");

function createCard(h) {
  const card = document.createElement("div");
  card.className = "hero-card";
  card.tabIndex = 0; // щоб можна було фокусуватись з клавіатури

  card.innerHTML = `
    <div class="hero-inner" aria-label="Hero card ${h.name}">
      <div class="hero-face hero-front">
        <img src="${h.img}" alt="${h.name}">
        <h2>${h.name}</h2>
      </div>

      <div class="hero-face hero-back">
        <h3>${h.name}</h3>
        <p>${h.desc}</p>
        <ul>
          ${h.stats.map(s => `<li>${s}</li>`).join("")}
        </ul>
        <div class="hint">Tap/click to flip back</div>
      </div>
    </div>
  `;

  // ✅ Flip: click / tap (краще для мобілки)
  const toggleFlip = (e) => {
    // щоб кліки по слайдеру/кнопках аудіо не фліпали — ми вішаємось лише на картку
    e.stopPropagation();
    card.classList.toggle("is-flipped");
  };

  card.addEventListener("click", toggleFlip);

  // ✅ Клавіатура: Enter/Space
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.classList.toggle("is-flipped");
    }
    if (e.key === "Escape") {
      card.classList.remove("is-flipped");
    }
  });

  return card;
}

if (grid) {
  grid.innerHTML = "";
  heroes.forEach(h => grid.appendChild(createCard(h)));
} else {
  console.warn("No #hero-grid container found");
}

// 🎧 AUDIO
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-toggle");
const volumeSlider = document.getElementById("volume-slider");

function setMuteIcon() {
  if (!muteBtn || !music) return;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
}

if (music) {
  music.volume = 0.5;

  // Автоплей часто блокується, але після першої взаємодії — ок.
  const tryPlay = () => music.play().catch(() => {});
  tryPlay();

  // Якщо браузер заблокував — стартуємо після першого кліку
  window.addEventListener("pointerdown", tryPlay, { once: true });

  if (muteBtn) {
    muteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      music.muted = !music.muted;
      setMuteIcon();
    });
    setMuteIcon();
  }

  if (volumeSlider) {
    volumeSlider.value = String(music.volume);
    volumeSlider.addEventListener("input", (e) => {
      e.stopPropagation();
      music.volume = Number(volumeSlider.value);
      if (music.volume === 0) music.muted = true;
      if (music.volume > 0) music.muted = false;
      setMuteIcon();
    });
  }
}