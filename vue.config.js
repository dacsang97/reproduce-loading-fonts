module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/reproduce-loading-fonts/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/_fonts.scss";`,
      },
    },
  },
};
