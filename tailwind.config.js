/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'gradient-blue-black': '0 4px 10px rgba(100,100,100,0.7), 0 6px 20px rgba(0,0,0,0.8)',
        
        'custom-light': `4px 4px 10px
                        rgba(0, 0, 0, 0.1)`,
        'custom-dark': `6px 6px 15px
                        rgba(0, 0, 0, 0.3)`,
        'custom-color': '5px 5px 20px rgba(99, 102, 241, 0.7), 5px 5px 30px rgba(139, 92, 246, 0.7), 5px 5px 40px rgba(236, 72, 153, 0.7)',
    },
    },
  },
  plugins: [],
}

