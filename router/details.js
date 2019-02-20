
const pool=require("../pool.js");
const express=require('express');
var router=express.Router();

//
router.get("/details",(req,res)=>{
    //获取参数，传递id
    var id=req.query.id;
    //sql
    var sql="SELECT d.cname,y.img_url,d.style,d.area,d.room,j.img,j.uname,j.sheji ";
    sql+=" FROM team_jieshao j,demo d,ylsj_iamge y ";
    sql+=" WHERE d.sjs=j.uname AND d.cid=y.img_id And d.cid=?"
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});
module.exports=router;