var express = require("express");
var app = express(); //產生express app物件
app.get("/", function(req, res){//當使用者連線到伺服器的根目錄時("/")做出回應
    res.send("hi");
});
app.get("/a", function(req, res){//當使用者連線到伺服器 /a 做出的回應
    res.send("hiiiii");
});
app.listen(3000, function(){
    console.log("伺服器已啟動 http://localhost:3000/")
});