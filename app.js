const screens = [...document.querySelectorAll('.screen')];
const navItems = [...document.querySelectorAll('.nav-item')];
const toast = document.querySelector('#toast');
let deferredPrompt;

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle('active', screen.id === id));
  navItems.forEach((item) => item.classList.toggle('active', item.dataset.screen === id));
  document.querySelector('#app').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('[data-screen]').forEach((item) => {
  item.addEventListener('click', () => showScreen(item.dataset.screen));
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  document.querySelector('#installBanner').hidden = false;
});

document.querySelector('#installButton').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt = null;
  document.querySelector('#installBanner').hidden = true;
});

document.querySelector('#shareButton').addEventListener('click', async () => {
  const shareData = { title: 'InnovateHer', text: 'Join InnovateHer at Purdue.', url: window.location.href };
  if (navigator.share) await navigator.share(shareData);
  else {
    await navigator.clipboard.writeText(window.location.href);
    toast.textContent = 'App link copied';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }
});

document.querySelectorAll('.accordion button').forEach((button) => {
  button.addEventListener('click', () => {
    button.querySelector('span').textContent = button.querySelector('span').textContent === '+' ? '−' : '+';
  });
});

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js'));