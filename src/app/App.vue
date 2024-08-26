<template>
  <router-view />
</template>

<style lang="scss">
$mainFontFamily: 'SF-Pro-Display';

@font-face {
  font-family: $mainFontFamily;
  src:
          local('MainFont'),
          url("../shared/assets/fonts/SF-Pro-Display-Medium.woff") format('woff'),
          url("../shared/assets/fonts/SF-Pro-Display-Medium.woff2") format('woff2');
}

#app {
  font-family: $mainFontFamily, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(210, 29%, 24%);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
