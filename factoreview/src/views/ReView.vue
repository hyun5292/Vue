<template>
  <div class="review">
    <SideBar />
    <div class="cont">
        <div class="title">
            <span>공장명1</span>
            <div class="title_btn">
                <button>목록으로</button>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>
        <table class="review_info">
            <tr>
                <td colspan="3">제목입니다1</td>
            </tr>
            <tr>
                <td width="15%">아이디1</td>
                <td width="75%">2020-12-25</td>
                <td width="10%">300</td>
            </tr>
            <tr>
                <td>첨부파일</td>
                <td colspan="2">첨부사진제목.jpg</td>
            </tr>
            <tr class="table_cont_tr">
                <td colspan="3" class="table_cont_td">
                    내용입니다.
                </td>
            </tr>
        </table>
        <div id="others">
            <div class="other" id="before">
                <span>이전글 ▲</span>
                <router-link to="#" class="other_link" id="before_text">
                    이전글입니다.
                </router-link>
            </div>
            <div class="other" id="after">
                <span>다음글 ▼</span>
                <router-link to="#" class="other_link" id="after_text">
                    다음글입니다.
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/views/SideBarView';

export default {
    name: 'ReView',
    components: {
      SideBar,

    },
}
</script>

<style lang="scss" scoped>
//Color in Hex
$light-blue: #55b3d9;
$blue: #0d6ba6;
$black: #3b3d3c;
$dark-blue: #023859;
$light-gray2: #eaeaea;

a {
    text-decoration: none;
}

.review {
    display: flex;
    top: 0;
    left: 0;
    .cont {
        box-sizing: border-box;
        width: calc(100% - 250px);
        padding: 20px;
        .title {
            display: flex;
            justify-content: space-evenly;
            padding: 5px 0;
            width: 100%;
            color: white;
            text-align: center;
            background-color: $blue;
            border-radius: 5px;
            span {
                flex: 1 1 80%;
            }
            .title_btn {
                flex: 1 1 20%;
                margin-right: 5px;
                text-align: right;
                button {
                    color: white;
                    background-color: $light-blue;
                    margin-left: 5px;
                }
            }
        }
        .review_info {
            margin: 10px 0;
            width: 100%;
            border-spacing: 0;
            tr, td {
                padding: 5px;
                border: 1px solid $black;
                background-color: $light-gray2;
            }
            tr {
                .table_cont_td {
                    height: 45vh;
                    max-height: 45vh;
                }
                &:first-child {
                    td {
                        border-radius: 5px 5px 0 0;
                    }
                }
                &:last-child {
                    td {
                        background-color: white;
                        border-radius: 0 0 5px 5px;
                    }
                }
            }
        }
        #others {
            .other {
                display: flex;
                span, .other_link {
                    padding: 5px;
                    color: white;
                    background-color: $light-blue;
                    border-radius: 5px;
                }
                span {
                    flex: 1 1 10%;
                    margin-right: 10px;
                    text-align: center;
                }
                .other_link {
                    flex: 1 1 90%;
                    &:hover {
                        background-color: $dark-blue;
                    }
                }
            }
            #before {
                margin-bottom: 10px;
            }
        }
    }
}
</style>