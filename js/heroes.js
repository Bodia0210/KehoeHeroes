// Redirect on reload
const nav = performance.getEntriesByType("navigation")[0];
if (nav && nav.type === "reload") {
  window.location.href = "index.html";
}

// Heroes
const heroes = [
  { name:"Iron Darren", img:"img/Darren.png", desc:"Owner and founder." },
  { name:"Ross", img:"img/Ross.png", desc:"Strategic advisor." },
  { name:"Captain Dave", img:"img/Dave.png", desc:"Calm under pressure." },
  { name:"Jerry", img:"img/Jerry.png", desc:"Perfect aim." },
  { name:"Jim", img:"img/Jim.png", desc:"Mech pilot." },
  { name:"Bohdan", img:"img/me.png", desc:"Charisma master." },
  { name:"Francis", img:"img/Francis.png", desc:"Controls reality." }
];

// Infinite loop
const grid = document.getElementById("hero-grid");
const loopHeroes = [...heroes, ...heroes];

loopHeroes.forEach(h => {
  const card = document.createElement("div");
  card.className = "hero-card";
  card.innerHTML = `
    <img src="${h.img}">
    <h2>${h.name}</h2>
    <p>${h.desc}</p>
  `;
  grid.appendChild(card);
});

// Audio
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-toggle");
const volume = document.getElementById("volume-slider");

music.volume = 0.5;
music.play().catch(()=>{});

muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
};

volume.oninput = () => music.volume = volume.value;
