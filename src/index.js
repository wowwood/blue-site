const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()

const port = 3003
nunjucks.configure(["views","node_modules/govuk-frontend/dist","assets","node_modules/@ministryofjustice/frontend"],{
  express:app,
  autoescape: true
});

app.use(express.static("assets"))
app.use("/govuk-assets",express.static("node_modules/govuk-frontend/dist"))
app.use("/moj-assets", express.static("node_modules/@ministryofjustice/frontend/moj/"))
app.set("view engine", "html")

app.get('/', (req, res) => {
  res.render('index.html', {
  })
})

app.get('/names', (req, res) => {
  res.render('names.html', {
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
