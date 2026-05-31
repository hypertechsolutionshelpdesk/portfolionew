/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // color used in the project
      colors: {
        primary: "#272727",
        secondary: "#346287",
        background: "#fbfbfb",
        white: "#fbfbfb",
        //  primary: "#f6a64f",
        // secondary: "#b56141",
        // background: "#fffcf8",
        // white: "#fbfbfb",
        // #212129  #fffcf8 #bdcaf8 #fffcf8

      },

      backgroundImage: {
        //"gradient-primary": "linear-gradient(to right, #f4a44f, #ac573f)",
        "gradient-primary": "linear-gradient(to right, #001D26, #212129)",
      },
    },
  },
  plugins: [],
}

