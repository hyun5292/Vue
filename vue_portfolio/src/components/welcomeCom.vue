<template>
  <div id="welcome">
    <div class="welcome-wrap">
      <div class="welcome-cont">
        <div class="welcome-title">
          - 박수현 -<br/>
          FE 개발자 포트폴리오<br/>
        </div>
        <div class="welcome-sub">
          즐거움을 찾는 프론트 엔드 개발자입니다!<br/>
          꼼꼼한 성격과 뭐든지 잘 만들어내는 금손이 저의 장점입니다!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'welcomeCom',
    
}
</script>

<style lang="scss" scoped>
#welcome {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      115deg,
      rgba(38, 38, 38, 0.6),
      rgba(29, 29, 29, 0.6)
    ),
    url(../assets/heartchair.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .welcome-wrap {
    position: relative;
    margin: 0 2rem;
    height: 100%;
    .welcome-cont {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -40%);
      .welcome-title {
        margin-bottom: 1rem;
        font-size: 3rem;
        font-weight: 600;
        line-height: 1.2;
      }
    }
  }
}
</style>