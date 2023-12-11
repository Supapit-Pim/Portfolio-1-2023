module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        img01: "url('./assets/01.png')",
        img02: "url('./assets/02.png')",
        img03: "url('./assets/03.png')",
        img04: "url('./assets/04.png')",
        img05: "url('./assets/05.png')",
        img06: "url('./assets/06.png')",
        img07: "url('./assets/07.png')",
        img08: "url('./assets/08.png')",
        img09: "url('./assets/09.png')",
        img10: "url('./assets/10.png')",
        img11: "url('./assets/11.png')",
        img12: "url('./assets/12.png')",
        img13: "url('./assets/13.png')",
        img14: "url('./assets/14.png')",
        img15: "url('./assets/15.png')",
      },
    },
  },
  plugins: [],
};
