MetaSearch Chrome Extension

🔥 Query ChatGPT (OpenAI), Claude (Anthropic), and Gemini (Google) simultaneously from any webpage with MetaSearch.
Highlight, search, or type — instantly compare responses across top AI models.
🚀 Features

Highlight text on any page and right-click ➔ Query with MetaSearch.
Or open the extension popup and type your own prompt.
Simultaneously query:
ChatGPT (OpenAI)
Claude (Anthropic)
Gemini (Google)
Bring your own API keys — no limits.
Custom model selections:
Pick between GPT-4o, Claude 3 Haiku, Gemini 1.5 Pro, and more.
Toggle which LLMs you want to query.
Smooth loading animations and smart error handling.
Fully Open Source — fork it, extend it, contribute!
🛠 Installation

Clone the Repository
git clone https://github.com/mobilegenix/metasearch-extension.git
cd metasearch-extension
Install dependencies
npm install
Build the project
npm run build
Load into Chrome
Open chrome://extensions
Enable Developer mode
Click Load unpacked
Select the /dist folder
Configure Settings
Open the extension popup
Click Settings
Enter your OpenAI, Anthropic, and Gemini API keys
Choose your preferred models
Start MetaSearching! 🚀
📁 Project Structure

metasearch-extension/
├── manifest.json
├── background.js
├── content.js
├── popup/
│   └── public/index.html
│   └── src/
│       ├── App.jsx
│       ├── index.jsx
│       ├── api/queryLLMs.js
│       ├── components/
│       │   ├── LLMResponseCard.jsx
│       │   └── Spinner.jsx
│       └── styles/
├── options/
│   └── public/index.html
│   └── src/
│       ├── Options.jsx
│       ├── index.jsx
│       └── styles/options.css
├── icons/
├── package.json
├── vite.config.js
└── README.md

🧠 Roadmap

 Core functionality: query multiple LLMs
 Dynamic API key and model saving
 Per-LLM toggle selection
 Spinner animation and better UX
 Query history page (coming soon)
 Dark mode popup UI
 Add additional models (Groq, Mistral, Perplexity)

🤝 Contributing

Contributions are welcome and encouraged!
Feel free to open issues, submit pull requests, or suggest ideas.

Fork the project
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to your branch (git push origin feature/amazing-feature)
Open a Pull Request

🛡 License

This project is licensed under the MIT License.

🧡 Acknowledgments

OpenAI
Anthropic
Google Gemini
Thanks to the entire open source AI community for continuous innovation and inspiration!
