<template>
  <div class="qWrite">
    <SideBar />
    <div class="cont">
        <div id="fact_name">
            <span>공장명1</span>
        </div>
        <table class="info">
          <tr>
              <td colspan="2">
                <input type="text" placeholder="제목을 입력해주세요">
              </td>
          </tr>
          <tr>
              <td width="15%">아이디1</td>
              <td width="75%">2020-12-25</td>
          </tr>
          <tr>
              <td>첨부파일</td>
              <td>
                <button>내PC</button>
              </td>
          </tr>
          <tr class="table_cont_tr">
              <td colspan="2" class="table_cont_td">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
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

.qWrite {
  display: flex;
  .cont {
    box-sizing: border-box;
    width: calc(100% - 250px);
    padding: 20px;
    #fact_name {
        margin: 10px 0;
        padding: 5px 0;
        width: 100%;
        color: white;
        text-align: center;
        background-color: $blue;
        border-radius: 5px;
    }
    .info {
      margin: 10px 0;
    }
    .btns {
      display: flex;
      justify-content: space-between;
      text-align: center;
      .toqList, .write_btn {
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