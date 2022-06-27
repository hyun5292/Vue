<template>
  <div class="qWrite">
    <SideBar />
    <div class="cont">
        <div id="fact_name">
            <span>공장명1</span>
        </div>
        <table class="info">
          <tr>
              <td colspan="2" class="info_input">
                <input type="text" id="info_title" placeholder="제목을 입력해주세요">
              </td>
          </tr>
          <tr>
              <td width="15%" class="info_coll"><span>아이디1</span></td>
              <td width="85%" class="info_coll"><span>2020-12-25</span></td>
          </tr>
          <tr>
              <td class="info_coll"><span>첨부파일</span></td>
              <td class="info_coll">
                <button>내PC</button>
              </td>
          </tr>
          <tr class="table_cont_tr">
              <td colspan="2" class="table_cont_td info_input">
                  <textarea name="" id="info_cont" cols="30" rows="10"></textarea>
              </td>
          </tr>
      </table>
      <div class="btns">
        <router-link to="/qList" class="toqList">
          <span>목록으로</span>
        </router-link>
        <button class="write_btn">작성하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/SideBarView';

export default {
  name: 'QnaWriteView',
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
$light-gray2: #eaeaea;

tr, td {
  padding: 0px;
}

.qWrite {
  display: flex;
  .cont {
    box-sizing: border-box;
    width: calc(100% - 250px);
    padding: 20px;
    #fact_name {
        padding: 5px 0;
        width: 100%;
        color: white;
        text-align: center;
        background-color: $blue;
        border-radius: 5px;
    }
    .info {
      margin: 10px 0;
      width: 100%;
      border-spacing: 0px;
      //border-collapse: collapse;
      background-color: white;
      span {
        padding: 5px;
      }
      #info_title {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        font-size: 1rem;
        border-radius: 5px 5px 0 0;
        border: 1px solid $black;
      }
      #info_cont {
        box-sizing: border-box;
        width: 100%;
        height: 50vh;
        font-size: 1.2rem;
        border-radius: 0 0 5px 5px;
      }
      .info_input {
        padding: none;
        border: none;
      }
    }
    .btns {
      display: flex;
      justify-content: space-between;
      text-align: center;
      .toqList, .write_btn {
        padding: 5px 0;
        width: calc(50% - 5px);
        &:hover {
          background-color: $dark-blue;
        }
      }
      .toqList {
        background-color: $light-blue;
        border-radius: 5px;
        span {
          font-size: 1rem;
          font-weight: 600;
        }
      }
      .write_btn {
        color: white;
        background-color: $blue;
      }
    }
  }
}

</style>