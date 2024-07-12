const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const app = express()

const port = 3003
nunjucks.configure(["views","node_modules/govuk-frontend/dist","assets"],{
  express:app,
  autoescape: true
});

app.use(express.static("assets"))
app.use("/govuk-assets",express.static("node_modules/govuk-frontend/dist"))
//app.use('/assets', express.static(path.join(__dirname, '/node_modules/govuk-frontend/dist/govuk/assets')))
app.set("view engine", "html")

app.get('/', (req, res) => {
  res.render('index.html', {
    time:Date.now()

  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
