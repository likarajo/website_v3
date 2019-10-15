module.exports = {
  siteTitle: 'Rajarshi Chattopadhyay',
  siteDescription:
    'Rajarshi Chattopadhyay | Personal website',
  siteKeywords:
    'Rajarshi Chattopadhyay, Rajarshi, Chattopadhyay, likarajo, software engineer, back-end engineer, web developer, utdallas',
  siteUrl: 'https://likarajo.github.io/website_new',
  siteLanguage: 'en_US',
  googleVerification: 'u9_JcggcR-SFxiwtd_McOsm1FEIrfXhIKZOvANZflnY',
  googleAnalyticsID: 'UA-105786857-1',
  name: 'Rajarshi Chattopadhyay',
  location: 'Milpitas, CA',
  email: 'likarajo@gmail.com',
  github: 'https://github.com/likarajo',
  twitterHandle: '@likarajo',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/likarajo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/likarajo',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/likarajo',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/likarajo',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
