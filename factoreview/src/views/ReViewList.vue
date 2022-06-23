<template>
  <div class="review">
    <SideBar />
    <div class="cont">
      <div class="title">
        <img class="main_logo" src="@/assets/vertLogo.png" alt="팩토리뷰 가로 로고">
        <div class="sub_title">
          선택된 공장의 리뷰 목록입니다<br/>
          제목을 클립하면 해당 리뷰를 볼 수 있습니다
        </div>
      </div>
      <div id="fact_name">
        공장명1
      </div>
      <vue-good-table
        :columns="columns"
        :rows="rows"
        max-height="300px"
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
    name: 'ReViewList',
    data() {
        const columns = [
        {
            label: '제목',
            field: 'title',
        },
        {
            label: '작성자',
            field: 'writer',
        },
        {
            label: '날짜',
            field: 'date',
        },
        {
            label: '조회수',
            field: 'cnt',
        },
        ];
        const rows = [
        { id:1, title: '제목입니다1', writer: '아이디1', date: '2022-02-03', cnt: '10' },
        { id:2, title: '제목입니다2', writer: '아이디2', date: '2022-02-12', cnt: '10' },
        { id:3, title: '제목입니다3', writer: '아이디3', date: '2022-02-23', cnt: '10' },
        { id:4, title: '제목입니다4', writer: '아이디4', date: '2022-02-24', cnt: '10' },
        { id:5, title: '제목입니다5', writer: '아이디5', date: '2022-02-28', cnt: '10' },
        { id:6, title: '제목입니다6', writer: '아이디6', date: '2022-03-01', cnt: '10' },
        { id:7, title: '제목입니다7', writer: '아이디7', date: '2022-03-05', cnt: '10' },
        { id:8, title: '제목입니다8', writer: '아이디8', date: '2022-03-10', cnt: '10' },
        { id:9, title: '제목입니다9', writer: '아이디9', date: '2022-03-23', cnt: '10' },
        { id:10, title: '제목입니다10', writer: '아이디10', date: '2022-05-12', cnt: '10' },
        { id:11, title: '제목입니다11', writer: '아이디11', date: '2022-05-23', cnt: '10' },
        ]

        return { columns, rows, }
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

.review {
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
    #fact_name {
        margin: 10px 0;
        padding: 5px 0;
        width: 100%;
        color: white;
        text-align: center;
        background-color: $blue;
        border-radius: 5px;
    }
  }
}
</style>