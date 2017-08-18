/**
 * Created by yujuan on 17-8-18.
 */
const express = require('express');

const app = express();

app.use(express.static('./public'));

app.listen(4000, function () {
  console.log("app listening on port 4000!");
});