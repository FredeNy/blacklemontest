/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        'Productbg': '#F6F6F5',
        'Buttonbg': '#BFABAB',
        'Textcolor': '#4D4D4D',
        'Detailcolor': '#9F938B',
        'White': '#FFFFFF',
      },
  },
  plugins: [],
};
