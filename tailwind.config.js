// tailwind.config.js
module.exports = {
    darkMode: 'class', // or 'media'
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#0f172a',
          secondary: '#1e293b',
          accent: '#3b82f6',
          muted: '#64748b',
        },
      },
    },
    plugins: [],
  };
  