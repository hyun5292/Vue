<template>
  <div class="home">
    <div class="side-bar">
      <div class="nav_logo">
        <img class="main_logo" src="@/assets/logo_wh.png" alt="팩토리뷰 로고">
      </div>
      <div class="login">
        <div class="login_input">
          <input type="text" class="input_id" placeholder="아이디">
          <input type="password" class="input_pw" placeholder="비밀번호">
        </div>
        <div class="login_button">
          <button>로그인</button> 
          <button>회원가입</button> 
        </div>
      </div>
      <div class="nav">
        <div class="nav-item" name="service_info">
          <i class="fa-solid fa-circle-info" name="nav_icon"></i>
          <div class="nav_text" name="service_info_text">서비스 소개</div>
        </div>
        <div class="nav-item" name="qna">
          <i class="fa-solid fa-circle-question" name="nav_icon"></i>
          <div class="nav_text" name="qna_text">문의하기</div>
        </div>
      </div>
    </div>
    <div class="cont">
      cont
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
//color in hex
$blue: #0d6ba6;
$black: #3b3d3c;

.home {
  display: flex;
  flex-flow: row;
  height: 100vh;
}

.side-bar {
  padding: 30px;
  background-color: $blue;
  .main_logo {
    margin: 1rem auto;
    width: 150px;
  }
  .login {
    line-height: 1;
    .login_input {
      input {
        display: block;
        margin: 0;
        padding: 5px;
        width: 180px;
        font-size: 0.9rem;
        border: 1px solid $black;
      }
      .input_id {
        border-radius: 5px 5px 0 0;
      }
      .input_pw {
        border-radius: 0 0 5px 5px;
      }
    }
    .login_button {
      margin: 10px auto;
      button {
        margin-bottom: 5px;
        padding: 5px;
        width: 100%;
        font-size: 0.9rem;
        font-weight: 600;
        background-color: white;
        border: 1px solid $black;
        border-radius: 5px;
      }
    }
  }
  .nav {
    display: flex;
    flex-flow: column;
    padding-top: 5px;
    font-weight: 600;
    text-align: left;
    border-top: 1px solid white;
    .nav-item {
      padding: 5px 0;
      i {
        margin-right: 10px;
      }
      .nav_text {
        display: inline-block;
      }
    }
    
  }
}

.cont {
  display: fixed;
  top: 0;
  left: 250px;
}
</style>