/* =========================================================
   NGF — Social Links Page
   All behavior lives here. Edit the LINKS array below to add,
   remove, or reorder platforms — everything else updates itself.
   ========================================================= */

const ICONS = {
  youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg>',
  twitch: '<svg viewBox="0 0 24 24"><path d="M4.3 1.7 1.7 4.9v14.4h5.1V22l3.2-2.7h4.4L21.3 12V1.7H4.3Zm14.9 9.5-3 3H12l-2.6 2.2v-2.2H6.3V3.3h12.9v7.9Z"/><path d="M16.4 6.2h-1.7v4.9h1.7V6.2Zm-4.6 0h-1.7v4.9h1.7V6.2Z"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18.2 2.3h3.3l-7.2 8.2 8.5 11.2h-6.6l-5.2-6.8-5.9 6.8H1.7l7.7-8.8L1.3 2.3h6.8l4.7 6.3 5.4-6.3Zm-1.2 17.4h1.8L7.1 4.2H5.2l11.8 15.5Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.1 0 4.1.06 1.1.05 1.8.2 2.5.5a5 5 0 0 1 1.8 1.2 5 5 0 0 1 1.2 1.8c.3.7.4 1.4.5 2.5.05 1 .06 1.4.06 4.1s0 3.1-.06 4.1c-.05 1.1-.2 1.8-.5 2.5a5 5 0 0 1-1.2 1.8 5 5 0 0 1-1.8 1.2c-.7.3-1.4.4-2.5.5-1 .05-1.4.06-4.1.06s-3.1 0-4.1-.06c-1.1-.05-1.8-.2-2.5-.5a5 5 0 0 1-1.8-1.2 5 5 0 0 1-1.2-1.8c-.3-.7-.4-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.06-4.1c.05-1.1.2-1.8.5-2.5a5 5 0 0 1 1.2-1.8 5 5 0 0 1 1.8-1.2c.7-.3 1.4-.4 2.5-.5C8.9 2 9.3 2 12 2Zm0 3.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 0 0 12 5.8Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.9 0 1.44 1.44 0 0 1 2.9 0Z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 2h-3.3v13.6a2.9 2.9 0 1 1-2.1-2.8V9.4a6.1 6.1 0 1 0 5.4 6V8.6a8.2 8.2 0 0 0 4.9 1.6V7A4.8 4.8 0 0 1 16.6 2Z"/></svg>',
  discord: '<svg viewBox="0 0 24 24"><path d="M20.3 5.4A17.7 17.7 0 0 0 15.9 4l-.3.6a13 13 0 0 1 3.7 1.4c-1.6-.8-3.2-1.2-4.9-1.4a12.6 12.6 0 0 0-5.4 0c-1.7.2-3.3.6-4.9 1.4A13 13 0 0 1 7.8 4.6L7.5 4a17.7 17.7 0 0 0-4.4 1.4C1 9 .4 12.5.7 16a17.9 17.9 0 0 0 5.3 2.6l.8-1.3a11 11 0 0 1-1.7-.8l.4-.3a12.7 12.7 0 0 0 10.9 0l.4.3c-.5.3-1.1.6-1.7.8l.8 1.3A17.9 17.9 0 0 0 21 16c.4-4-.6-7.5-2.7-10.6ZM8.7 13.9c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.6 1.7-1.5 1.7Zm6.6 0c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.6 1.7-1.5 1.7Z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24"><path d="m21.9 4.3-3.2 15.6c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L7 12.6l-4.8-1.5c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z"/></svg>',
  snapchat: '<svg viewBox="0 0 24 24"><path d="M12 2.4c3 0 4.9 2.3 5 5.2 0 .9 0 1.8.1 2.4.1.2.3.3.7.3.6-.1 1.2-.4 1.6-.4.4 0 1 .2 1 .8 0 .5-.5.8-1.1 1.1-.3.1-.7.3-.8.5-.1.2 0 .5.2.9.5 1.1 1.4 1.9 2.7 2.3.3.1.4.4.3.7-.2.6-1.3.9-2.1 1-.1.3-.2.6-.3.9-.1.3-.4.4-.8.4h-.2c-.5 0-1-.1-1.6-.1-.6 0-1.1.2-1.7.6-.7.5-1.5 1-2.9 1s-2.2-.5-2.9-1c-.6-.4-1.1-.6-1.7-.6-.6 0-1.1.1-1.6.1h-.2c-.4 0-.7-.1-.8-.4-.1-.3-.2-.6-.3-.9-.8-.1-1.9-.4-2.1-1-.1-.3 0-.6.3-.7 1.3-.4 2.2-1.2 2.7-2.3.2-.4.3-.7.2-.9-.1-.2-.5-.4-.8-.5C1.5 11.5 1 11.2 1 10.7c0-.6.6-.8 1-.8.4 0 1 .3 1.6.4.4 0 .6-.1.7-.3.1-.6.1-1.5.1-2.4.1-2.9 2-5.2 5-5.2h.6Z"/></svg>',
  kick: '<svg viewBox="0 0 24 24"><path d="M4 3h4.2v6.1L13.6 3h5.1l-6.9 7.9L19 21h-5.2l-4.8-6.6L8.2 16v5H4V3Z"/></svg>',
  link: '<svg viewBox="0 0 24 24"><path d="M10.6 13.4a4 4 0 0 0 6 .4l3-3a4 4 0 0 0-5.7-5.7l-1.7 1.6"/><path d="M13.4 10.6a4 4 0 0 0-6-.4l-3 3a4 4 0 0 0 5.7 5.7l1.6-1.6"/></svg>'
};

/* Edit this list to customize the page — add as many platforms as you like */
const LINKS = [
  { key: 'youtube',   name: 'يوتيوب',        handle: '@NGFQ1',      url: 'http://www.youtube.com/@NGFQ1' },
  { key: 'twitch',    name: 'تويتش',         handle: 'ngfr1',       url: 'https://www.twitch.tv/ngfr1?sr=a' },
  { key: 'x',         name: 'تويتر (X)',     handle: '@ngf51',      url: 'https://x.com/ngf51' },
  { key: 'instagram', name: 'إنستغرام',       handle: '@ngf7q',      url: 'https://www.instagram.com/ngf7q/' },
  { key: 'kick',      name: 'كيك',            handle: 'ngf-1',       url: 'https://kick.com/ngf-1' },
  { key: 'tiktok',    name: 'تيك توك',        handle: '@ngf',        url: '#' }
];

const goArrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>';

function renderLinks(){
  const container = document.getElementById('links-container');
  const frag = document.createDocumentFragment();

  LINKS.forEach((item, i) => {
    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.animationDelay = `${0.22 + i * 0.07}s`;

    card.innerHTML = `
      <span class="icon-wrap">${ICONS[item.key] || ICONS.link}</span>
      <span class="link-body">
        <p class="link-name">${item.name}</p>
        <p class="link-handle">${item.handle}</p>
      </span>
      <span class="link-go">${goArrow}</span>
    `;

    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--card-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--card-y', `${e.clientY - r.top}px`);
    });

    card.addEventListener('click', e => {
      const r = card.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(r.width, r.height) * 1.6;
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - r.left - size / 2}px`;
      ripple.style.top = `${e.clientY - r.top - size / 2}px`;
      card.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });

    frag.appendChild(card);
  });

  container.appendChild(frag);
}

/* ---------- typewriter subtitle ---------- */
function typewriter(){
  const el = document.getElementById('typewriter');
  const text = 'تابعني على جميع المنصات';
  let i = 0;
  const speed = 55;
  (function tick(){
    if (i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    } else {
      el.style.borderLeft = 'none';
    }
  })();
}

/* ---------- copy link button ---------- */
function initShareButton(){
  const btn = document.getElementById('share-btn');
  const label = document.getElementById('share-label');
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (err) {
      const ta = document.createElement('textarea');
      ta.value = window.location.href;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    btn.classList.add('copied');
    label.textContent = 'تم النسخ!';
    setTimeout(() => {
      btn.classList.remove('copied');
      label.textContent = 'نسخ رابط الصفحة';
    }, 1800);
  });
}

/* ---------- ambient particle field ---------- */
function initParticles(){
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles;
  const COUNT = 46;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function makeParticles(){
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.5 + 0.15
    }));
  }

  function step(){
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(167,139,250,${p.a})`;
      ctx.fill();
    });
    if (!reduceMotion) requestAnimationFrame(step);
  }

  resize();
  makeParticles();
  window.addEventListener('resize', () => { resize(); makeParticles(); });
  step();
}

/* ---------- PWA: service worker + install prompt ---------- */
function initPWA(){
  if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }

  const installBtn = document.getElementById('install-btn');
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
  });

  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
  });

  window.addEventListener('appinstalled', () => {
    installBtn.hidden = true;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderLinks();
  typewriter();
  initShareButton();
  initParticles();
  initPWA();
});
