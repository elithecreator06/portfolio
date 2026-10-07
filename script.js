document.getElementById('year').textContent = new Date().getFullYear();

const portrait = document.querySelector('.portrait-image');
const fallback = document.querySelector('.portrait-fallback');

portrait.addEventListener('load', () => {
  fallback.style.display = 'none';
});

portrait.addEventListener('error', () => {
  portrait.style.display = 'none';
  fallback.style.display = 'grid';
});
