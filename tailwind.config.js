/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 检查这一行是否漏掉了！
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}