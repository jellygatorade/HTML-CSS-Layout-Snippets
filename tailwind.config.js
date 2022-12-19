module.exports = {
  content: ["./examples/*.{html,js}", "./examples/**/*.{html,js}"],
  theme: {
    fontFamily: {
      RobotoThin: ["Roboto-Thin"],
      RobotoRegular: ["Roboto-Regular"],
      AlmendraDisplay: ["Almendra-Display"],
    },
    colors: {
      black: {
        off: "#0F0F0F",
        full: "#000000",
      },
      white: {
        off: "#F0F0F0",
        full: "#FFFFFF",
      },
      neutral: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      darkgrey: "#212121",
    },
    extend: {
      opacity: {
        65: "65%",
      },
      rotate: {
        360: "360deg",
      },
    },
    plugins: [],
  },
};
