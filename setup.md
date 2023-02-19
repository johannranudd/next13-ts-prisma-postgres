1. `npx create-next-app@latest`

### tailwind

https://tailwindcss.com/docs/guides/nextjs 2. `npm install -D tailwindcss postcss autoprefixer` 3. `npx tailwindcss init -p`

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

https://tailwindcomponents.com/cheatsheet/

### prisma

https://railway.app/new
