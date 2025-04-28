export function setTheme(theme) {
    if (theme === "auto") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? "dark" : "light");
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
  
  export async function initializeTheme() {
    return new Promise((resolve) => {
      chrome.storage.local.get(["theme"], (result) => {
        const savedTheme = result.theme || "auto";
        setTheme(savedTheme);
        resolve(savedTheme);
      });
    });
  }
  