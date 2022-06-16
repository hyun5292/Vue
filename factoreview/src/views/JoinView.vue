<template>
    <div class="join">
      <SideBar />
      <div class="cont">
          <div class="title">
              <img class="main_logo" src="@/assets/vertLogo.png" alt="팩토리뷰 가로 로고">
              <div class="sub_title">
              팩토리뷰 회원이 되신 것을 환영합니다!
              </div>
          </div>
          <div class="main">
                <div class="info">
                    <div class="info_item">
                        <span>아이디</span>
                        <input type="text" id="mId" placeholder="아이디">
                    </div>
                    <div class="info_item">
                        <span>비밀번호</span>
                        <input type="text" id="mPw" placeholder="비밀번호">
                    </div>
                    <div class="info_item">
                        <span>성명</span>
                        <input type="text" id="mName" placeholder="성명">
                    </div>
                    <div class="info_item">
                        <span>생년월일</span>
                        <input type="date" id="mBirth" placeholder="아이디">
                    </div>
                    <div class="info_item">
                        <span>전화번호</span>
                        <input type="text" id="mTel" placeholder="아이디">
                        -
                        <input type="text" id="mTel" placeholder="아이디">
                        -
                        <input type="text" id="mTel" placeholder="아이디">
                        <button>인증하기</button> 
                    </div>
                    <div class="info_item">
                        <span>이메일</span>
                        <input type="text" id="mEmail" placeholder="아이디">
                        <input type="text" id="mEmail" placeholder="아이디">
                    </div>
                </div>
                <div class="agree">
                    <span>수신동의</span>
                </div>
                <div class="dev_info">
                    <span>개발자 정보</span>
                    <button>Email</button>
                    <button>Github</button>
                    <button>Phone</button>
                </div>
          </div>
      </div>
    </div>
</template>

<script>
import SideBar from '@/views/SideBarView';

export default {
  name: 'JoinView',
  components: {
    SideBar,
  }
}
</script>

<style lang="scss" scoped>
//Color in Hex
$blue: #0d6ba6;
$black: #3b3d3c;
$dark-blue: #023859;

span {
    display: flex;
    font-weight: 600;
    line-height: 1;
}

.join {
  display: flex;
  top: 0;
  left: 0;
  .cont {
    box-sizing: border-box;
    width: calc(100% - 250px);
    padding: 20px;
    .title {
      border-bottom: 1px solid $black;
      .main_logo {
        width: 500px;
      }
    }
    .sub_title {
      font-size: 1rem;
      font-weight: 600;
      color: $dark-blue;
    }
    .main {
        display: flex;
        flex-flow: row wrap;
        .info, .agree, .dev_info {
            box-sizing: border-box;
            min-width: 50%;
        }
        .info {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            margin: 5px 0;
            width: 50%;
            border-right: 1px solid $black;
            .info_item {
                padding: 5px 0;
                width: 100%;
                input {
                    padding: 5px;
                    font-size: 0.9rem;
                    border: 1px solid $black;
                    border-radius: 5px;
                }
            }
        }
        .agree {
            border-bottom: 1px solid $black;
        }
        .dev_info {

        }
    }
  }
}
</style>