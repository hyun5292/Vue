# Vue3 강의 - REST API를 이용하여 메모 애플리케이션 만들기
## 경로: https://www.youtube.com/watch?v=ADxbGlwhl_s&list=PLtht1_et-35AQSnfVkqkjdfhBX_P-9U4-
*사진 다음에 필기 있음*
<img src="https://github.com/hyun5292/Vue/blob/main/vue_memo/frontend/src/assets/%EC%99%84%EC%84%B1%EB%B3%B8_%EC%B6%94%EA%B0%80.png?raw=true"  width="100%"/><br/>
<img src="https://github.com/hyun5292/Vue/blob/main/vue_memo/frontend/src/assets/%EC%99%84%EC%84%B1%EB%B3%B8_%EB%B3%B8%EB%AC%B8.png?raw=true"  width="100%"/><br/>
<img src="https://github.com/hyun5292/Vue/blob/main/vue_memo/frontend/src/assets/%EC%99%84%EC%84%B1%EB%B3%B8_%EC%88%98%EC%A0%95.png?raw=true"  width="100%"/><br/>
------
**1. VSCode, NodeJS 설치**<br/>
**2. Vue3 Default로 프로젝트 생성 (vue_memo 내가 그냥...)**<br/>
- vue_memo 파일안에 frontend 프로젝트 생성

**3. Vue CLI 설치 (참고: https://cli.vuejs.org/#getting-started)**<br/>
**4. 프로젝트 초기화**<br/>
**5. BootStrap CDN 연결(참고: https://cdnjs.com/libraries/twitter-bootstrap)**<br/>
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.min.css">
```
**6. Components 파일에 Ground.vue, Header.vue, Footer.vue, Memo.vue 파일 생성 후 App.vue에 연결**<br/>
(파일 이름 2글자 이상 오류로 앞에 'com' 붙여줌)<br/>
**//App.vue**<br/>
```
<template>
  <div class="app">
    <Ground />
  </div>
</template>

<script>
import Ground from "./components/comGround.vue";

export default {
  components: {
    Ground
  }
}
</script>
```
**//comGround.vue**<br/>
```
<template>
  <div class="ground">
    <Header />
    <div>Content</div>
    <Footer />
  </div>
</template>

<script>
import Header from './comHeader.vue';
import Footer from './comFooter.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>
```
**//comHeader.vue**<br/>
```
<template>
  <header>Memo App</header>
</template>

<style scoped>
header { 
  padding: 25px;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid #eee;
  background: #f7f7f7;  
}
</style>
```
**//comFooter.vue**<br/>
```
<template>
  <footer>&copy; 2022 Memo App. All rights reserved.</footer>
</template>

<style scoped>
footer {
  padding: 25px;
  border-top: 1px solid #eee;
  background: #f7f7f7;
}
</style>
```
**//comMemo.vue**<br/>
```
<template>
  <div class="memo">
    <ul>
      <li>메모 1 내용</li>
      <li>메모 2 내용</li>
      <li>메모 3 내용</li>
      <li>메모 4 내용</li>
      <li>메모 5 내용</li>
    </ul>
  </div>
</template>
```
**7. Vue sass 사용하기**<br/>
- 사진에 + 클릭하면 되더라… cmd 없어도 돼<br/>
<img src="https://github.com/hyun5292/Vue/blob/main/vue_memo/frontend/src/assets/terminal_plus.png?raw=true"  width="80%"/><br/>

- npm i node-sass@6.0.1  //node-sass 설치 (참고: https://www.npmjs.com/package/node-sass/v/6.0.1)
- npm i sass-loader@10.2.1  //sass-loader 설치 (참고: https://www.npmjs.com/package/sass-loader/v/10.2.1)

**//comMemo.vue**<br/>
```
<style lang="scss" scoped>
.memo ul {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin: 5px;
    padding: 15px;
  }
}
</style>
```
**8. 데이터 배열화**<br/>
**//comMemo.vue**<br/>
```
<template>
  <div class="memo">
    <ul>
      <li v-for="(d, idx) in data" :key="idx">{{ d }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const data = [ "메모 1 내용", … "메모 5 내용" ];
    return { data };
  },
}
</script>
…
```
**9. 내용 추가 버튼, 디자인 살짝 수정**<br/>
**//comMemo.vue**<br/>
```
<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+추가</button>
    </div>
    <ul>
      <li v-for="(d, idx) in state.data" :key="idx">{{ d }}</li>
    </ul>
  </div>
</template>

<script>
import { reactvie } from "vue";
export default {
  setup() {
    const state = reactive({
      data: [ "메모 1 내용", … "메모 5 내용" ]
    });
    const add = () => {
      state.data.push("추가된 내용");
    };
    return { state, data };
  },
}
</script>
<style lang="scss" scoped>
.memo {
  .act {
    padding: 10px 5px 5px 5px;
    text-align: right;
  }
  ul {
    margin: 0;
    padding: 0;
    border: 1px solid #eee;
    list-style: none;

    li {
      margin: 5px;
      padding: 15px;
      border: 1px solid #eee;
    }
  }
}
</style>
```
**10. 서버 추가**<br/>
- vue_memo 안에 backend 파일 생성<br/>
  -> mkdir backend
	-> npm init
- index.js 파일 생성
- express 설치
  -> 참고: https://expressjs.com/ko/starter/installing.html<br/>
	-> Hello World 예제 (참고: https://expressjs.com/ko/starter/hello-world.html)<br/>
	  〮 node .\index.js //Terminal에다가 <br/>
	  〮 http://localhost:3000/ 여기 접속<br/>
- 내용 수정
**//index.js**<br/>
```
const express = require('express')
const app = express()
const port = 3000

const memos = [ "메모 1 내용", …, "메모 5 내용" ];

app.get('/memos', (req, res) => {
  res.send(memos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
- http://localhost:3000/memos 접속하면 배열 출력<br/>
- 
**11. Axios 설치 (참고: https://axios-http.com/kr/docs/intro)**<br/>
- npm install axios

**//index.js**<br/>
```
const express = require('express')
const app = express()
const port = 3000

const memos = [ "메모 1 내용", …, "메모 5 내용" ];

app.get('/api/memos', (req, res) => {
  res.send(memos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
**// comMemo.vue**<br/>
```
<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      data: []
    });
    …
    axios.get("/api/memos").then((res) => {
      state.data = res.data;
    });
    ...
  }
}
</script>

<style lang="scss" scoped>
…
li {
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #eee;
}
…
</style>
```
- Vue에서 proxy 설정으로 CORS 해결(참고: https://genie247.tistory.com/116)

**//vue.config.js - 원래 있어서 거기에 했는데 없으면 만들면 됨**<br/>
```
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  }
})
```
**12. 서버에 Request 날리기**<br/>
**//index.js**<br/>
```
…
app.post("/api/memos", (req, res) => {
  memos.push(req.body.content);
  res.send(memos);
});
…
```
**//comMemo.vue**<br/>
```
…
<script>
…
  setup() {
    …
    const add = () => {
      const content = prompt("내용을 입력해주세요");

      axios.post("/api/memos", { content }).then((res) => {
        state.data = res.data;
      });
    };
  }
</script>
...
```
- index.js -> api-server.js 파일명 변경
- package.json 파일 "main": "api-server.js" 변경
**//api-server.js**<br/>
```
…
const bodyParser = require("body-parser");

const memos = [];

app.use(bodyParser.json());
…
```
**13. 내용 수정**<br/>
**//comMemo.vue**<br/>
```
<template>
…
    <li v-for="(d, idx) in state.data" :key="idx" @click="edit(idx)">{{ d }}</li>
...
</template>

<script>
…
  const edit = (idx) => {
    const content = prompt("내용을 입력해주세요", state.data[idx]);
	    axios.put("/api/memos/" + idx, { content }).then((res) => {
      state.data = res.data;
    });
  }
...
</script>
…
```
**//api-server.js**<br/>
```
…
app.put("/api/memos/:idx", (req, res) => {
  memos[req.params.idx] = req.body.content;
  res.send(memos);
});
...
```
**14. MariaDB 설치**<br/>
- memo DB에 memos 테이블
 
**//CREATE문**<br/>
```
CREATE TABLE `memos` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`content` VARCHAR(500) NOT NULL COLLATE 'utf8mb3_general_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
```
- "메모 1 내용", "메모 2 내용", "메모 3 내용" 데이터 추가

**15. mariaDB 연동(참고: https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/)**<br/>
- database.js 파일 생성

**//database.js**<br/>
```
const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: '127.0.0.1', 
     user:'root', 
     password: 'hyun5292',
     connectionLimit: 5,
     database: 'memo'
});

module.exports = {
    run(query) {
        return new Promise((resolve) => {
            pool.getConnection()
            .then(conn => {
                conn.query(query)
                    .then((rows) => {
                        resolve(rows);
                        console.log(rows);
                    })
                    .catch(err => {
                        console.log(err); 
                        conn.end();
                    })
                    
            }).catch(err => {
                //not connected
            });
        });
    }
};
```
**//api-server.js**<br/>
```
…
const database = require("./database");
…
app.get('/api/memos', async (req, res) => {
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

app.post("/api/memos", async (req, res) => {
  await database.run(`INSERT INTO memos (content) VALUES ('${req.body.content}')`);
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

app.put("/api.memos/:id", async (req, res) => {
  await database.run(`UPDATE memos SET content = '${req.body.content}' WEHRE id = ${req.params.id}`);
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});
…
```
**//comMemo.vue**<br/>
```
<template>
…
    <li v-for="d in state.data" :key="d.id" @click="edit(d.id)">{{ d.content }}</li>

</template>

<script>
…
const add = () => {
  const content = prompt("내용을 입력해주세요");

  if(!content) {
    alert("내용을 입력해주세요.");
    return add();
  }

  axios.post("/api/memos", { content }).then((res) => {
    state.data = res.data;
  });
}

const edit = (id) => {
  const content = prompt("내용을 입력해주세요", state.data.find(d => d.id === id).content);

  axios.put("/api/memos/" + id, { content }).then((res) => {
    state.data = res.data;
  });
}
…
</script>
…
```
**16. SQL Injection 공격 방지**<br/>
**//api-server.js**<br/>
```
…
app.post("/api/memos", async (req, res) => {
  await database.run(`INSERT INTO memos (content) VALUES (?), [req.body.content]);
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});

app.put("/api.memos/:id", async (req, res) => {
  await database.run(`UPDATE memos SET content = ? WHERE id = ?`, req.body.content, req.params.id]);
  const result = await database.run("SELECT * FROM memos");
  res.send(result);
});
…
```
**17. 빌드하기**<br/>
- frontend 터미널에서 npm run build 실행
- frontend 파일에 생성된 dist 파일을 backend 파일로 이동
- Backend/api-server.js에 다음 추가 (참고: https://expressjs.com/ko/starter/static-files.html)
  -> app.use(express.static('dist'));<br/>
- http://localhost:3000/ 접속
**18. 그 이후 배포는 유료라서 추후 확인하는 것이 나을 듯...**<br/>

**+ 참고**<br/>
- netlify랑 mongoDB 배포 https://grownfresh.tistory.com/152 <br/>
F1 클릭 -> Preferences: Open Settings (JSON) -> 이것저것 설정

