const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

const port = 3003



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
