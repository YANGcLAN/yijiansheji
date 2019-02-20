const express=require('express');
const bodyParser = require('body-parser');
const pool = require("./pool.js");
const cors = require("cors");

const app=express();

app.listen(3000,function(){
	console.log("服务器创建成功");
});

app.use(cors({
    origin:["http://127.0.0.1:3000",
    "http://localhost:3000"],
    credentials:true
}));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended:false
}));

app.get("/select",(req,res)=>{
	//1:获取参数
 var pno = req.query.pno;
 var pageSize = req.query.pageSize;
 if(!pno){pno = 1}
 if(!pageSize){pageSize=6}
  //3:创建正则表达式验证用户输入验证
 var reg = /^[1-6]{1}$/;
 //4:如果错出停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return; 
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }
var progress = 0;
 var obj = {code:1};
 //5:创建sql1 查询总记录数   严格区分大小写
 var sql = "SELECT count(cid) AS c FROM demo";
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
 var sql =" SELECT *";
     sql+=" FROM demo";
     sql+=" LIMIT ?,?";
 var offset = parseInt((pno-1)*pageSize);
     pageSize = parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
 })
})
app.get("/selectAll",(req,res)=>{
  var style = req.query.style;
  var area = req.query.area;
  var room = req.query.room;
  if(room=="全部" && style=="全部" && area == "全部"){
    var sql = "select * from demo LIMIT 1,6";
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      res.send(result);
      return;
    });
  }
   else if(room=="全部" && style=="全部"){
    var sql = "select * from demo where area=?";
    pool.query(sql,[area],(err,result)=>{
      if(err)throw err;
      console.log(result,2);
      res.send(result);
      return;
    });
  }
  else if(area=="全部" && style=="全部"){
    var sql = "select * from demo where room=?";
    pool.query(sql,[room],(err,result)=>{
      if(err)throw err;
      console.log(result,3);
      res.send(result);
      return;
    });
  }
  else if(room=="全部" && area=="全部"){
    var sql = "select * from demo where style=?";
    pool.query(sql,[style],(err,result)=>{
      if(err)throw err;
      console.log(result,4);
      res.send(result);
      return;
    });
  }
  else if(room=="全部"){
    var sql = "select * from demo where style=? and area=?";
    pool.query(sql,[style,area],(err,result)=>{
      if(err)throw err;
      console.log(result,5);
      res.send(result);
      return;
    });
  }
  else if(style=="全部"){
    var sql = "select * from demo where room=? and area=?";
    pool.query(sql,[room,area],(err,result)=>{
      if(err)throw err;
      console.log(result,6);
      res.send(result);
      return;
    });
  }
  else if(area=="全部"){
    var sql = "select * from demo where style=? and room=?";
    pool.query(sql,[style,room],(err,result)=>{
      if(err)throw err;
      console.log(result,7);
      res.send(result);
      return;
    });
  }
  else{
    var sql = "select * from demo where room=? and area=? and style=?";
    pool.query(sql,[room,area,style],(err,result)=>{
      if(err)throw err;
      console.log(result,8);
      res.send(result);
      return;
    });
  }
  
})
app.get("/newinfo",(req,res)=>{
  var sql="SELECT * FROM new_info";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
})

app.get('/newimg',(req,res)=>{
  var id=req.query.id;
  var sql='SELECT * FROM new_img ,new_info WHERE new_img.uid=new_info.id and new_info.id=?';
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
})

app.get("/details",(req,res)=>{
  //获取参数，传递id
  var id=req.query.cid;
  console.log(id);
  //sql
  var sql="SELECT d.cname,y.img_url,d.style,d.area,d.room,j.img,j.uname,j.sheji ";
  sql+=" FROM team_jieshao j,demo d,ylsj_iamge y ";
  sql+=" WHERE d.cid=? AND d.sjs=j.uname AND d.cid=y.img_id "
  pool.query(sql,[id],(err,result)=>{
      if(err) throw err;
      res.send(result);
  });
});

app.get("/lun",(req,res)=>{
  //var lid=req.query.lid;   
   var sql=" select * from team_lun";
   //3 json  
   pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send({code:1,data:result});
   }) 
})


app.get("/jieshao",(req,res)=>{
  var uid = req.query.uid;
  var sql = " SELECT * FROM team_jieshao WHERE uid = ?";
  pool.query(sql,[uid],(err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result});
  });
});


app.get("/zuopin",(req,res)=>{
  //1:获取参数 uname,upwd
  var lid = req.query.lid;
  //3:创建sql
  var sql =" SELECT z.zid,z.zuopin_id,z.img,z.uname,z.zuopin, ";
  sql +=" j.job,j.school,j.count";
  sql +=" FROM team_jieshao j,";
  sql +=" team_zuopin z";
  sql +=" WHERE j.uid = z.zuopin_id";
  sql +=" AND z.pid = ?";
  lid = parseInt(lid);
  pool.query(sql,[lid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
  });
  //4:返回结果
})
