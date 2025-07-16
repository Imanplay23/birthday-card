function openCard() {
  const card = document.querySelector('.card');
  card.classList.add('open');

  // 🎉 Disparar confeti
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.4 }
  });

  // 🔊 Reproducir sonido
  const sound = document.getElementById('celebration-sound');
  if (sound) sound.play();
}

function closeCard() {
  document.querySelector('.card').classList.remove('open');
}