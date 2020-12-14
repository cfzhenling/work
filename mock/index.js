const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api",router);

app.listen(3000,function(){
    console.log(3000);
})