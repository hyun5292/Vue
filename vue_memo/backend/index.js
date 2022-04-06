const express = require('express')
const app = express()
const port = 3000

const memos = ["메모 1 내용", "메모 2 내용", "메모 3 내용", "메모 4 내용", "메모 5 내용"];

app.get('/api/memos', (req, res) => {
  res.send(memos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})