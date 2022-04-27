# 유튜브 강의 들으면서 클론코딩한 Vue 게시판 만들기
## 경로: https://www.youtube.com/watch?v=ZIiTjMiZzQo&list=PLyjjOwsFAe8ITIDUNsU_x4XNbPJeOvs-b&index=5

**1. VSCode, NodeJS, Vue CLI 설치**<br/>
**2. 프로젝트 생성**<br/>
<img src="https://github.com/hyun5292/FrontEndLibrary/blob/main/RandomQuote/%EC%8B%A4%ED%96%89%ED%99%94%EB%A9%B4.png"  width="50%"/><br/>
**3. BootStrap 설치(참고: https://bootstrap-vue.org/docs)**<br/>
  - npm install vue bootstrap bootstrap-vue
  - Main.js 수정
  //main.js
  ```
  …
  import { BootstrapVue } from 'bootstrap-vue'
	
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css'
	
  Vue.config.productionTip = false
	
  Vue.use(BootstrapVue)
  ```


