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

* {
    font-family: "Pretendard-Regular";
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
    color: #f0f0f2;
}

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 360px;
    width: 100%;
    z-index: 10;
    line-height: 1;
    background-color: rgba(38, 38, 38, 0.7);
    .logo {
        margin-left: 2rem;
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
</style>