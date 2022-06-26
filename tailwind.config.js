/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      backgroundImage: {
        image1:
          "linear-gradient(to bottom right, rgba(21, 45, 30,0.4), rgba(21, 45, 30,0.4)), url('/src/assets/image1.png')",
        image3:
          "linear-gradient(to bottom right, rgba(21, 45, 30,0.7), rgba(21, 45, 30,0.7)), url('/src/assets/image3.png')",
        image4:
          "linear-gradient(to bottom right, rgba(114, 44, 17, 0.4), rgba(114, 44, 17, 0.4)), url('/src/assets/hotels/Rectangle 30.png')",
        image5:
          "linear-gradient(to bottom right, rgba(21, 45, 30, 0.5), rgba(21, 45, 30, 0.5)), url('/src/assets/facilites/Rectangle 50.png')",
      },
    },
  },
  plugins: [],
};
