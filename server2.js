/**
 * Created by yujuan on 17-8-18.
 */
const express = require('express');

const app = express();

//使用CORS进行跨域访问
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/show-data', function (req, res) {
  res.status(200).json({name: 'Marry'});
});

app.listen(4001, function () {
  console.log("app listening on port 4001!");
});