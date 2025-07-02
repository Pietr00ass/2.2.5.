(async () => {
  try {
    const url = chrome.runtime.getURL('config.json');
    const resp = await fetch(url);
    if (resp.ok) {
      window.__CONFIG = await resp.json();
    }
  } catch (e) {
    window.__CONFIG = window.__CONFIG || {};
  }
})();
