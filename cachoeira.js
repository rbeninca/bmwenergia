const video = document.getElementById('bg-video');
video.src = 'imgs/Vídeo_de_Cachoeira_Editado.mp4'; // Caminho correto
video.volume = 0.1;
video.muted = true; // Começa mudo para evitar bloqueio automático em alguns navegadores

// [Opcional] Ajusta altura uma única vez
video.style.height = window.innerHeight + 'px';

// ⏳ Fade-out automático após alguns segundos (mantém volume se o usuário já ativou som)
let fadeTimer = setTimeout(() => {
  if (!video.muted && video.volume > 0) {
    const fadeInterval = setInterval(() => {
      if (video.volume > 0.01) {
        video.volume = Math.max(0, video.volume - 0.01);
      } else {
        video.volume = 0;
        clearInterval(fadeInterval);
      }
    }, 300);
  }
}, 8000);

// 🔊 Botão de alternância de áudio (precisa estar no HTML com id="toggle-sound")
function toggleAudio() {
  if (video.muted || video.volume === 0) {
    video.muted = false;
    video.volume = 0.3;
  } else {
    video.volume = 0;
    video.muted = true;
  }
}
