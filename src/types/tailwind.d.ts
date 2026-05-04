import {} from 'tailwindcss';

declare module 'tailwindcss' {
  interface CustomThemeConfig {
    colors: {
      'gray-100': '#1F2523';
      'gray-200': '#4D5C57';
      'gray-300': '#CDD5D2';
      'gray-400': '#E4ECE9';
      'gray-500': '#F9FBFA';
      'white': '#FFFFFF';
      'green-100': '#1F8459';
      'green-200': '#2CB178';
    };
  }
}