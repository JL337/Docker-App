var express = require('express');
var app = express();
var path = require('path');

app.get('/' , function(req,res){
  res.sendfile('index.html');
});

app.listen(3000 , function(){
  console.log('app is listening');
})