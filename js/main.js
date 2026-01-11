const enterBtn = document.getElementById('enter');
const hero = document.querySelector('.hero');

if (!enterBtn || !hero) {
  console.error('Required elements not found');
} else {
  enterBtn.addEventListener('click', () => {
    // 1. Анімація старту
    hero.classList.add('is-entering');

    // 2. Створюємо аудіо ТІЛЬКИ після кліку
    const music = new Audio('audio/intro.mp3'); // ← назва файлу з папки audio
    music.volume = 0.7;

    music.play().catch(err => {
      console.warn('Audio blocked:', err);
    });

    // 3. Перехід на наступну сторінку
    setTimeout(() => {
      window.location.href = 'heroes-page.html';
    }, 1000);
  });
}
