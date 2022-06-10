<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/views/headerView.vue';

export default ({
  name: 'App',
  components: {
    Header,
  }
})
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
//귀여운
@font-face {
  font-family: "HSYuji-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/HSYuji-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

//Color in Hex
$red: #f27649;
$orange-light: #f29f05;
$orange-dark: #f28907;
$yellow: #f2af5c;
$blue-dark: #023859;
$blue: #0d6ba6;
$purple: #898dff;
$gray-light: #2c2c2c;
$gray: #262626;
$gray-dark: #1d1d1d;
$white: #f0f0f2;

//Color in RGBA
$red-rgba: rgba(242, 117, 72, 1);
$orange-light-rgba: rgba(242, 159, 4, 1);
$orange-dark-rgba: rgba(242, 136, 7, 1);
$yellow-rgba: rgba(242, 175, 92, 1);
$blue-dark-rgba: rgba(1, 55, 89, 1);
$blue-rgba: rgba(13, 107, 165, 1);
$purple-rgba: rgba(137, 141, 255, 1);
$gray-light-rgba: rgba(44, 44, 44, 1);
$gray-rgba: rgba(38, 38, 38, 1);
$gray-dark-rgba: rgba(29, 29, 29, 1);
$white: rgba(240, 240, 242, 1);

#app {
  display: flex;
  flex-flow: row;
  position: relative;
  min-width: 360px;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  color: #f0f0f2;
  word-break: keep-all;
}

.title {
  position: absolute;
  margin-top: 1rem;
  top: 72px;
  left: 50%;
  color: $gray;
  white-space: nowrap;
  transform: translateX(-50%);
  #main {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.2;
    border-bottom: 1px solid rgba(38, 38, 38, 0.3);
  }
}

//반응형
//미세 조정
@media (max-width: 480px) {
  .title {
    #main {
      font-size: 2.5rem;
    }
  }
  #app {
    font-size: 1.2rem;
  }
}

</style>
