# Wynn Al Marjan Island Registration

A modern, **multi-step multilingual registration web application** built with **React, TypeScript, Tailwind CSS, React Hook Form and i18next**.  
It provides a seamless UX for collecting user data with real-time validation (WIP), responsive layout, and integrated internationalization (English, Greek, Arabic).

This project uses **Vite** for fast development, **Husky + Linter + Prettier**, as well as import paths alias, sorting and separation for code quality, and supports future scalability with modular architecture.

---

## ✨ Features

✅ **Multi-step Registration Flow** with validation (WIP)  
✅ **Dynamic form rendering** driven by a configuration file (`formFields.ts`)  
✅ **Reusable components** (text inputs, checkboxes, dropdowns) aligned with design system  
✅ **Internationalization (i18next)** – English, Greek, Arabic  
✅ **Responsive layout** optimized for mobile, tablet, laptop & desktop  
✅ **Protected routes & step guards** to ensure correct navigation flow  
✅ **Modern UI with Tailwind CSS & SCSS**  
✅ **Code quality tools**: ESLint, Prettier, Husky pre-commit hooks  
✅ **Clean project structure** with modular organization for easy maintenance

---

## 🏗️ Tech Stack

- **React 19 + TypeScript**
- **React Hook Form** for form state & validation
- **i18next + react-i18next** for translations
- **Tailwind CSS + SCSS** for styling
- **React Router v7** for routing
- **Axios** for API integration
- **Vite** for blazing fast dev & build
- **Husky + Lint-Staged + Commitlint** for code quality enforcement

---

## 📂 Project Structure

```
.
├── public/               # Static assets (favicon.ico for now)
├── src/
│   ├── assets/           # SVGs, icons, images, fonts
│   ├── components/       # Reusable UI components
│   ├── constants/        # Shared constants (e.g. nav items or dynamic form fields)
│   ├── context/          # React Context (Auth, Form, Registration)
│   ├── hooks/            # Custom React hooks
│   ├── i18n/             # Translation files (en.json, el.json, ar.json)
│   ├── pages/            # Route-based pages (Welcome, Registration steps, Not found)
│   ├── routes/           # Route definitions & guards
│   ├── styles/           # Global SCSS/Tailwind overrides
│   ├── utils/            # Helpers & dynamic form configuration
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── eslint.config.js      # ESLint configuration
├── tailwind.config.js    # Tailwind config
├── vite.config.ts        # Vite config
└── package.json
```

This structure promotes **clean separation of concerns**, **scalability** and **easy maintenance**.

---

## ✅ Prerequisites

Before you start, ensure you have installed:

- **Node.js ≥ 18.x**
- **npm ≥ 9.x** (or `pnpm` / `yarn` if preferred)

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/liliangousiou/wynn-al-marjan-registration.git
cd wynn-al-marjan-registration
```

Install dependencies:

```**bash**
npm install
```

Run the development server:

```bash
npm run dev
```

Open **http://localhost:5173/** in your browser.

---

## 🔧 Available Scripts

### 💻 Development

- `npm run dev` → Start development server with hot reload
- `npm run build` → Type-check & build for production
- `npm run preview` → Preview the production build

### 🛠️ Code Quality & Formatting

- `npm run lint` → Run ESLint for code analysis
- `npm run lint:fix` → Auto-fix lint issues
- `npm run format` → Check formatting with Prettier
- `npm run format:fix` → Format code with Prettier

### ✅ Husky & Commit Hooks

This project uses **Husky** with pre-commit hooks to ensure clean code:

- **Pre-commit hook** runs `eslint` + `prettier`
- **Commitlint** enforces [Conventional Commit messages](https://www.conventionalcommits.org/)

Install hooks after cloning:

```bash
npm run prepare
```

---

## 🌍 Internationalization

This project supports **multi-language translations**:

- **English (`en`)**
- **Greek (`el`)**
- **Arabic (`ar`)**

Translation files are located in `src/i18n/`:

```
src/i18n/en.json
src/i18n/el.json
src/i18n/ar.json
```

The selected language is persisted in `localStorage` and updates the UI dynamically.

---

## 🛡️ Route Guards

- **ProtectedRoute** → Restricts access to authenticated users
- **StepGuardRoute** → Ensures users follow the correct registration step sequence

---

## 🧩 Dynamic Form Rendering

The registration form is fully **dynamic** based on `formFields.ts`:

- Supports multiple input types (`text`, `email`, `select`, `phone`, `checkbox`)
- Integrates with **React Hook Form** for validation
- Automatically applies translations for labels, placeholders, and errors

---

## 🖼️ UI/UX

- Fully **responsive**
- Designed to match **Figma styles**
- Custom UI, such as **header, footer, dropdowns, checkboxes, and inputs**
- Accessible & keyboard-friendly

---

## 🤝 Contributing

1. Fork the repository
2. Create a new feature branch (`feat/new-component`)
3. Commit your changes following **Conventional Commits**
4. Open a **Pull Request**

---

## License

This project was developed as part of a technical assessment for the **Wynn Al Marjan Island** IT Software Development team.  
It is intended solely for evaluation purposes and follows the provided design and requirements.  

All designs and visual assets are based on materials provided by **Wynn Al Marjan Island IT Software Development team**.  

## Contact

For any questions regarding this project, please contact:  

- **Wynn Al Marjan Island IT Department**  
- [https://www.wynnresorts.com/](https://www.wynnresorts.com/)  

---

✨ **Built with care using React, TypeScript & TailwindCSS.** ✨
