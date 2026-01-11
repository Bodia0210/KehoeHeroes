const enterBtn = document.getElementById('enter');
const music = document.getElementById('bg-music');
const hero = document.querySelector('.hero');

enterBtn.addEventListener('click', async () => {
  hero.classList.add('is-entering');

  try {
    await music.play();
  } catch (err) {
    console.warn('Автовідтворення заблоковано:', err);
  }

  setTimeout(() => {
    window.location.assign('heroes-page.html');
  }, 1000);
});
