const theme = {
  colors: {
    dark: '#000007',
    darkestNavy: '#01050b',
    darkNavy_o: '#020c1b',
    darkNavy: '#b2a3ff',
    navy_o: '#0a192f',
    navy: '#c1b1ff',
    lightNavy: '#172a45',
    darkGrey: '#333f58',
    mediumGrey: '#2d3952',
    grey: '#4c5772',
    lightGrey: '#606a86',
    slate_o: '#8892b0',
    slate: '#303146',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    offWhite: '#dce7ff',
    white: '#e6f1ff',
    pink: '#FF647F',
    yellow: '#FFC464',
    orange: '#FF9E64',
    green_o: '#64ffda',
    green: '#a31a5a',
    blue: '#71AFFF',
    darkBlue: '#1D7FFC',
    highlight: 'rgba(41, 61, 90, 0.99)',
    transGreen_o: 'rgba(100, 255, 218, 0.07)',
    transGreen: 'rgba(200,146,169,0.51)',
    transNavy: 'rgba(10, 25, 47, 0.7)',
    shadowNavy: 'rgb(44,19,87)',
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
