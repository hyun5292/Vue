<template>
  <div class="qna">
    <SideBar />
    <div class="cont">
      <div class="title">
        <img class="main_logo" src="@/assets/vertLogo.png" alt="팩토리뷰 가로 로고">
        <div class="sub_title">
          회원님들의 문의 내역입니다<br/>
          궁금하신 내용은 언제든지 물어봐주시면 성실하게 답변해드리겠습니다
        </div>
      </div>
      <button class="search">
        문의하기
      </button>
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
    name: 'QnaListView',
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
        { id:1, title: '제목입니다1', writer: '아이디1', date: '2022-02-27', cnt: 15 },
        { id:2, title: '제목입니다2', writer: '아이디2', date: '2022-02-26', cnt: 12 },
        { id:3, title: '제목입니다3', writer: '아이디3', date: '2022-02-25', cnt: 23 },
        { id:4, title: '제목입니다4', writer: '아이디4', date: '2022-02-24', cnt: 21 },
        { id:5, title: '제목입니다5', writer: '아이디5', date: '2022-02-22', cnt: 11 },
        { id:6, title: '제목입니다6', writer: '아이디6', date: '2022-02-17', cnt: 15 },
        { id:7, title: '제목입니다7', writer: '아이디7', date: '2022-02-13', cnt: 14 },
        { id:8, title: '제목입니다8', writer: '아이디8', date: '2022-02-07', cnt: 13 },
        { id:9, title: '제목입니다9', writer: '아이디9', date: '2022-02-02', cnt: 12 },
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

.qna {
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
      width: 100%;
      height: 50px;
      font-size: 1.2rem;
      color: white;
      background-color: $blue;
      border: none;
      border-radius: 5px;
      &:hover {
        background-color: $dark-blue;
      }
    }
  }
}

</style>