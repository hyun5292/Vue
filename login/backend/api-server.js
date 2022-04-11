const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const members = [
    {
        id: 3,
        name: "도서관",
        loginId: "lib",
        loginPw: "africa"
    },
    {
        id: 4,
        name: "홍길동",
        loginId: "a",
        loginPw: "1"
    },
];

app.use(bodyParser.json());

app.get('/api/account', (req, res) => {
  res.send(401);
});

app.post('/api/account', (req, res) => {
    const loginId = req.body.loginId;
    const loginPw = req.body.loginPw;

    const member = members.find(m => m.loginId === loginId && m.loginPw === loginPw);

    if(member) {
        res.send(member);
    } else {
        res.send(404);
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});