/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors: {
      'gptbgd' : '#202123',
      'gptbgl' : '#343542',
      'offwhite' : '#ececf2',
      'gptgreen' : '#13b78a',
      'gptlight' : '#ececf1',

    }
    },
  },
  plugins: [],
}
