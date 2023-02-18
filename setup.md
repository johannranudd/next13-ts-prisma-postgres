1. `npx create-next-app@latest`
2. `npm install -D tailwindcss postcss autoprefixer`
3. `npx tailwindcss init -p`

```
<!-- tailwind config -->

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

```
