<template>
  <div class="app"></div>
  <router-view/>
</template>

<style lang="scss">
//Font
//깔끔한
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

//Color in Hex
$red: #fb6d32;
$light-green: #D4F294;
$green: #04BF55;
$dark-green: #315937;
$yellow: #fcc032;
$light-gray: #dee1e2;
$black: #3b3d3c;

.app {
  background: $white;
}
</style>
