<template>  
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

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
$yellow: #fcc032;
$green: #04BF55;
$dark-green: #315937;
$light-blue: #55b3d9;
$blue: #0d6ba6;
$dark-blue: #023859;
$light-gray: #dee1e2;
$light-gray2: #eaeaea;
$gray: #f0f0f2;
$black: #3b3d3c;
$white: #f0f0f2;

html, body {
  margin: 0;
  padding: 0;
  min-width: 360px;
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: $black;
  word-break: keep-all;
  background: $gray;
}

a {
  color: white;
  text-decoration: none;
}

tr, td {
  padding: 5px;
  border: 1px solid $black;
}

button {
  padding: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
