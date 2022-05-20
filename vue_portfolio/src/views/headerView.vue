<template>
  <div id="header">
    <div class="logo">
        <span>SUDOL</span> 
        <div id="text-port">Portfolio</div>
    </div>
    <HeaderCom />
  </div>
</template>

<script>
import HeaderCom from '@/components/headerCom.vue';

export default {
    name: 'headerView',
    components: {
        HeaderCom,

    }
}
</script>

<style lang="scss" scoped>
//Font
//귀여운
@font-face {
  font-family: "HSYuji-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/HSYuji-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

#header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    min-width: 360px;
    z-index: 10;
    padding: 0 2rem;
    background-color: rgba(38, 38, 38, 0.7);
    .logo {
      span {
        font-family: "HSYuji-Regular";
        font-size: 3rem;
        font-weight: 600;
        color: #f2af5c;
      }
      #text-port {
        display: inline-block !important;
        margin-left: 5px;
        font-size: 1.2rem;
      }
    }
}

//반응형
//header 미세 조정
@media (max-width: 480px) {
  #header {
    padding: 0 1rem;
    .logo {
      span {
        font-size: 2.5rem;
      }
      #text-port {
        font-size: 1rem;
      }
    }
  }
}

</style>