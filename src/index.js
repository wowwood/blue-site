const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()

const port = 3003
nunjucks.configure(["views","node_modules/govuk-frontend/dist","assets","node_modules/@ministryofjustice/frontend","favicon"],{
  express:app,
  autoescape: true
});

app.use(express.static("assets"))
app.use("favicon", express.static("favicon"))
app.use("/govuk-assets",express.static("node_modules/govuk-frontend/dist"))
app.use("/moj-assets", express.static("node_modules/@ministryofjustice/frontend/moj/"))
app.set("view engine", "html")

app.get('/', (req, res) => {
  res.render('index.html', {
  })
})

app.get('/me', (req, res) => {
  res.render('me.html', {
  })
})

app.get('/posts', (req, res) => {
  res.render('posts.html', {
  })
})

app.get('/posts/post-1', (req, res) => {
  res.render('posts/post-1.html', {
  })
})

app.listen(port, () => {
  console.log(`Bloo is on the interwebs - use port ${port}`)
})
