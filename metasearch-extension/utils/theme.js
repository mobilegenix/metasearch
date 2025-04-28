let systemThemeListener = null;

// Apply the given theme
export function setTheme(theme) {
  if (theme === "auto") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? "dark" : "light");

    // Add system preference listener
    if (!systemThemeListener) {
      systemThemeListener = window.matchMedia("(prefers-color-scheme: dark)");
      systemThemeListener.addEventListener("change", (e) => {
        document.documentElement.setAttribute('data-theme', e.matches ? "dark" : "light");
      });
    }
  } else {
    document.documentElement.setAttribute('data-theme', theme);

    // If user manually sets theme, remove system listener
    if (systemThemeListener) {
      systemThemeListener.removeEventListener("change", handleSystemThemeChange);
      systemThemeListener = null;
    }
  }
}

// Initialize theme on app startup
export async function initializeTheme() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["theme"], (result) => {
      const savedTheme = result.theme || "auto";
      setTheme(savedTheme);
      resolve(savedTheme);
    });
  });
}

// Internal handler for live system theme changes
function handleSystemThemeChange(e) {
  document.documentElement.setAttribute('data-theme', e.matches ? "dark" : "light");
}
