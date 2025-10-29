# Contributing to nuxt-ollama

Thank you for taking the time to contribute — we’re excited to collaborate with you! This project aims to be welcoming, kind, and inclusive. Whether you’re fixing a typo, filing a bug, improving docs, or adding features, your help is appreciated.

## 💛 Our guiding principles
- Be kind and respectful. Assume positive intent.
- Value all contributions, big and small.
- Communicate clearly and empathetically. Prefer constructive feedback.
- Be inclusive: use welcoming, gender‑neutral language and avoid sarcasm.
- Celebrate learning. It’s okay to ask questions and to make mistakes.

We follow a simple Code of Conduct: no harassment, no discrimination, no personal attacks. If something makes you uncomfortable, please open a private issue or contact a maintainer.

## 🧭 Ways to contribute
- Report bugs
- Suggest enhancements
- Improve documentation or examples
- Write tests
- Implement features (discuss first if non-trivial)

## 🐞 Bug reports
Please include:
- What happened and what you expected instead
- Steps to reproduce (minimal repro if possible)
- Environment: Node.js version, pnpm version, OS, Nuxt version
- Logs or screenshots when relevant

Create a new issue and label it clearly. If you can, propose a hypothesis or a failing test.

## 💡 Feature requests
Before starting work, open an issue to discuss:
- The problem you’re solving and motivation
- Proposed API/behavior (simple examples help)
- Alternatives considered

We aim to keep the module simple and focused.

## 🛠️ Local development
This repository is a Nuxt module with a playground for testing.

Prerequisites:
- Node.js (project uses Volta pin: 24.11.0)
- pnpm (packageManager: pnpm@10.20.0)

Common tasks:
- Prepare module and playground
  - pnpm run dev:prepare
- Run the playground dev server
  - pnpm run dev
- Lint
  - pnpm run lint
- Type-check
  - pnpm run test:types
- Tests (Vitest)
  - pnpm run test

Tip: If you add a new public option or server/composable utility, also update the types in `src/runtime/types/` as needed and add an example usage in `playground/`.

## 🧪 Tests
- Add or update tests for behavior changes.
- For fixes, consider writing a failing test first.
- Keep tests fast and focused; prefer unit tests when possible.

## ✏️ Code style
- Follow the existing ESLint and TypeScript setup (run `pnpm run lint` and `pnpm run test:types`).
- Prefer small, focused PRs over large ones.
- Keep public APIs documented (JSDoc or README snippets).

## 🧾 Commit messages
We recommend Conventional Commits for clarity and changelog generation, for example:
- feat: add XYZ option to runtime config
- fix: handle missing model name in server util
- docs: clarify playground setup
- test: add unit tests for useOllama composable
- refactor: simplify error handling

Prefix with `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, etc. Use imperative mood and keep the subject short.

## 🌿 Branching and PRs
- Create a topic branch from `master` (e.g. `feat/xyz`, `fix/edge-case`).
- Keep PRs focused and include a short description of the change and motivation.
- Checklist before opening a PR:
  - [ ] Lint passes (`pnpm run lint`)
  - [ ] Types pass (`pnpm run test:types`)
  - [ ] Tests pass (`pnpm run test`)
  - [ ] Docs updated (README/inline comments/playground if relevant)

We’ll review kindly and promptly. If changes are requested, they’re meant to help — we’re on the same team.

## 🔐 Security
If you discover a vulnerability, please do not open a public issue. Instead, contact a maintainer privately so we can coordinate a fix.

## 📜 License and attribution
By contributing, you agree that your contributions will be licensed under the MIT License of this repository.

## 🙏 Thank you
Your time and energy make this project better for everyone. We’re grateful you’re here — welcome! ❤️
