const express = require("express");
const router = express.Router();
const connect = require("./connect");
const newsData = require("./data/news.json");


router.post("/login", function(req, res) {
    
    const sql = "select * from user where `username`=? and `password`=?";
    
    const username = req.body.username;
    const password = req.body.password;
    const paramsArr = [username, password]
    connect(sql, paramsArr, function(result) {
        if (result.length > 0) {
            res.send({
                userinfo:result,
                token:'DFGSERGDFG4G3GDFERG3'
            });
        } else {
            res.send({
                msg: "查询失败,用户名密码不存在"
            })
        }
    })

})

router.post("/register", function(req, res) {
    const sql = "insert into user values(null,?,?)";
    const username = req.body.username;
    const password = req.body.password;
    const paramsArr = [username, password]
    connect(sql, paramsArr, function(result) {
        if (result.affectedRows > 0) {
            res.send({
                msg: "注册成功"
            })
        } else {
            res.send({
                msg: "注册失败"
            })
        }
    })
})


router.get("/news", function(req, res) {
    res.send(newsData)
})

module.exports = router;