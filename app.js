:root {
  --wallpaper-top: #3c4d6e;
  --wallpaper-mid: #c38e5b;
  --wallpaper-bottom: #f9d27f;
  --glass: rgba(255, 255, 255, 0.18);
  --glass-strong: rgba(255, 255, 255, 0.28);
  --panel: rgba(14, 19, 28, 0.45);
  --panel-strong: rgba(25, 30, 37, 0.6);
  --text: #f8fbff;
  --muted: rgba(255, 255, 255, 0.76);
  --taskbar: rgba(14, 17, 22, 0.64);
  --taskbar-border: rgba(255, 255, 255, 0.14);
  --outline: rgba(255, 255, 255, 0.18);
  --shadow: rgba(0, 0, 0, 0.22);
  --music-red: #9a0c12;
  --music-dark-red: #62070d;
  --soft-blue: #dfeeff;
  --icon-blue: #5ca9ff;
  --window-header: rgba(244, 245, 247, 0.68);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  height: 100%;
  font-family: "Segoe UI", sans-serif;
  color: var(--text);
  background: #000;
}

button,
input {
  font: inherit;
}

body {
  overflow: hidden;
}

.desktop {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(25, 33, 51, 0.22), rgba(18, 19, 27, 0.12)),
    linear-gradient(180deg, var(--wallpaper-top) 0%, var(--wallpaper-mid) 30%, var(--wallpaper-bottom) 100%);
}

.desktop::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 205, 120, 0.1), rgba(0, 0, 0, 0.18)),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
  opacity: 0.9;
  filter: saturate(0.9) contrast(1.08);
}

.desktop-icons,
.windows-layer,
.taskbar,
.start-menu {
  position: relative;
  z-index: 2;
}

.desktop-icons {
  position: absolute;
  left: 30px;
  top: 36px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.desktop-icon {
  width: 96px;
  background: transparent;
  border: none;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-shadow: 0 1px 2px rgba(0,0,0,0.6);
  padding: 0;
}

.desktop-icon .label {
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
}

.icon {
  width: 42px;
  height: 42px;
  display: block;
  border-radius: 12px;
  position: relative;
  background: linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
  box-shadow: 0 8px 18px rgba(0,0,0,0.14);
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
}

.icon.computer::before {
  inset: 7px 9px 11px 9px;
  border-radius: 8px;
  background: linear-gradient(180deg, #8ea3ba, #c4d0dc);
  box-shadow: inset 0 0 0 2px rgba(40,46,54,0.8);
}

.icon.computer::after {
  left: 17px;
  right: 17px;
  bottom: 7px;
  height: 7px;
  border-radius: 0 0 10px 10px;
  background: linear-gradient(180deg, #7a8393, #5b6170);
}

.icon.documents::before {
  left: 12px; right: 12px; top: 8px; bottom: 10px;
  background: linear-gradient(180deg, #f6f7f8, #dfe7f1);
  border-radius: 4px;
  box-shadow: inset 0 0 0 2px rgba(48,62,80,0.35);
}

.icon.documents::after {
  left: 17px; top: 14px; width: 14px; height: 2px; background: #9eadc9; box-shadow: 0 8px 0 #9eadc9, 0 16px 0 #9eadc9;
}

.icon.music::before {
  left: 10px; right: 10px; top: 10px; bottom: 10px;
  background: linear-gradient(135deg, #f8d687, #b55a2a);
  border-radius: 50%;
}

.icon.music::after {
  width: 10px; height: 18px; left: 16px; top: 13px; border-radius: 6px; background: #f3f3f3; box-shadow: 13px 0 0 #f3f3f3;
}

.icon.media::before {
  left: 8px; right: 8px; top: 11px; bottom: 11px; border-radius: 6px; background: linear-gradient(180deg, #a3d0ff, #366db8);
}

.icon.media::after {
  left: 15px; top: 17px; width: 0; height: 0; border-left: 10px solid #f5fbff; border-top: 7px solid transparent; border-bottom: 7px solid transparent;
}

.start-menu {
  position: absolute;
  left: 8px;
  bottom: 58px;
  width: 450px;
  min-height: 300px;
  background: linear-gradient(180deg, rgba(215,220,225,0.82), rgba(175,184,196,0.7));
  border: 1px solid rgba(245, 247, 250, 0.7);
  box-shadow: 0 20px 36px rgba(0,0,0,0.18);
  border-radius: 4px 12px 12px 12px;
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.start-menu.hidden {
  display: none;
}

.start-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 18px 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08));
  border-bottom: 1px solid rgba(255,255,255,0.26);
}

.user-badge {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(180deg, #dfe8f7, #7a8ca9);
  border: 2px solid rgba(255,255,255,0.55);
  display: grid;
  place-items: center;
  color: #2e3d57;
  font-weight: 700;
  font-size: 22px;
}

.start-title {
  font-size: 18px;
  color: #1c293a;
  font-weight: 600;
}

.start-subtitle {
  margin-top: 2px;
  color: rgba(29,40,52,0.7);
  font-size: 11px;
}

.start-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 18px 16px 0;
}

.program-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.start-app {
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  color: #1d2d3f;
  font-size: 13px;
  text-align: left;
  padding: 6px 4px;
  cursor: pointer;
}

.mini-icon {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 5px;
  background: linear-gradient(135deg, #f4f8ff, #d7d9e5);
  position: relative;
}

.computer-mini::before,
.docs-mini::before,
.music-mini::before,
.media-mini::before,
.control-mini::before,
.internet-mini::before,
.office-mini::before,
.explorer-mini::before,
.paint-mini::before,
.settings-mini::before,
.help-mini::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 4px;
  background: rgba(34, 77, 118, 0.8);
}

.music-mini::before { background: linear-gradient(135deg, #e36f2c, #7b1b0f); }
.media-mini::before { background: linear-gradient(180deg, #4fb2ff, #2d5fbe); }
.help-mini::before { background: linear-gradient(180deg, #7cc7ff, #2c87f4); }
.paint-mini::before { background: linear-gradient(135deg, #57c4ff, #d364d9); }
.office-mini::before { background: linear-gradient(180deg, #fff, #d8dfe8); }
.explorer-mini::before { background: linear-gradient(180deg, #34b29a, #2d7f90); }
.settings-mini::before { background: linear-gradient(180deg, #e3bbc7, #5f8092); }

.start-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px 16px 18px;
  border-top: 1px solid rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.12);
}

.power-btn {
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.28);
  color: #1a2e42;
  border-radius: 3px;
  padding: 6px 12px;
  cursor: pointer;
}

.windows-layer {
  position: absolute;
  inset: 0;
}

.window {
  position: absolute;
  display: none;
  width: 720px;
  height: 440px;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 14px 14px 10px 10px;
  overflow: hidden;
  box-shadow: 0 20px 42px rgba(0,0,0,0.28);
  background: rgba(245,245,245,0.85);
  backdrop-filter: blur(6px);
}

.window.active {
  display: block;
}

.window[data-window="music"] {
  left: 26%;
  top: 12%;
  width: min(760px, 52vw);
  height: 520px;
}

.window[data-window="explorer"] {
  left: 20%;
  top: 20%;
  width: min(820px, 56vw);
  height: 430px;
}

.window[data-window="documents"] {
  left: 45%;
  top: 18%;
  width: min(620px, 44vw);
  height: 360px;
}

.window-bar {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(201,206,214,0.68));
  border-bottom: 1px solid rgba(104,109,116,0.35);
  color: #1d2733;
}

.window-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
}

.tiny-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: linear-gradient(180deg, #78d08f, #557d57);
  display: inline-block;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.7);
}

.window-controls {
  display: flex;
  align-items: center;
  gap: 4px;
}

.title-btn {
  border: 1px solid rgba(76,82,90,0.3);
  border-radius: 3px;
  background: rgba(255,255,255,0.16);
  color: #24313d;
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-weight: 700;
  padding: 0;
}

.music-shell {
  height: calc(100% - 30px);
  background: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
}

.music-header {
  background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06));
  padding: 18px 18px 12px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.music-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
  text-transform: lowercase;
}

.brand-mark {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #f6edcf, #7dc7a0 48%, #1c2f34 100%);
}

.music-actions {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.music-actions button {
  border: none;
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.9);
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.music-main {
  display: grid;
  grid-template-columns: 220px 1fr;
  height: calc(100% - 120px);
  background: linear-gradient(180deg, #bb1d2a 0%, #8d0915 100%);
}

.music-sidebar {
  background: rgba(255,255,255,0.06);
  border-right: 1px solid rgba(255,255,255,0.08);
  padding: 18px 16px 10px;
  color: #f5f6fb;
}

.album-count {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 14px;
}

.big-number {
  font-size: 52px;
  line-height: 1;
  font-weight: 700;
}

.small-text {
  font-size: 14px;
  opacity: 0.85;
}

.music-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: rgba(255,255,255,0.9);
}

.music-sidebar li {
  padding: 6px 8px;
  border-radius: 4px;
}

.filter-box {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: rgba(255,255,255,0.8);
  font-size: 12px;
  margin-top: 10px;
}

.filter-box input {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.1);
  color: white;
}

.years {
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  color: rgba(255,255,255,0.8);
  font-size: 11px;
}

.music-grid-wrap {
  padding: 18px 18px 10px;
}

.music-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(82px, 1fr));
  gap: 16px 18px;
  height: 100%;
}

.album {
  min-height: 86px;
  border-radius: 8px;
  color: #fefdfd;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 10px 8px;
  font-size: 12px;
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(0,0,0,0.06));
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12);
}

.art-one { background: linear-gradient(180deg, #4a4d7d, #191d3b); }
.art-two { background: linear-gradient(180deg, #d6a569, #954b33); }
.art-three { background: linear-gradient(180deg, #e6e0a0, #bc8b2f); }
.art-four { background: linear-gradient(180deg, #8f7fa7, #4d3c6a); }
.art-five { background: linear-gradient(180deg, #de9a7d, #7d4630); }
.art-six { background: linear-gradient(180deg, #6fa9d1, #2e5f8a); }
.art-seven { background: linear-gradient(180deg, #d7cfad, #79745d); }
.art-eight { background: linear-gradient(180deg, #c7d6de, #586a72); }
.art-nine { background: linear-gradient(180deg, #ab6d5b, #59312f); }
.art-ten { background: linear-gradient(180deg, #f2d9a5, #a87034); }
.art-eleven { background: linear-gradient(180deg, #7186bf, #38466f); }
.art-twelve { background: linear-gradient(180deg, #c7dcc9, #54715f); }

.explorer-shell {
  background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.07));
  min-height: 100%;
  color: #28364b;
}

.explorer-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(35,44,59,0.2);
  background: rgba(255,255,255,0.12);
}

.crumbs {
  font-size: 13px;
  font-weight: 600;
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.toolbar-actions button,
.tiny-actions button {
  border: 1px solid rgba(70,82,94,0.22);
  background: rgba(255,255,255,0.36);
  color: #23364d;
  border-radius: 3px;
  padding: 5px 8px;
  cursor: pointer;
}

.explorer-main {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: calc(100% - 46px);
}

.folder-panel {
  background: linear-gradient(180deg, rgba(235,239,244,0.86), rgba(220,225,231,0.72));
  border-right: 1px solid rgba(40,54,74,0.18);
  padding: 16px 12px;
}

.folder-panel h4 {
  margin: 0 0 12px;
  font-size: 14px;
  color: #2d3d52;
}

.folder-panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #465c78;
  font-size: 13px;
}

.folder-view {
  padding: 16px;
}

.top-meta {
  display: flex;
  justify-content: space-between;
  color: #344b60;
  font-size: 13px;
  margin-bottom: 12px;
}

.file-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 16px 18px;
}

.file-card {
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(63,76,92,0.1);
  border-radius: 8px;
  padding: 14px 10px 10px;
  text-align: center;
  color: #2d3a4e;
  font-size: 12px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.file-icon,
.row-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-block;
  background: linear-gradient(180deg, #edf4ff, #d9e5f7);
  position: relative;
}

.file-icon::before,
.row-icon::before {
  content: "";
  position: absolute;
  left: 9px; top: 7px; width: 14px; height: 14px; background: rgba(63,112,177,0.8); border-radius: 4px;
}

.file-icon.pdf::before { background: #ea3d3d; }
.file-icon.doc::before { background: #3d76e6; }
.file-icon.img::before { background: #5ba760; }
.file-icon.mp3::before { background: #f1ab4d; }
.file-icon.zip::before { background: #b2a8ff; }
.file-icon.ppt::before { background: #ef8a55; }

.docs-shell {
  height: calc(100% - 30px);
  background: linear-gradient(180deg, rgba(242,244,247,0.15), rgba(255,255,255,0.07));
  color: #21324a;
}

.docs-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(35,44,59,0.18);
  background: rgba(255,255,255,0.12);
}

.title-group {
  font-weight: 600;
}

.docs-content {
  display: grid;
  grid-template-columns: 180px 1fr;
  height: calc(100% - 42px);
}

.docs-sidebar {
  background: linear-gradient(180deg, rgba(225,229,235,0.8), rgba(202,207,215,0.7));
  border-right: 1px solid rgba(27,38,50,0.12);
  padding: 14px 12px;
}

.docs-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #405b74;
  font-size: 13px;
}

.docs-sidebar li.active {
  color: #16273b;
  font-weight: 600;
}

.docs-pane {
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.file-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(40,59,74,0.1);
  border-radius: 7px;
  padding: 10px 12px;
}

.taskbar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 58px;
  background: linear-gradient(180deg, rgba(31,40,52,0.7), rgba(8,12,20,0.78));
  border-top: 1px solid var(--taskbar-border);
  display: flex;
  align-items: center;
  padding: 0 12px 0 8px;
  backdrop-filter: blur(10px);
}

.start-button {
  height: 42px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 6px 6px 0 0;
  background: linear-gradient(180deg, rgba(118,201,255,0.28), rgba(38,90,130,0.16));
  color: white;
  font-weight: 600;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.16);
}

.button-logo {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(180deg, #fff, #7e8c9d);
  position: relative;
}

.button-logo::before {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: linear-gradient(180deg, #6bb0ff, #1f4d82);
}

.taskbar-apps {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 10px;
}

.taskbar-app .task-pill {
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.1);
  color: white;
  border-radius: 5px;
  padding: 7px 12px;
  min-width: 110px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
}

.taskbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.92);
  font-size: 12px;
}

.lang-pill {
  padding: 4px 7px;
  border-radius: 4px;
  background: rgba(255,255,255,0.1);
}

.clock {
  min-width: 72px;
  text-align: right;
}

@media (max-width: 980px) {
  .window[data-window="music"],
  .window[data-window="explorer"],
  .window[data-window="documents"] {
    width: calc(100vw - 40px);
    left: 20px;
    right: 20px;
    top: 18%;
  }

  .music-main,
  .explorer-main,
  .docs-content {
    grid-template-columns: 1fr;
  }

  .music-grid {
    grid-template-columns: repeat(2, minmax(80px, 1fr));
  }

  .file-grid {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  .start-menu {
    width: min(90vw, 420px);
  }
}
