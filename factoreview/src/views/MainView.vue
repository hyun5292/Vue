<template>
  <div class="main">
    <SideBar />
    <div class="cont">
      <div class="title">
        <img class="main_logo" src="@/assets/vertLogo.png" alt="팩토리뷰 가로 로고">
        <div class="sub_title">
          대한민국 안에 있는 모든 공장들의 목록입니다<br/>
          공장명을 클릭하면 해당 공장의 리뷰 목록을 볼 수 있습니다
        </div>
      </div>
      <div class="search">
        <div>
          <input type="text" placeholder="공장명을 입력하세요">
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <table class="review">
        <thead>
          <th width="5%">번호</th>
          <th width="30%">공장명</th>
          <th width="40%">주소</th>
          <th width="25%">전화번호</th>
        </thead>
        <tbody>
            <tr v-for="index in 5" :key="index">
              <td>{{index}}</td>
              <td>공장명1</td>
              <td>경기도 양주시 덕정동 936</td>
              <td>031-857-1651</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/SideBarView';

export default {
  name: 'MainView',
  data() {

    return {  }
  },
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

.main {
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
    .search {
      margin: 10px 0;
      padding: 5px 0;
      width: 100%;
      text-align: center;
      background-color: $blue;
      border-radius: 5px;
      div {
        input {
          box-sizing: border-box;
          margin-right: 5px;
          width: 50%;
          height: 40px;
          vertical-align: middle;
          border: 1px solid $black;
          border-radius: 5px;
        }
        button {
          width: 40px;
          height: 40px;
          background-color: $dark-blue;
          border: none;
          border-radius: 5px;
          i {
            font-size: 1rem;
            color: white;
          }
        }
      }
    }
    .review {
      width: 100%;
      border: 1px solid $black;
      border-radius: 5px;
    }
  }
}

</style>