module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "hoverTextNav": "#1ED760",
        "blueTextBg": "#2D46B9",
        "p-footer": "#919496"
      },
      fontFamily: {
        roboto: "Roboto"
      },
      backgroundImage: theme => ({
        'banner': "url('./public/images/showcase.webp') center center/cover"
      }),
      borderRadius: {
        "extra": "1.873rem"
      },
      fontSize: {
        "large": "9.75rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
