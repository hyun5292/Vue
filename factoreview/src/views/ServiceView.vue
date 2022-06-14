<template>
  <div class="service">
    <SideBar />
    <div class="cont">
      <div class="title">
        <img class="main_logo" src="@/assets/vertLogo.png" alt="팩토리뷰 가로 로고">
        <div class="sub_title">
          팩토리뷰는 화물차 기사 또는 공장 관련 일하시는 분들이<br/>
          다녀간 공장에 대한 리뷰를 작성할 수 있도록 만든 사이트입니다
        </div>
      </div>
      <div class="info">
        <div class="qna">
          <span name="qna_title">Q. 만들게 된 계기?</span>
          <div name="qna_answer">아빠가 화물차 기사이신데 ~ 집오면 ~ 다녀온 공장 얘기를 하고 아는 기사 분들이랑 공유하고 ~</div>
        </div>
        <div class="qna">
          <span name="qna_title">Q. 사용한 툴, API, 기타 등등?</span>
          <div name="qna_answer">
            <div name="qna_answer_item">
              <div class="qna_answer_icon">
                <img name="vscode_logo" src="@/assets/sprite.png" alt="VSCode 로고">
              </div>
              <div class="qna_answer_text">VSCode</div>
            </div>
            <div name="qna_answer_item">
              <div class="qna_answer_icon">
                <img name="vue_logo" src="@/assets/sprite.png" alt="Vue 로고">
              </div>
              <div class="qna_answer_text">Vue2</div>
            </div>
          </div>
        </div>
        <div class="qna">
          <span name="qna_title">Q. 연락처(클릭 시 복사 됨)</span>
          <div name="qna_answer">
            <button>Email</button>
            <button>Github</button>
            <button>Phone</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/SideBarView';

export default {
    name: 'ServiceView',
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

.service {
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
      .sub_title {
        font-size: 1rem;
        font-weight: 600;
        color: $dark-blue;
      }
    }
    .info {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin-top: 10px;
      border: 1px solid $black;
      border-radius: 5px;
      .qna {
        margin: 10px;
        span {
          font-weight: 600;
        }
        #qna_answer {
          #qna_answer_item {
            .qna_aswer_icon {
              img {
                display: inline-block;
                margin: 10px;
                width: 80px;
                height: 80px;
                -webkit-transition: all 0.2s ease-in;
                transition: all 0.2s ease-in;
              }
              #vscode_logo {
                background-position: 0 0;
              }
              #vue_logo {
                background-position: 0 -80px;
              }
            }
            .qna_answer_text {

            }
          }
          button {
            color: white;
            background-color: $light-blue;
            border: none;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>