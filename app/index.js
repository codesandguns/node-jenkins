let express = require("express");

let app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(process.env.PORT || 3000);
module.exports = app;
