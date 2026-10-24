const startButton = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');
const windows = [...document.querySelectorAll('.window')];
const taskbarApps = document.getElementById('taskbar-apps');
const desktopIcons = [...document.querySelectorAll('.desktop-icon')];
const clock = document.getElementById('clock');

const appMeta = {
  computer: { label: 'My Computer', icon: true },
  documents: { label: 'Shared Documents', icon: true },
  music: { label: 'Music Library', icon: true },
  media: { label: 'Media Player', icon: true },
  control: { label: 'Control Panel', icon: true },
  internet: { label: 'Internet', icon: true },
  office: { label: 'Office', icon: true },
  explorer: { label: 'Explorer', icon: true },
  paint: { label: 'Paint', icon: true },
  settings: { label: 'Settings', icon: true },
  help: { label: 'Help & Support', icon: true },
};

const windowMap = new Map();

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  clock.textContent = time;
}

function getWindowElement(name) {
  return document.querySelector(`.window[data-window="${name}"]`);
}

function getTaskButton(name) {
  return taskbarApps.querySelector(`[data-task="${name}"]`);
}

function openWindow(name) {
  const windowEl = getWindowElement(name);
  if (!windowEl) return;

  windows.forEach((win) => {
    if (win === windowEl) {
      win.classList.add('active');
    } else {
      win.classList.remove('active');
    }
  });

  if (!getTaskButton(name)) {
    const taskButton = document.createElement('button');
    taskButton.className = 'task-pill';
    taskButton.dataset.task = name;
    taskButton.textContent = appMeta[name]?.label || 'App';
    taskButton.addEventListener('click', () => {
      openWindow(name);
    });
    taskbarApps.appendChild(taskButton);
  }

  windowMap.set(name, true);
  startMenu.classList.add('hidden');
}

function closeWindow(name) {
  const windowEl = getWindowElement(name);
  if (!windowEl) return;
  windowEl.classList.remove('active');

  const taskButton = getTaskButton(name);
  if (taskButton) taskButton.remove();
  windowMap.delete(name);
}

function bindWindowActions() {
  windows.forEach((windowEl) => {
    const name = windowEl.dataset.window;
    const closeButton = windowEl.querySelector('.close');
    const minimizeButton = windowEl.querySelector('.minimize');

    closeButton?.addEventListener('click', () => closeWindow(name));
    minimizeButton?.addEventListener('click', () => {
      windowEl.classList.remove('active');
      const taskButton = getTaskButton(name);
      if (taskButton) taskButton.style.opacity = '0.6';
    });

    const titleBar = windowEl.querySelector('.window-bar');
    if (titleBar) {
      let dragging = false;
      let offsetX = 0;
      let offsetY = 0;

      titleBar.addEventListener('mousedown', (event) => {
        if (event.target.closest('button')) return;
        dragging = true;
        const rect = windowEl.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
        windowEl.style.zIndex = String((windows.length + 1) * 10);
      });

      document.addEventListener('mousemove', (event) => {
        if (!dragging) return;
        const maxX = window.innerWidth - windowEl.offsetWidth;
        const maxY = window.innerHeight - windowEl.offsetHeight - 58;
        const nextX = Math.min(Math.max(event.clientX - offsetX, 0), maxX);
        const nextY = Math.min(Math.max(event.clientY - offsetY, 0), maxY);
        windowEl.style.left = `${nextX}px`;
        windowEl.style.top = `${nextY}px`;
      });

      document.addEventListener('mouseup', () => {
        dragging = false;
      });
    }
  });
}

startButton.addEventListener('click', () => {
  startMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  const clickedStart = event.target.closest('#start-button');
  const clickedInsideMenu = event.target.closest('#start-menu');
  if (!clickedStart && !clickedInsideMenu) {
    startMenu.classList.add('hidden');
  }
});

desktopIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const name = icon.dataset.window;
    openWindow(name);
  });
});

document.querySelectorAll('.start-app').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.window;
    openWindow(name);
  });
});

bindWindowActions();
updateClock();
setInterval(updateClock, 30000);

openWindow('music');
openWindow('documents');

const musicWindow = getWindowElement('music');
if (musicWindow) musicWindow.style.zIndex = '10';
const documentsWindow = getWindowElement('documents');
if (documentsWindow) documentsWindow.style.zIndex = '9';
const explorerWindow = getWindowElement('explorer');
if (explorerWindow) explorerWindow.style.zIndex = '8';

startMenu.classList.add('hidden');

window.addEventListener('load', () => {
  const initialTaskButtons = [...document.querySelectorAll('.task-pill')];
  initialTaskButtons.forEach((button) => button.remove());
  openWindow('music');
  openWindow('documents');
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    startMenu.classList.add('hidden');
  }
});

function ensureActiveTaskOrder() {
  const activeWindows = windows.filter((win) => win.classList.contains('active'));
  activeWindows.forEach((win, index) => {
    win.style.zIndex = String(100 + index);
  });
}

windows.forEach((win) => {
  win.addEventListener('click', () => {
    windows.forEach((w) => w.classList.remove('selected'));
    win.classList.add('selected');
    ensureActiveTaskOrder();
  });
});

setInterval(() => {
  const activeWindow = windows.find((win) => win.classList.contains('active'));
  if (activeWindow) {
    activeWindow.style.zIndex = String(200);
  }
}, 250);

setTimeout(() => {
  openWindow('music');
  openWindow('documents');
}, 150);
