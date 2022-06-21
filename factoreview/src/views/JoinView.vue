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
                            <button id="cert">인증하기</button> 
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
                <div class="right">
                    <div class="agree">
                        <span>수신동의</span>
                        <div class="agree_item">
                            <input type="checkbox" id="agree_item_sms">
                            <label for="checkbox">SMS 수신 동의</label>
                        </div>
                        <div class="agree_item">
                            <input type="checkbox" id="agree_item_email">
                            <label for="checkbox">Email 수신 동의</label>
                        </div>
                        <div class="agree_item">
                            <input type="checkbox" id="agree_item_swear">
                            <label for="checkbox">비방적인 글 및 모욕 글 작성 금지 동의</label>
                        </div>
                    </div>
                    <div class="dev_info">
                        <span>개발자 정보</span>
                        <div class="dev_info_btns">
                            <button>Email</button>
                            <button>Github</button>
                            <button>Phone</button>
                        </div>
                        <span class="copy">© 2022. Park Su Hyun. All rights reserved.</span>
                    </div>
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

input, select {
    height: 40px;
}

input {
    box-sizing: border-box;
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


select {
    text-align: center;
    border: none;
    border-radius: 5px;
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
        .info, .right {
            width: 50%;
        }
        .info, .agree, .dev_info {
            padding: 12px 0;
        }
        .info {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            padding-right: 10px;
            border-right: 1px solid $black;
            #item_id, #item_pw {
                width: 50%;
            }
            .info_item {
                width: 100%;
                #mTel {
                    width: calc((100% - 30px) / 4);
                }
                #cert {
                    margin-left: 11px;
                    height: 40px;
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
                justify-content: space-between;
                input, select {
                    width: calc(50% - 5px);
                }
                select {
                    margin-top: 5px;
                }
            }
        }
        .right {
            padding-left: 10px;
            .agree {
                border-bottom: 1px solid $black;
                .agree_item {
                    display: flex;
                    align-items: center;
                    padding: 5px 0;
                    input {
                        margin-right: 10px;
                        width: 40px;
                    }
                }
            }
            .dev_info {
                span {
                    padding-bottom: 10px;
                }
                .dev_info_btns {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    button {
                        width: 30%;
                        font-size: 1.5rem;
                        color: white;
                        background-color: $light-blue;
                        &:hover {
                            background-color: $dark-blue;
                        }
                    }
                }
                .copy {
                    margin-top: 10px;
                    font-size: 1rem;
                    font-weight: 400;
                    justify-content: center;
                }
            }
        }
    }
    .join_btns {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        button {
            padding: 7px 0;
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