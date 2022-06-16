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
                    <div class="info_item" id="item_id">
                        <span>아이디</span>
                        <input type="text" id="mId">
                    </div>
                    <div class="info_item" id="item_pw">
                        <span>비밀번호</span>
                        <input type="password" id="mPw">
                    </div>
                    <div class="info_item">
                        <span>성명</span>
                        <input type="text" id="mName">
                    </div>
                    <div class="info_item">
                        <span>생년월일</span>
                        <input type="date" id="mBirth">
                    </div>
                    <div class="info_item">
                        <span>전화번호</span>
                        <div class="inputs">
                            <input type="number" id="mTel">
                            -
                            <input type="number" id="mTel">
                            -
                            <input type="number" id="mTel">
                            <button>인증하기</button> 
                        </div>
                    </div>
                    <div class="info_item">
                        <span>이메일</span>
                        <div class="inputs" id="item_email">
                            <input type="text" id="mEmail">
                            <select>
                                <option value="naver">@naver.com</option>
                                <option value="daum">@daum.net</option>
                                <option value="nate">@nate.com</option>
                            </select>
                        </div>
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
          <div class="join_btns">      
            <button class="toMain">메인으로</button>
            <button class="joinBtn">가입하기</button>
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
$light-blue: #55b3d9;
$blue: #0d6ba6;
$black: #3b3d3c;
$dark-blue: #023859;

span {
    display: flex;
    padding: 5px 0;
    font-weight: 600;
    line-height: 1;
}

input {
    margin: 5px 0;
    padding: 5px;
    width: calc(100% - 10px);
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
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
        flex-flow: wrap;
        padding: 5px 0 0;
        .info, .agree, .dev_info {
            box-sizing: border-box;
            min-width: 50%;
        }
        .info {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            padding-right: 10px;
            width: 50%;
            border-right: 1px solid $black;
            #item_id, #item_pw {
                padding-top: 0;
                width: calc(50% - 10px);
                input {
                    width: calc(100% - 10px);
                }
            }
            .info_item {
                text-align: left;
                padding: 5px 0;
                width: 100%;
                .inputs {
                    #mTel {
                        width: calc((100% - 60px) / 4);
                    }
                    button {
                        margin-left: 11px;
                        color: white;
                        background-color: $blue;
                        &:hover {
                            background-color: $light-blue;
                        }
                    }
                }
                #item_email {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-evenly;
                    input, select {
                        width: calc(50% - 20px);
                    }
                    select {
                        text-align: center;
                        border: none;
                        border-radius: 5px;
                    }
                }
            }
        }
        .agree {
            border-bottom: 1px solid $black;
            padding-left: 5px;
            height: 50%;
        }
        .dev_info {

        }
    }
    .join_btns {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        button {
            margin: 10px 5px 10px;
            font-size: 1rem;
            color: white;
            width: calc(50% - 10px);
            &:hover {
                background-color: $dark-blue;
            }
        }
        .toMain {
            background-color: $light-blue;
        }
        .joinBtn {
            background-color: $blue;
        }
    }
  }
}
</style>