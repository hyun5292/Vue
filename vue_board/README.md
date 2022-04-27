# 유튜브 강의 들으면서 클론코딩한 Vue 게시판 만들기
## 경로: https://www.youtube.com/watch?v=ZIiTjMiZzQo&list=PLyjjOwsFAe8ITIDUNsU_x4XNbPJeOvs-b&index=5

**1. VSCode, NodeJS, Vue CLI 설치**<br/>
**2. 프로젝트 생성**<br/>
<img src="https://github.com/hyun5292/FrontEndLibrary/blob/main/RandomQuote/%EC%8B%A4%ED%96%89%ED%99%94%EB%A9%B4.png"  width="50%"/><br/>
**3. BootStrap 설치(참고: https://bootstrap-vue.org/docs)**<br/>
- npm install vue bootstrap bootstrap-vue
- Main.js 수정<br/>
**//main.js**
```
…
import { BootstrapVue } from 'bootstrap-vue'
	
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
	
Vue.config.productionTip = false
	
Vue.use(BootstrapVue)
```
**4. Data 폴더와  index.js 파일 생성**<br/>
- 데이터 참고: https://github.com/lelana0824/bootstrap-bbs/blob/2%EA%B0%95/src/data/index.js <br/>

**5. Components 폴더에 headerCom.vue 파일 생성 및 App.vue 연결**<br/>
**//App.vue**
```
<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
	
<script>
import Header from '@/components/Header';
	
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>
```
**//headerCom.vue**
```
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Vue.js로 게시판 만들기</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
	<b-navbar-nav>
	  <b-nav-item href="#">공지사항</b-nav-item>
	  <b-nav-item href="#">자유게시판</b-nav-item>
	  <b-nav-item href="#">구인구직</b-nav-item>
	</b-navbar-nav>
      </b-collapse>
     </b-navbar>
  </div>
</template>
```
**6. Components 폴더에 boardCom.vue 파일 생성**<br/>
**//boardCom.vue**<br/>
복붙 경로: https://bootstrap-vue.org/docs/components/table
- Router에 경로 추가
**//router/index.js**
```
…
import Board from '@/components/boardCom.vue';
…
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    }
  ]
});
```
**7. Components/boardCom.vue에 data/index.js 연결**<br/>
**//boardCom.vue**<br/>
```
<template>
  <b-table striped hover :items="items" :fields"fields"></b-table>
</template>
	
<script>
import data from '@/data'
	
export default {
  data() {
    //정렬 역순으로
    let items = data.Content.sort((a, b) => { return b.content_id - a.content_id });
    //글쓴이 추가(Content/user_id와 User/user_id 연결)
    items = items.map(contentItem => { return { ...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name } });
	
    return {
      fields: [
        {
          key: 'content_id',
          label: '글번호'
        },
        {
	  key: 'title',
	  label: '제목'
        },
        {
          key: 'created_at',
	  label: '작성일'
        },
        {
	  key: 'user_name',
	  label: '글쓴이'
        }
      ],
      items: data.Content
    }
  }
}
</script>
```
**8. Read**<br/>
- boardCom.vue에 @row-clicked 추가<br/>
**//boardCom.vue**
```
<template>
  <b-table … @row-clicked="rowClick"></b-table>
</template>
	
<script>
…
methods: {
  rowClick(item) {
    this.$router.push({
      path: `/board/free/detail/${item.content_id}`
    });
  }
}
</script>
```
- components 폴더에 cntDetailCom.vue 생성<br/>
**//cntDetailCom.vue**
```
<template>
  <div>
      <b-card>
          <div class="content-detail-content-info">
              <div class="content-detail-content-info-left">
                  <div class="content-detail-content-info-left-number">
                      {{ contentId }}
                  </div>
                  <div class="content-detail-content-info-left-subject">
                      {{ title }}
                  </div>
              </div>
              <div class="content-detail-content-info-right">
                  <div class="content-detail-content-info-right-user">
                      글쓴이: {{ user }}
                  </div>
                  <div class="content-detail-content-info-right-created">
                      등록일: {{ created }}
                  </div>
              </div>
          </div>
          <div class="content-detail-content">
              {{ context }}
          </div>
          <div class="content-detail-button">
              <b-button variant="primary">수정</b-button>
              <b-button variant="success">삭제</b-button>
          </div>
          <div class="content-detail-comment">
              덧글
          </div>
      </b-card>
  </div>
</template>
	
<script>
import data from '@/data';

export default {
    name: 'cntDetailCom',
    data() {
        const contentId = Number(this.$route.params.contentId);
        const contentData = data.Content.filter(item => item.content_id === contentId)[0];
        return {
            contentId: contentId,
            title: contentData.title,
            context: contentData.context,
            user: data.User.filter(item => item.user_id === contentData.user_id)[0].name,
            created: contentData.created_at
        }
    },
}
</script>
```
- Router/index.js에 임의로 경로 설정<br/>
**//router/index.js**
```
…
{
  path: '/board/free/detail/:contentId',
  name: 'cntDetail',
  component: cntDetail
}
…
```
**9. Delete**<br/>
**//cntDetailCom.vue**
```
<template>
    …
    <b-button variant="success" @click="deleteData">삭제</b-button>
    …
</template>

<script>
  …
  methods: {
    deleteData() {
      const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
      data.Content.splice(content_index, 1);
      this.$router.push({
        path: '/board/free'
      });
    }
  }
</script>
```
**10. Create**<br/>
- components 폴더에 createCom.vue 파일 생성 & router 경로 설정<br/>
**//router/index.js**
```
…
import Create from '@/components/createCom.vue'
…
{
  path: '/board/free/create',
  name: 'Create',
  component: Create
},
…
//createCom.vue
<template>
  <div>
    <b-input v-model="subject" placeholder="제목을 입력해주세요"></b-input>
    <b-form-textarea
      v-model="context"
      placeholder="내용을 입력해주세요"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button @click="uploadContent">저장</b-button>
    <b-button @click="cancel">취소</b-button>
  </div>
</template>
	
<script>
import data from '@/data';

export default {
  name: 'createCom',
  data() {
    return {
      subject: "",
      context: "",
      userId: 1,
      createdAt: '2022-04-21 15:55:55',
      updatedAt: null
    }
  },
  methods: {
    uploadContent() {
      let items = data.Content.sort((a, b) => { return b.content_id - a.content_id });
      const content_id = items[0].content_id + 1;

      data.Content.push({
        content_id:  content_id,
        user_id: this.userId,
        title: this.subject,
        context: this.context,
        created_at: this.createdAt,
        updated_at: this.updatedAt
      });
      
      this.$router.push({
        path: `/board/free`
      });
    },
    cancel() {
      this.$router.push({
        path: `/board/free`
      });
    }
  }
}
</script>
```
- boardCom.vue에 글쓰기 버튼 생성<br/>
**//boardCom.vue**
```
<template>
  …
  <b-button @click="writeContent">글쓰기</b-button>
</template>

<script>
…
methods: {
  …
  writeContent() {
    this.$router.push({
      path: `/board/free/create`
    })
  }
}
</script>
```
**11. Update**<br/>
- cntDetailCom.vue 파일 수정 버튼 함수 적용<br/>
**//cntDetailCom.vue**
```
<template>
  …
  <div class="content-detail-button">
    <b-button variant="primary" @click="updateData">수정</b-button>
    <b-button variant="primary" @click="deleteData">삭제</b-button>
  </div>
  …
</template>

<script>
…
methods: {
  …
  updateData() {
    this.$router.push({
      path: `/board/free/create/${this.contentId}`
    });
  }
}
</script>
```
- createCom.vue 파일 수정<br/>
**//createCom.vue**
```
<template>
  …
  <b-button @click="updateMode ? updateContent() : uploadContent()">저장</b-button>
  <b-button @click="cancel">취소</b-button>
</template>

<script>
  …
  data() {
    return {
      …
      updateMode: this.$route.params.contentId > 0 ? true : false
    }
  },
  created() {
    if(this.$route.params.contentId > 0) {
      const contentId = Number(this.$route.params.contentId);
      this.updateObject = data.Content.filter(item => item.content_id === contentId)[0];
      this.subject = this.updateObject.title;
      this.context = this.updateObject.context;
    }
  },
  methods: {
    …
    updateContent() {
      this.updateObject.title = this.subject;
      this.updateObject.context = this.context;
      this.$router.push({
        path: '/board/free/'
      });
    }
  }
</script>
```
**12. 덧글 구현하기**<br/>
- cmtListCom.vue 파일 생성<br/>
**//cmtListCom.vue**
```
<template>
  <div>
    {{ contentId }}
  </div>
</template>

<script>
import data from '@/data';

export default {
  name: 'cmtListCom',
  props: {
    contentId: Number,
  },
  data() {
    return { comments: data.Comment.filter(item => item.content_id === this.contentId) }
  }
}
</script>
```
- cntDetailCom.vue 파일에서 cmtListCom.vue 호출<br/>
**//cntDetailCom.vue**
```
<template>
    …
    <div class="content-detail-comment">
      <CommentList :contentId="contentId" />
    </div>
  </b-card>
</template>

<script>
…
import CommentList from './cmtListCom.vue';
…
components: {
  CommentList,
},
…
</script>
```
- cmtListItemCom.vue 파일 생성<br/>
**//cmtListItemCom.vue**
```
<template>
  <div class="comment-list-item">
    <div class="comment-list-item-name">
      <div>{{ name }}</div>
      <div>{{ commentObj.created_at }}</div>
    </div>
    <div class="comment-list-item-context">{{ commentObj.context }}</div>
    <div class="comment-list-item-button">
      <b-button variant="info">수정</div>
      <b-button variant="info">삭제</div>
    </div>
  </div>
</template>

<script>
import data from '@/data';

export default {
  name: "cmtListItemCom",
  props: {
    commentObj: Object,
  },
  data() {
    return {
      name: data.User.filter(
        item => item.user_id === this.commentObj.user_id
      )[0].name,
    }
  }
}
</script>

<style scoped>
참고 복붙: https://github.com/lelana0824/bootstrap-bbs/blob/4%EA%B0%95/src/components/CommentListItem.vue
</style>
```
- cmtListCom.vue 파일 수정<br/>
**//cmtListCom.vue**
```
<template>
  <div>
    <div :key="item.comment_id" v-for="item in comments">
      <CmtListItem :commentObj="item" />
    </div>
  </div>
</template>

<script>
import data from '@/data';
import CmtListItem from './cmtListItemCom.vue';

export default {
  …
  components: {
    CmtListItem,
  },
  …
}
</script>
```
**13. 덧글 작성하기**<br/>
- cmtCreateCom.vue 파일 생성<br/>
**//cmtCreateCom.vue**
```
<template>
  <div>
    <b-input-group :prepend="name" class="mt-3">
      <b-form-textarea
        id="textarea"
        v-model="context"
        :placeholder="'코멘트를 달아주세요~!'"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-input-group>
    <b-input-group-append>
      <b-button variant="info" @click="createComment">작성하기</b-button>
    </b-input-group-append>
  </div>
</template>

<script>
import data from '@/data';

export default {
  name: "cmtCreateCom",
  props: {
    contentId: Number,
    reloadComment: Function,
  },
  data() {
    return {
      name: "르라나",
      context: ""
    }
  },
  methods: {
    createComment() {
      data.Comment.push(
        {
           comment_id: data.Comment[data.Comment.length - 1].comment_id + 1,
           user_id: 1,
           content_id: this.contentId,
           context: this.context,
           created_at: '2022-04-25 14:11:11',
           updated_at: null
        }
      );
    }
  }
}
</script>
```
- cmtListCom.vue 파일에 덧글 작성하기 버튼 추가<br/>
**//cmtListCom.vue**
```
<template>
  …
  <CmtCreate :contentId="contentId" />
</template>

<script>
…
import CmtCreate from './cmtCreateCom.vue';
…
components: {
  CmtListItem,
  CmtCreate,
}
…
</script>
```
- 덧글 작성 시 바로 reload<br/>
**//cmtListCom.vue**
```
<template>
  …
  <CmtCreate :contentId="contentId" :reloadComment="reloadComment" />
</template>

<script>
…
methods: {
  reloadComment() {
    this.comments = data.Comment.filter(item => item.content_id === this.contentId)
  }
}
</script>
```
**//cmtCreateCom.vue**
```
…
<script>
  …
  props: {
    contentId: Number,
    reloadComment: Function,
  },
  …
  methods: {
    createComment() { 
      …
      this.reloadComment();
      this.context = ""; 
    }
  }
</script>
```
**14. 대댓글 작성하기**<br/>
- cmtListItemCom.vue 수정<br/>
**//cmtListItemCom.vue**
```
<template>
  …
  <template v-if="subCommentList.length > 0">
    <div
      class="comment-list-item-subComment-list"
      :key="item.subcomment_id"
      v-for="item in subCommentList"
    >
      <div class="comment-list-item-name">
        <div>{{ item.user_name }}</div>
        <div>{{ item.created_at }}</div>
      </div>
      <div class="comment-list-item-context">{{ item.context }}</div>
      <div class="comment-list-item-button">
        <b-button variant="info">수정</b-button>
        <b-button variant="info">삭제</b-button>
      </div>
    </div>
  </template>
</template>

<script>
…
data() {
  return {
    …
    subCommentList: data.SubComment.filter(
      item => item.comment_id === this.commentObj.comment_id
    ).map(subCommentItem => ({
      ...subCommentItem,
      user_name: data.User.filter(
        item => item.user_id === subCommentItem.user_id
      )[0].name
    })),
  }
}
</script>
	
<style scoped>
참고 복붙: https://github.com/lelana0824/bootstrap-bbs/blob/4%EA%B0%95/src/components/CommentListItem.vue
</style>
```
- 대댓글 작성하기<br/>
**//cmtListItemCom.vue**
```
<template>
    …
    <template v-if="subCommentList.length > 0">
      <CommentCreate
        isSubComment="true"
        commentId="commentObj.comment_id"
      />
    </template>
    ...
</template>

<script>
import CommentCreate from './cmtCreateCom.vue';

export default {
  …
  components: {
    CommentCreate,
  },
  …
  data() {
    return {
      …
      subCommentCreateToggle: false,
    }
  }
}
</script>
```
**//cmtCreateCom.vue**
```
<template>
  …
  <b-input-group-append>
    <b-button variant="info" @click="isSubComment ? createSubComment() : createComment()">작성하기</b-button>
  </b-input-group-append>
  ...
</template>

<script>
export default {
  props: {
    …
    commentId: Number,
    isSubComment: Boolean,
  },
  methods: {
    …
    createSubComment() {
      data.SubComment.push(
        {
          subcomment_id: data.SubComment[data.SubComment.length - 1].subcomment_id + 1,
          user_id: 1,
          comment_id: this.commentId,
          context: this.context,
          created_at: '2022-04-25 14:11:11',
          updated_at: null
        }
      );
      this.context = "";
    }
  }
}
</script>
```
- 대댓글 작성하기 버튼 추가 & reload<br/>
**//cmtListItemCom.vue**
```
<template>
  <div>
    <div class="comment-list-item">
      …
      <div class="comment-list-item-button">
        …
        <b-button variant="info" @click="subCommentToggle">덧글달기</b-button>
      </div>
    </div>
    <template v-if="subCommentCreateToggle">
      <CommentCreate
        …
        :reloadSubComments="reloadSubComments"
        :subCommentToggle="subCommentToggle"
      />
    </template>
    ...
  </div>
</template>

<script>
…
methods: {
  subCommentToggle() {
    this.subCommentCreateToggle = !this.subCommentCreateToggle;
  },
  reloadSubComments() {
    this.subCommentList = data.SubComment.filter(
        item => item.comment_id === this.commentObj.comment_id
      ).map(subCommentItem => ({
        ...subCommentItem,
        user_name: data.User.filter(
          item => item.user_id === subCommentItem.user_id
        )[0].name
     }));
  }
}
</script>
```
**//cmtCreateCom.vue**
```
…
<script>
  …
  props: {
    …
    subCommentToggle: Function,
    reloadSubComments: Function,
  },
  methods: {
    createSubComment() {
      …
      this.subCommentToggle();
      this.reloadSubComments();
      this.context = "";
    }
  }
</script>
```
**15. 페이지네이션 구현하기(참고: https://bootstrap-vue.org/docs/components/pagination)**<br/>
- b-pagination은 URL 이동 X -> 우린 b-pagination 사용
- b-pagination은 URL 이동 O
- boardCom.vue에 참고 사이트 복붙<br/>
**//boardCom.vue**
```
<template>
  <b-table … :per-page="perPage" :current-page="currentPage" … />
  <b-pagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    align="center"
  ></b-pagination>
  …
</template>

<script>
…
return {
  currentPage: 1,
  perPage: 10,
  …
},
…
computed: {
  rows() {
    return this.items.length;
  }
}
</script>
```
**16. CSS 마무리**<br/>
- 이건 사실상 그냥 복붙 사용
- 참고: https://github.com/lelana0824/bootstrap-bbs/blob/4%EA%B0%95/src/components/CommentListItem.vue


