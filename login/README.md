# JWT를 이용하여 로그인 애플리케이션 만들기
## 경로: https://www.youtube.com/watch?v=JR0jSscNNd4&list=PLtht1_et-35AQSnfVkqkjdfhBX_P-9U4-&index=3
*사진 다음에 필기 있음*
<img src="https://github.com/hyun5292/Vue/blob/main/login/frontend/src/assets/%EB%A9%94%EC%9D%B8.png?raw=true"  width="100%"/><br/>
<img src="https://github.com/hyun5292/Vue/blob/main/login/frontend/src/assets/%EB%A1%9C%EA%B7%B8%EC%9D%B8_%EC%84%B1%EA%B3%B5.png?raw=true"  width="100%"/><br/>
<img src="https://github.com/hyun5292/Vue/blob/main/login/frontend/src/assets/%EB%A1%9C%EA%B7%B8%EC%9D%B8_after.png?raw=true"  width="100%"/><br/>
<img src="https://github.com/hyun5292/Vue/blob/main/login/frontend/src/assets/%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83.png?raw=true"  width="100%"/><br/>
------
**1. Vue CLI 설치 (참고: https://cli.vuejs.org/#getting-started)**<br/>
**2. 파일 생성**<br/>
- login 파일 생성
- 터미널 frontend 생성<br/>
-> vue create frontend 실행<br/>
- 터미널 backend 생성<br/>
-> mkdir backend<br/>
-> npm init<br/>
- backend 파일 안에 api-server.js 파일 생성<br/>

**3. express 설치 (참고: https://expressjs.com/ko/starter/installing.html)**<br/>
- backend 터미널에서 npm install express
- Hello World 테스트
**//api-server.js**
```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log();
});
```
-> http://localhost:3000/ 접속<br/>
**4. App.vue 초기화**<br/>
**//App.vue**
```
<template>
  <div class="app">
    <div v-if="state.loggedIn">안녕하세요? 홍길동님</div>
    <div v-else>
      <label for="loginId">
        <sapn>아이디</span>
        <input type="text" id="loginId" />
      </label>
      <label for="loginPw">
        <span>패스워드</span>
        <input type="password"  id="loginPw" />
      </label>
      <hr />
     <button>로그인</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      loggedIn: false
    })

    return { state, };
  }
}
</script>
```
**5. axios 설치**<br/>
- frontend 터미널에서 npm i axios 실행
- vue에서 proxy 설정으로 CORS 해결(참고: https://genie247.tistory.com/116)
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
**6. bodyParser 설치 (참고: https://www.npmjs.com/package/body-parser)**<br/>
- backend 터미널에서 npm i body-parser 실행
**//api-server.js**<br/>
```
…
const bodyParser = require("body-parser");
…
app.use(bodyParser.json());
…
```
**7. 서버랑 연결하기**<br/>
**//api-server.js**<br/>
```
…
const members = [
  {
    id: 3,
    name: "도서관",
    loginId: "lib",
    loginPw: "africa"
  },
  {
    id:4,
    name: "홍길동",
    loginId: "a",
    loginPw: "1"
  }
];

app.use(bodyParser.json());

app.get('/api/account', (req, res) => {
  res.send(401);
});

app.post('/api/account', (req, res) => {
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;

  const member = members.find(m => m.loginId = loginId && m.loginPw === loginPw);

  if(member) {
    res.send(member);
  } else {
    res.send(404);
  } 
});
…
```
**//App.vue**<br/>
```
<template>
  <div class="app">
    <div v-if="state.account.id">안녕하세요? {{ state.account.name }}님</div>
    <div v-else>
      <label for="loginId">
        <span>아이디</span>
        <input type="text" id="loginId" v-model="state.form.loginId" />
      </label>
      <label for="loginPw">
        <span>패스워드</span>
        <input type="password" id="loginPw" v-model="state.form.loginPw" />
      </label>
      <hr />
      <button @clilck="submit()">로그인</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      account: {
        id: null,
        name: "",
      },
      form: {
        loginId: "",
        loginPw: "",
      }
    });
    
    const submit = () => {
      const args = {
        loginId: state.form.loginId,
        loginPw: state.form.loginPw
      };

      axios.post("/api/account", args).then((res) => {
        alert("로그인에 성공했습니다.");
        state.account = res.data;
      }).catch(() => {
        alert("로그인에 실패했습니다. 계정 정보를 확인해주세요.");
      });
    };
    
    axios.get("/api/account").then((res) => {
      state.account = res.data;
    });

    return { state, submit, };
  },
}
</script>
```
**8. cookie-parser 설치**<br/>
- 로그인 된 정보를 저장해야 새로 고침 해도 로그인이 유지됨
- backend 터미널에 npm i cookie-parser 실행
**//api-server.js**<br/>
```
…
const cookieParser = require('cookie-parser');
…
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/api/account', (req, res) => {
  if(req.cookies && req.cookies.account) {
    const member = JSON.parse(req.cookies.account);

    if(member.id) {
      return res.send(member);
    }
  }
  res.send(401);
});

app.post('/api/account', (req, res) => {
  …
  if(member) {
    const options = {
      domain: "localhost",
      path: "/",
      httpOnly: true,
    };
    res.cookie("account", JSON.stringify(member), options);
    res.send(member);
  }
  …
});
…
```
**9. JWT 설치**<br/>
- 로그인 보안 관련
- backend 터미널에서 npm i jsonwebtoken 설치

**//api-server.js**<br/>
```
…
app.get('/api/account', (req, res) => {
  if(req.cookies && req.cookies.token) {
    jwt.verify(req.cookies.token, "abc1234567", (err, decoded) => {
      if(err) {
        return res.send(401);
      }
      res.send(decoded);
    });
  } else {
    res.send(401);
  }
});

app.post('/api/account', (req, res) => {
  …
  if(member) {
    …
    //첫 번째는 멤버에 대한 객체 정보
    //두 번째는 임의의 암호화 키
    //세 번째는 JWT 토큰이 언제까지 유효한지
  const token = jwt.sign({
    id: member.id,
    name: member.name,
  }, "abc1234567", {
    expiresIn: "15m",
    issuer: "africalib"
  });
  res.cookie("token", token, options);
  …
```
**10. 로그아웃**<br/>
**//App.vue**<br/>
```
<template>
  …
  <div v-if="state.account.id">
    안녕하세요? {{ state.account.name }}님
   <button @click="logout()">로그아웃</button>
  </div>
  ...
</template>

<script>
…
 const logout = () => {
    axios.delete("/api/account").then(() => {
      alert("로그아웃 되었습니다.");
      state.account.id = id;
      state.account.name = name;
      state.form.loginId = "";
      state.form.loginPw = "";
    });
  };
...
</script>
```
**//api-server.js**<br/>
```
…
app.get('/api/account', (req, res) => {
…
else {
  res.sendStatus(401);
}
…
});

app.delete('/api/account', (req, res) => {
  if(req.cookies && req.cookies.token) {
    res.clearCookie("token");
  }
  res.sendStatus(200);
});
```
