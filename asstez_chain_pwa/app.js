const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.render('./index.html');
});

app.listen(8080);