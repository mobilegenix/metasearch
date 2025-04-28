import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle"; // <-- import if you want a theme toggle in the options page
import { initializeTheme } from "./utils/theme"; // <-- import if you want a theme toggle in the options page
import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import { createRoot } from "react-dom/client";
import "../styles/options.css";
import { setTheme } from "../../popup/src/utils/theme"; // <-- import if you want live preview on settings change

function Options() {
  const [apiKeys, setApiKeys] = useState({
    openai: "",
    anthropic: "",
    gemini: ""
  });

  const [models, setModels] = useState({
    openaiModel: "gpt-4o",
    anthropicModel: "claude-3-sonnet-20240229",
    geminiModel: "gemini-1.5-pro"
  });

  const [theme, setThemeSetting] = useState("auto");

  useEffect(() => {
    chrome.storage.local.get(["apiKeys", "models", "theme"], (result) => {
      if (result.apiKeys) {
        setApiKeys(result.apiKeys);
      }
      if (result.models) {
        setModels(result.models);
      }
      if (result.theme) {
        setThemeSetting(result.theme);
        setTheme(result.theme); // Apply theme live when settings page loads
      }
    });
  }, []);

  const saveSettings = () => {
    chrome.storage.local.set({
      apiKeys,
      models,
      theme: theme
    });
    setTheme(theme); // Live preview immediately
    alert("Settings saved!");
  };

  return (
    <div className="options-container">
      <h1>MetaSearch Settings</h1>

      <label>OpenAI API Key</label>
      <input
        type="text"
        value={apiKeys.openai}
        onChange={(e) => setApiKeys({ ...apiKeys, openai: e.target.value })}
      />

      <label>Anthropic API Key</label>
      <input
        type="text"
        value={apiKeys.anthropic}
        onChange={(e) => setApiKeys({ ...apiKeys, anthropic: e.target.value })}
      />

      <label>Gemini API Key</label>
      <input
        type="text"
        value={apiKeys.gemini}
        onChange={(e) => setApiKeys({ ...apiKeys, gemini: e.target.value })}
      />

      <h2>Model Selection</h2>

      <label>OpenAI Model</label>
      <select
        value={models.openaiModel}
        onChange={(e) => setModels({ ...models, openaiModel: e.target.value })}
      >
        <option value="gpt-4o">gpt-4o</option>
        <option value="gpt-4">gpt-4</option>
        <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
      </select>

      <label>Anthropic Model</label>
      <select
        value={models.anthropicModel}
        onChange={(e) => setModels({ ...models, anthropicModel: e.target.value })}
      >
        <option value="claude-3-haiku-20240307">Claude 3 Haiku</option>
        <option value="claude-3-sonnet-20240229">Claude 3 Sonnet</option>
        <option value="claude-3-opus-20240229">Claude 3 Opus</option>
      </select>

      <label>Gemini Model</label>
      <select
        value={models.geminiModel}
        onChange={(e) => setModels({ ...models, geminiModel: e.target.value })}
      >
        <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
        <option value="gemini-pro">Gemini Pro</option>
      </select>

      <h2>Theme Selection</h2>

      <label>Theme</label>
      <select
        value={theme}
        onChange={(e) => setThemeSetting(e.target.value)}
      >
        <option value="auto">Auto (System Default)</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}

export default Options;
