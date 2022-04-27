# 유튜브 강의 들으면서 클론코딩한 Vue 게시판 만들기
## 경로: https://www.youtube.com/watch?v=ZIiTjMiZzQo&list=PLyjjOwsFAe8ITIDUNsU_x4XNbPJeOvs-b&index=5

**1. VSCode, NodeJS, Vue CLI 설치**<br/>
**2. 프로젝트 생성**<br/>
<img src="https://github.com/hyun5292/FrontEndLibrary/blob/main/RandomQuote/%EC%8B%A4%ED%96%89%ED%99%94%EB%A9%B4.png"  width="50%"/><br/>
**3. BootStrap 설치(참고: https://bootstrap-vue.org/docs)**<br/>
  - npm install vue bootstrap bootstrap-vue
  - Main.js 수정
  ```
  //main.js
  …
  import { BootstrapVue } from 'bootstrap-vue'
	
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css'
	
  Vue.config.productionTip = false
	
  Vue.use(BootstrapVue)
  ```
**4. Data 폴더와  index.js 파일 생성**<br/>
  - 데이터 참고: https://github.com/lelana0824/bootstrap-bbs/blob/2%EA%B0%95/src/data/index.js
**5. Components 폴더에 headerCom.vue 파일 생성 및 App.vue 연결**<br/>
  //App.vue
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
  //headerCom.vue
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




