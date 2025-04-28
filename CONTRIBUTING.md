# Contributing to MetaSearch

First off, thank you for considering contributing to MetaSearch!  
Your ideas, fixes, features, and feedback are extremely welcome.

---

## How to Contribute

1. **Fork** the repository.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/metasearch-extension.git
   cd metasearch-extension

3. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name

4. Commit your changes clearly:
   ```bash
   git commit -m "feat: add your feature"

5. Push to your forked repository:
   ```bash
   git push origin feature/your-feature-name

6. Open a Pull Request:
- Describe your changes.
- Link related issues if any.
- Add screenshots if it affects UI.

---

## Good First Issues

Here are some good starting points:

- [ ] Add Query History tab
- [ ] Dark Mode Enhancements
- [ ] Groq / Mistral model integration
- [ ] Animated Theme Toggle with Icons

---

## Code Guidelines

- Use React functional components.
- Follow Vite + React project structure.
- Keep components modular (small and reusable).
- CSS Variables are used for light/dark theme — no hardcoded colors.

---

## Development Setup

   ```bash
   npm install
   npm run dev     # Development server
   npm run build   # Production build into /dist/
```

Then load ```/dist``` in ```chrome://extensions``` (Developer Mode).

---

## Reporting Bugs or Suggesting Features

Please open an issue with:

- Clear description of the problem/idea
- Steps to reproduce (if a bug)
- Suggested enhancement (if a feature)

---

## Code of Conduct

Please be respectful and welcoming to all contributors.
Let's build something awesome together!

Thank you again for helping make MetaSearch even better! 🚀
