/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      fontSize: {
        'heading1-bold': [
          '36px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'heading1-semibold': [
          '36px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'heading2-bold': [
          '30px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'heading2-semibold': [
          '30px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'heading3-bold': [
          '24px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'heading4-medium': [
          '20px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'body-bold': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'body-semibold': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'body-medium': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'body-normal': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
        'body1-bold': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'base-regular': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
        'base-medium': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'base-semibold': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'base1-semibold': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'small-regular': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
        'small-medium': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'small-semibold': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'subtle-medium': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '500',
          },
        ],
        'subtle-semibold': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '600',
          },
        ],
        'tiny-medium': [
          '10px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'x-small-semibold': [
          '7px',
          {
            lineHeight: '9.318px',
            fontWeight: '600',
          },
        ],
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        fadeOut: 'fadeOut 0.7s ease-out forwards',
      },
      height: {
        'screen-85': '85vh',
      },
      colors: {
        black: '#000',
        antiquewhite: {
          100: '#ffebd9',
          200: '#e6d1bf',
        },
        firebrick: '#c00c00',
        white: '#fff',
        lightcoral: '#ff8d8f',
        blanchedalmond: '#ffebc5',
        tomato: '#e63326',
        'dark-1': '#000000',
        'dark-2': '#121417',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
        'gray-1': '#697C89',
        glassmorphism: 'rgba(16, 16, 18, 0.60)',
      },
      borderRadius: {
        '29xl': '48px',
        '61xl': '80px',
      },
    },
  },
  plugins: [],
};
