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
          <input id="fact_name" type="text" placeholder="공장명을 입력하세요">
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <vue-good-table
        :columns="columns"
        :rows="rows"
        max-height="45vh"
        :line-numbers="true"
        :pagination-options="{
          enabled: true,
          mode: 'records',
          perPage: 5
        }"
      />
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/SideBarView';

export default {
  name: 'MainView',
  data() {
    const columns = [
      {
        label: '공장명',
        field: 'name',
      },
      {
        label: '주소',
        field: 'addr',
      },
      {
        label: '전화번호',
        field: 'tel',
      },
    ];
    const rows = [
      { id:1, name: '공장명1', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:2, name: '공장명2', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:3, name: '공장명3', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:4, name: '공장명4', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:5, name: '공장명5', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:6, name: '공장명6', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:7, name: '공장명6', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:8, name: '공장명6', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:9, name: '공장명6', addr: '경기도 파주시', tel: '031-111-1111' },
      { id:10, name: '공장명6', addr: '경기도 파주시', tel: '031-111-1111' },
    ]

    return { columns, rows, }
  },
  components: {
    SideBar,

  },
  methods: {
    
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
          font-size: 1rem;
          border: 1px solid $black;
          border-radius: 5px;
        }
        button {
          width: 40px;
          height: 40px;
          background-color: $dark-blue;
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