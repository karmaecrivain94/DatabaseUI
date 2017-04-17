var express = require('express')
var app = express()

app.use(express.static('public'))
app.get("/", function(req, res, next) {
    res.sendfile("public/html/index.html")
})
app.get("/p", function(req, res, next) {
    res.sendfile("public/html/PoliticianPage.html")
})
app.listen(80, function () {
  console.log('Example app listening on port 3000!')
})
app.use(function (req, res, next) {
  res.status(404).sendfile("public/html/404.html")
})