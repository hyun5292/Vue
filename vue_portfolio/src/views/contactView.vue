<template>
  <div id="contact">
    <div class="title">
        CONTACT ME
    </div>
    <div class="sub">깃허브 링크를 클릭해주세요!</div>
    <div class="contact-cont">
      <div class="intro-wrap">
        <div class="intro-cont">
          <h3 id="intro-title">
            안녕하세요<br/>
            즐거움을 찾는 개발자 박수현입니다.
          </h3>
          <p id="intro-sect">
            &nbsp;저의 좌우명은 '즐거움'입니다<br/>
            어떤 일이든 즐기면서 할 줄 알고<br/>
            끊임없이 공부하는 개발자가 되겠습니다!
          </p>
        </div>
        <a class="data-down" href="./assets/resume.pdf" download="박수현_980512_이력서">이력서 다운로드</a>
      </div>
      <div class="line"></div>
      <div class="info-wrap">
        <div class="info-cont">
          <i class="fas fa-calendar" id="info-icon"></i>
          <div class="info">
            <div class="info-text">생년월일</div>
            <div class="info-data">1998.05.12</div>
          </div>
        </div>
        <div class="info-cont">
          <i class="fas fa-mobile-alt" id="info-icon"></i>
          <div class="info">
            <div class="info-text">전화번호</div>
            <div class="info-data">010-9944-5292</div>
          </div>
        </div>
        <div class="info-cont">
          <i class="fas fa-at" id="info-icon"></i>
          <div class="info">
            <div class="info-text">이메일</div>
            <div class="info-data">tytyjacob@naver.com</div>
          </div>
        </div>
        <div class="info-cont">
          <i class="fab fa-github" id="info-icon"></i>
          <div class="info">
            <div class="info-text">Git</div>
            <div class="info-data">
              <a id="git-link" href="https://github.com/hyun5292">
                <i class="fas fa-link"></i>
                https://github.com/hyun5292
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'contactVue',
}
</script>

<style lang="scss" scoped>
a {
    color: #262626;
    text-decoration: none;
    &:hover {
        color: #f29f05;
    }
}

#contact {
    margin-top: 72px;
    padding: 0 1rem;
    color: #262626;
    background-color: #f0f0f2;
    .contact-cont {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        padding: 2rem 0;
    .intro-wrap {
        padding: 0 1rem;
        text-align: left;
        .intro-cont {
            line-height: 1.2;
            #intro-title {
                margin: 20px 0;
                font-weight: 600;
            }
            #intro-sect {
                font-size: 1.4rem;
            }
        }
    }
    .line {
      border-left: 1px solid rgba(38, 38, 38, 0.3);
    }
    .info-wrap {
        padding: 0 1rem;
        .info-cont {
            display: flex;
            flex-wrap: wrap;
            align-content: stretch;
            align-items: center;
            padding: 5px;
            #info-icon {
                margin-right: 1rem;
                width: 30px;
            }
            .info {
                text-align: left;
                .info-text {
                    font-size: 1.2rem;
                    color: gray;
                }
                .info-data {
                    i {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
  }
}
</style>