# MetaSearch Chrome Extension

> 🔥 Query ChatGPT (OpenAI), Claude (Anthropic), and Gemini (Google) **simultaneously** from any webpage with **MetaSearch**.  
> Highlight, search, or type — instantly compare responses across top AI models.

---

## 🚀 Features

- Highlight text and right-click **➔ Query with MetaSearch**.
- **Multi-LLM Querying**: ChatGPT, Claude, and Gemini side-by-side.
- **Custom Model Selection**: Choose between GPT-4o, Claude 3 Haiku, Gemini 1.5 Pro, and more.
- **Dynamic Theme Switching**: Light Mode / Dark Mode / Auto (System Default).
- **Instant Live Loading and Switching**: No page reloads needed.
- **API Key Management**: Bring your own keys securely stored in Chrome.
- **Open Source** — Extend, fork, contribute!

---

## 📥 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mobilegenix/metasearch-extension.git
   cd metasearch-extension

2. **Install Dependancies**
   ```bash
   npm install

3. **Build the Project**
   ```bash
   npm run build

4. **Load into Chrome**
- Open ```Chrome://extensions
- Enable **Developer mode**
- Click **Load unpacked**
- Select the ```/dist

5. **Configure Settings** 
- Open MetaSearch popup
- Enter your API keys and select models
- Choose your preferred theme

6. **Start MetaSearching!** 🚀

----

## 📁 Project Structure

metasearch-extension/
├── manifest.json
├── background.js
├── content.js
├── popup/
│   ├── public/index.html
│   └── src/
│       ├── App.jsx
│       ├── index.jsx
│       ├── components/
│       │   ├── LLMResponseCard.jsx
│       │   ├── Spinner.jsx
│       │   └── ThemeToggle.jsx
│       ├── api/
│       │   └── queryLLMs.js
│       └── styles/
│           ├── popup.css
│           ├── theme.css
│           └── Spinner.css
├── options/
│   ├── public/index.html
│   └── src/
│       ├── Options.jsx
│       ├── index.jsx
│       └── styles/options.css
├── utils/
│   └── theme.js
├── icons/
│   └── icon.png
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
├── package.json
└── vite.config.js

---

## 🧠 Roadmap

 - [x] Query ChatGPT, Claude, and Gemini simultaneously
 - [x] Dynamic API key and model management
 - [x] Light/Dark/Auto theme support
 - [x] Live theme switching
 - [ ] Add Query History
 - [ ] Add animated theme toggle (icons 🌙 ☀️ 🌓)
 - [ ] Extend support to Groq, Perplexity, Mistral AI
 - [ ] Export query results (Markdown, CSV)

 ---

 ## 🤝 Contributing
We welcome contributors!
Please check CONTRIBUTING.md for guidelines.

---

## 🛡 License
This project is licensed under the MIT License.