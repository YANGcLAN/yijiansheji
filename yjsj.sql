SET NAMES UTF8;
DROP DATABASE  IF EXISTS yjsj;
CREATE DATABASE yjsj  CHARSET=UTF8;
USE yjsj;

CREATE TABLE demo(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(50),
  style VARCHAR(50),
  area	VARCHAR(50),
  room	VARCHAR(50),
  sjs	VARCHAR(50),
  img_url VARCHAR(255)
);
INSERT INTO demo VALUE
(null,"安吉缓山陈宅",
"新中式","300-500㎡","园林庭院","陈彤"
,"http://localhost:3000/img/case/5ac9e3c865bfb.jpg"),
(null,"官河锦庭",
"新中式","120-300㎡","门厅","邹柒"
,"http://localhost:3000/img/case/5ac9f3d58e0ae.jpg"),
(null,"上海提香别墅",
"欧式","120-300㎡","其他","程锡敏"
,"http://localhost:3000/img/case/5ac9ea4586ca9.jpg"),
(null,"西安枫林华府",
"简欧","120-300㎡","其他","程锡敏"
,"http://localhost:3000/img/case/5ac9eb472625a.jpg"),
(null,"郑州联盟新城",
"法式","300-500㎡","园林庭院","程锡敏"
,"http://localhost:3000/img/case/5ac9ebe6ca6dc.jpg"),
(null,"唯美品格棕榈滩",
"法式","300-500㎡","儿童房","陈彤"
,"http://localhost:3000/img/case/5ac9e6f62e9be.jpg"),
(null,"九溪玫瑰园",
"新中式","500-800㎡","厨房","陈彤"
,"http://localhost:3000/img/case/5ac9e32365acd.jpg"),
(null,"景瑞望府",
"法式","120-300㎡","景瑞望府","雷强"
,"http://localhost:3000/img/case/5ac9ec6159aa4.jpg"),
(null,"西安枫林华府",
"简欧","120-300㎡","其他","程锡敏"
,"http://localhost:3000/img/case/5ac9eb472625a.jpg"),
(null,"郑州联盟新城",
"法式","300-500㎡","园林庭院","程锡敏"
,"http://localhost:3000/img/case/5ac9ebe6ca6dc.jpg"),
(null,"安吉缓山陈宅",
"新中式","300-500㎡","园林庭院","陈彤"
,"http://localhost:3000/img/case/5ac9e3c865bfb.jpg"),
(null,"官河锦庭",
"新中式","120-300㎡","门厅","邹柒"
,"http://localhost:3000/img/case/5ac9e3c865bfb.jpg"),
(null,"上海提香别墅",
"欧式","120-300㎡","其他","程锡敏"
,"http://localhost:3000/img/case/5ac9ea4586ca9.jpg"),
(null,"西安枫林华府",
"简欧","120-300㎡","其他","程锡敏"
,"http://localhost:3000/img/case/5ac9eb472625a.jpg"),
(null,"郑州联盟新城",
"法式","300-500㎡","园林庭院","程锡敏"
,"http://localhost:3000/img/case/5ac9ebe6ca6dc.jpg");


CREATE TABLE ylsj_iamge(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url  VARCHAR(64),
    img_id  VARCHAR(64)
);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180057109008.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180063128368.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180070126608.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180082176946.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180096762953.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180106107635.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180107982931.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180117117799.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180137960942.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180154119744.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180166447100.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/1523180171119886.jpg",1);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/g-1.jpg",2);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/g-2.jpg",2);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/g-3.jpg",2);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/s-1.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/s-2.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/s-3.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/s-4.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/s-5.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/s-6.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/s-7.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/s-8.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/x-1.jpg",4);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/x-2.jpg",4);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/x-3.jpg",4);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/x-4.jpg",4);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/z-1.jpg",5);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/z-2.jpg",5);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-1.jpg",6);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-2.jpg",6);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-3.jpg",6);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-4.jpg",6);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-5.jpg",6);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-6.jpg",6);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-7.jpg",6);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-8.jpg",6);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/w-9.jpg",3);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/jx-1.jpg",7);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/jx-2.jpg",7);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/jx-3.jpg",7);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/jx-4.jpg",7);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/jx-5.jpg",7);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/jx-6.jpg",7);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/jx-7.jpg",7);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-1.jpg",8);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-2.jpg",8);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-3.jpg",8);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-4.jpg",8);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-5.jpg",8);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-6.jpg",8);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-7.jpg",8);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-8.jpg",8);
INSERT INTO ylsj_iamge VALUES(null,"http://127.0.0.1:3000/img/yl/j-9.jpg",8);









CREATE TABLE team_jieshao (
  uid INT PRIMARY KEY AUTO_INCREMENT,
  img varchar(128), 
  job varchar(128),
  uname varchar(64),
  school varchar(64),
  count varchar(128),
  sheji varchar(228)
);

INSERT INTO team_jieshao VALUES(1,"http://127.0.0.1:3000/img/wc/jieshao_1.jpg","设计总监","陈彤","毕业于加拿大拉萨尔设计学院室内设计专业","从事设计工作25年。主要设计案例遍布上海，杭州，绍兴，南京，昆明等地。","用独特的眼光发现并发掘空间本身的美，并使其发扬光大。特别在别墅项目设计过程中，始终追求大气，典雅，实用的效果，相信“数大便是美”，并使该理念自然贯穿于设计始终。");
INSERT INTO team_jieshao VALUES(2,"http://127.0.0.1:3000/img/wc/jieshao_2.jpg","设计总监","程锡敏","国家室内高级建筑师,上海建筑与室内设计师俱乐部委员 ,钛马赫（中国）别墅室内设计师","首届设计师博客大赛设计师代表,首届大金公寓内装设计大赛三等奖","挖掘空间附加值，简约而美丽，和谐点滴间景物，经典而实用。");
INSERT INTO team_jieshao VALUES(3,"http://127.0.0.1:3000/img/wc/jieshao_3.jpg","设计总监","赵珊","毕业于加拿大拉萨尔设计学院室内设计专业","设计过程是通过设计师的专业知识和经验了解业主的要求,起居饮食和个性.要引起共鸣,站在他们的角度,以他们使用心态为蓝本,才能达到雅俗共赏的效果.","在这样一个瞬息万变的时代,精致和简约就是一种”奢华”。");
INSERT INTO team_jieshao VALUES(4,"http://127.0.0.1:3000/img/wc/jieshao_4.jpg","主案设计师","雷强","09年毕业于湖北城建学院建筑装饰专业","从事设计工作8年，具有较丰富的从业经验，擅长现代，简欧，新中式等设计风格。","设计是一种感受、一种心态、一种舒适的、开心的生活方式.");
INSERT INTO team_jieshao VALUES(5,"http://127.0.0.1:3000/img/wc/jieshao_5.jpg","首席设计师","邹柒","毕业于南京信息工程大学多媒体设计学专业","从业年限：9年。主要设计案例遍布上海，杭州，绍兴，南京，昆明等地。","设计不是一种技能，而是捕捉事物本质的感觉能力和洞察能力，这种能力建立的“家”的意义重于设计本身的意义。");
INSERT INTO team_jieshao VALUES(6,"http://127.0.0.1:3000/img/wc/jieshao_6.jpg","工装设计总监","雷荣建","毕业于江南大学，环境艺术系专业","从事设计工作有8年，作品遍布全国","用独特的眼光发现并发掘空间本身的美，并使其发扬光大。特别在别墅项目设计过程中，始终追求大气，典雅，实用的效果，相信“数大便是美”，并使该理念自然贯穿于设计始终。");


CREATE TABLE team_lun (
  lid INT PRIMARY KEY AUTO_INCREMENT,
  img_center_1 varchar(128),
  img_center_2 varchar(128),
  img_left_1 varchar(128),
  img_left_2 varchar(128),
  img_left_3 varchar(128),
  img_right_1 varchar(128),
  img_right_2 varchar(128),
  img_right_3 varchar(128), 
  img_tou varchar(128), 
  job varchar(128),
  uname varchar(64),
  href varchar(128)
);
INSERT INTO team_lun VALUES(1,"http://127.0.0.1:3000/img/wc/team6_1.jpg","http://127.0.0.1:3000/img/wc/team6_2.jpg","http://127.0.0.1:3000/img/wc/team6_3.jpg","http://127.0.0.1:3000/img/wc/team6_4.jpg","http://127.0.0.1:3000/img/wc/team6_5.jpg","http://127.0.0.1:3000/img/wc/team6_6.jpg","http://127.0.0.1:3000/img/wc/team6_7.jpg","http://127.0.0.1:3000/img/wc/team6_8.jpg","http://127.0.0.1:3000/img/wc/teamb1.jpg","工装设计总监","雷荣建","jieshao.html?lid=6");  

INSERT INTO team_lun VALUES(2,"http://127.0.0.1:3000/img/wc/team1_1.jpg","http://127.0.0.1:3000/img/wc/team1_2.jpg","http://127.0.0.1:3000/img/wc/team1_3.jpg","http://127.0.0.1:3000/img/wc/team1_4.jpg","http://127.0.0.1:3000/img/wc/team1_5.jpg","http://127.0.0.1:3000/img/wc/team1_6.jpg","http://127.0.0.1:3000/img/wc/team1_7.jpg","http://127.0.0.1:3000/img/wc/team1_8.jpg","http://127.0.0.1:3000/img/wc/teamb2.jpg","设计总监","陈彤","jieshao.html?lid=1");  

INSERT INTO team_lun VALUES(3,"http://127.0.0.1:3000/img/wc/team2_1.jpg","http://127.0.0.1:3000/img/wc/team2_2.jpg","http://127.0.0.1:3000/img/wc/team2_3.jpg","http://127.0.0.1:3000/img/wc/team2_4.jpg","http://127.0.0.1:3000/img/wc/team2_5.jpg","http://127.0.0.1:3000/img/wc/team2_6.jpg","http://127.0.0.1:3000/img/wc/team2_7.jpg","http://127.0.0.1:3000/img/wc/team2_8.jpg","http://127.0.0.1:3000/img/wc/teamb3.jpg","设计总监","程锡敏","jieshao.html?lid=2");  

INSERT INTO team_lun VALUES(4,"http://127.0.0.1:3000/img/wc/team3_1.jpg","http://127.0.0.1:3000/img/wc/team3_2.jpg","http://127.0.0.1:3000/img/wc/team3_3.jpg","http://127.0.0.1:3000/img/wc/team3_4.jpg","http://127.0.0.1:3000/img/wc/team3_5.jpg","http://127.0.0.1:3000/img/wc/team3_6.jpg","http://127.0.0.1:3000/img/wc/team3_7.jpg","http://127.0.0.1:3000/img/wc/team3_8.jpg","http://127.0.0.1:3000/img/wc/teamb4.jpg","设计总监","赵珊","jieshao.html?lid=3");  

INSERT INTO team_lun VALUES(5,"http://127.0.0.1:3000/img/wc/team4_1.jpg","http://127.0.0.1:3000/img/wc/team4_2.jpg","http://127.0.0.1:3000/img/wc/team4_3.jpg","http://127.0.0.1:3000/img/wc/team4_4.jpg","http://127.0.0.1:3000/img/wc/team4_5.jpg","http://127.0.0.1:3000/img/wc/team4_6.jpg","http://127.0.0.1:3000/img/wc/team4_7.jpg","http://127.0.0.1:3000/img/wc/team4_8.jpg","http://127.0.0.1:3000/img/wc/teamb5.jpg","主案设计师","雷强","jieshao.html?lid=4"); 

INSERT INTO team_lun VALUES(6,"http://127.0.0.1:3000/img/wc/team5_1.jpg","http://127.0.0.1:3000/img/wc/team5_2.jpg","http://127.0.0.1:3000/img/wc/team5_3.jpg","http://127.0.0.1:3000/img/wc/team5_4.jpg","http://127.0.0.1:3000/img/wc/team5_5.jpg","http://127.0.0.1:3000/img/wc/team5_6.jpg","http://127.0.0.1:3000/img/wc/team5_7.jpg","http://127.0.0.1:3000/img/wc/team5_8.jpg","http://127.0.0.1:3000/img/wc/teamb6.jpg","首席设计师","邹柒","jieshao.html?lid=5"); 

INSERT INTO team_lun VALUES(7,"http://127.0.0.1:3000/img/wc/team6_1.jpg","http://127.0.0.1:3000/img/wc/team6_2.jpg","http://127.0.0.1:3000/img/wc/team6_3.jpg","http://127.0.0.1:3000/img/wc/team6_4.jpg","http://127.0.0.1:3000/img/wc/team6_5.jpg","http://127.0.0.1:3000/img/wc/team6_6.jpg","http://127.0.0.1:3000/img/wc/team6_7.jpg","http://127.0.0.1:3000/img/wc/team6_8.jpg","http://127.0.0.1:3000/img/wc/teamb1.jpg","工装设计总监","雷荣建","jieshao.html?lid=6");

INSERT INTO team_lun VALUES(8,"http://127.0.0.1:3000/img/wc/team1_1.jpg","http://127.0.0.1:3000/img/wc/team1_2.jpg","http://127.0.0.1:3000/img/wc/team1_3.jpg","http://127.0.0.1:3000/img/wc/team1_4.jpg","http://127.0.0.1:3000/img/wc/team1_5.jpg","http://127.0.0.1:3000/img/wc/team1_6.jpg","http://127.0.0.1:3000/img/wc/team1_7.jpg","http://127.0.0.1:3000/img/wc/team1_8.jpg","http://127.0.0.1:3000/img/wc/teamb2.jpg","设计总监","陈彤","jieshao.html?lid=1");

CREATE TABLE new_info(
  id INT PRIMARY KEY AUTO_INCREMENT, 
  new_type VARCHAR(56),
  title VARCHAR(56),
  img_url VARCHAR(255),
  new_time VARCHAR(56)
);
INSERT INTO new_info VALUES
(1,'公司新闻','女神节',"http://127.0.0.1:3000/img/news/5ac47b8a1d598.jpg",'2018.4.04'),
(2,'公司新闻','年会聚餐',"http://127.0.0.1:3000/img/news/5ac47b4b07370.jpg",'2018.4.04'),
(3,'公司新闻','金华活动',"http://127.0.0.1:3000/img/news/5ac47ae9abe48.jpg",'2018.4.04'),
(4,'公司新闻','桐庐拓展训练',"http://127.0.0.1:3000/img/news/5aaf7058c37e0.jpg",'2018.2.10'),
(5,'公司新闻','引进航拍机',"http://127.0.0.1:3000/img/news/5aaf6fe082561.jpg",'2018.2.10'),
(6,'公司新闻','引进交互电视系统',"http://127.0.0.1:3000/img/news/5aaf6ee0490c2.jpg",'2018.2.10');

CREATE TABLE new_img(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url2 VARCHAR(255),
  uid INT
);
INSERT INTO new_img VALUES
(1,'http://127.0.0.1:3000/img/guanyu/5ac47b8a1d598.jpg',1),
(2,'http://127.0.0.1:3000/img/guanyu/1522826093137701.jpg',2),
(3,'http://127.0.0.1:3000/img/guanyu/1522826093679600.jpg',2),
(4,'http://127.0.0.1:3000/img/guanyu/1522826093861324.jpg',2),
(5,'http://127.0.0.1:3000/img/guanyu/1522826010122984.jpg',3),
(6,'http://127.0.0.1:3000/img/guanyu/1522826010413965.jpg',3),
(7,'http://127.0.0.1:3000/img/guanyu/1522826011359143.jpg',3),
(8,'http://127.0.0.1:3000/img/guanyu/1522826011318392.jpg',3),
(9,'http://127.0.0.1:3000/img/guanyu/1522826011653351.jpg',3),
(10,'http://127.0.0.1:3000/img/guanyu/1522812908527612.jpg',4),
(11,'http://127.0.0.1:3000/img/guanyu/1522812908131182.jpg',4),
(12,'http://127.0.0.1:3000/img/guanyu/1522812908671209.jpg',4),
(13,'http://127.0.0.1:3000/img/guanyu/1522812909111921.jpg',4),
(14,'http://127.0.0.1:3000/img/guanyu/1522812912965461.jpg',4),
(15,'http://127.0.0.1:3000/img/guanyu/1522812912120424.jpg',4),
(16,'http://127.0.0.1:3000/img/guanyu/1522812915276048.jpg',4),
(17,'http://127.0.0.1:3000/img/guanyu/1522813207139853.jpg',5),
(18,'http://127.0.0.1:3000/img/guanyu/1522813207744449.jpg',5),
(19,'http://127.0.0.1:3000/img/guanyu/1522813208680074.jpg',5),
(20,'http://127.0.0.1:3000/img/guanyu/1521446733709163.jpg',6);


CREATE TABLE team_zuopin (
  zid INT PRIMARY KEY AUTO_INCREMENT,
  zuopin_id varchar(64),
  pid varchar(64),
  img varchar(128), 
  zuopin varchar(128),
  uname varchar(64)
);

INSERT INTO team_zuopin VALUES(1,1,1,"http://127.0.0.1:3000/img/wc/zuopin1_1.jpg","安吉缓山陈宅","设计师：陈彤");
INSERT INTO team_zuopin VALUES(2,1,1,"http://127.0.0.1:3000/img/wc/zuopin1_2.jpg","九溪玫瑰园谭总","设计师：陈彤");
INSERT INTO team_zuopin VALUES(3,1,1,"http://127.0.0.1:3000/img/wc/zuopin1_3.jpg","四季园季总","设计师：陈彤");
INSERT INTO team_zuopin VALUES(4,1,1,"http://127.0.0.1:3000/img/wc/zuopin1_4.jpg","望府何总","设计师：陈彤");
INSERT INTO team_zuopin VALUES(5,1,1,"http://127.0.0.1:3000/img/wc/zuopin1_5.jpg","唯美品格棕榈滩倪总","设计师：陈彤");
INSERT INTO team_zuopin VALUES(6,1,1,"http://127.0.0.1:3000/img/wc/zuopin1_6.jpg","西溪明珠章总","设计师：陈彤");
INSERT INTO team_zuopin VALUES(7,2,2,"http://127.0.0.1:3000/img/wc/zuopin2_1.jpg","汇讯科技办公","设计师：程锡敏");
INSERT INTO team_zuopin VALUES(8,2,2,"http://127.0.0.1:3000/img/wc/zuopin2_2.jpg","上海提香别墅","设计师：程锡敏");
INSERT INTO team_zuopin VALUES(9,2,2,"http://127.0.0.1:3000/img/wc/zuopin2_3.jpg","西安枫林华府","设计师：程锡敏");
INSERT INTO team_zuopin VALUES(10,2,2,"http://127.0.0.1:3000/img/wc/zuopin2_4.jpg","郑州联盟新城","设计师：程锡敏");
INSERT INTO team_zuopin VALUES(11,3,3,"http://127.0.0.1:3000/img/wc/zuopin3_1.jpg","富春玫瑰园蓝玫苑4-101","设计师：赵珊");
INSERT INTO team_zuopin VALUES(12,3,3,"http://127.0.0.1:3000/img/wc/zuopin3_2.jpg","富春玫瑰园林枫苑1-103","设计师：赵珊");
INSERT INTO team_zuopin VALUES(13,3,3,"http://127.0.0.1:3000/img/wc/zuopin3_3.jpg","富阳清原  上林湖涵珠雅苑","设计师：赵珊");
INSERT INTO team_zuopin VALUES(14,3,3,"http://127.0.0.1:3000/img/wc/zuopin3_4.jpg","景江城市花园","设计师：赵珊");
INSERT INTO team_zuopin VALUES(15,4,4,"http://127.0.0.1:3000/img/wc/zuopin4_1.jpg","景瑞望府","设计师：雷强");
INSERT INTO team_zuopin VALUES(16,4,4,"http://127.0.0.1:3000/img/wc/zuopin4_2.jpg","昆仑府","设计师：雷强");
INSERT INTO team_zuopin VALUES(17,4,4,"http://127.0.0.1:3000/img/wc/zuopin4_3.jpg","绍兴自建别墅","设计师：雷强");
INSERT INTO team_zuopin VALUES(18,5,5,"http://127.0.0.1:3000/img/wc/zuopin5_1.jpg","官河锦庭","设计师：邹柒");
INSERT INTO team_zuopin VALUES(19,5,5,"http://127.0.0.1:3000/img/wc/zuopin5_2.jpg","湖州·龙山泰景","设计师：邹柒");
INSERT INTO team_zuopin VALUES(20,5,5,"http://127.0.0.1:3000/img/wc/zuopin5_3.jpg","绿城·蓝庭","设计师：邹柒");
INSERT INTO team_zuopin VALUES(21,5,5,"http://127.0.0.1:3000/img/wc/zuopin5_4.jpg","萧山·临水苑","设计师：邹柒");
INSERT INTO team_zuopin VALUES(22,5,5,"http://127.0.0.1:3000/img/wc/zuopin5_5.jpg","中海·寰宇天下","设计师：邹柒");
INSERT INTO team_zuopin VALUES(23,6,6,"http://127.0.0.1:3000/img/wc/zuopin6_1.jpg","常山年代KTV","设计师：雷荣建");
INSERT INTO team_zuopin VALUES(24,6,6,"http://127.0.0.1:3000/img/wc/zuopin6_2.jpg","福清新中式办公室","设计师：雷荣建");
INSERT INTO team_zuopin VALUES(25,6,6,"http://127.0.0.1:3000/img/wc/zuopin6_3.jpg","杭州桃初儿童培训班","设计师：雷荣建");
INSERT INTO team_zuopin VALUES(26,6,6,"http://127.0.0.1:3000/img/wc/zuopin6_4.jpg","杭州余杭黄湖厂房","设计师：雷荣建");
INSERT INTO team_zuopin VALUES(27,6,6,"http://127.0.0.1:3000/img/wc/zuopin6_5.jpg","开化KTV","设计师：雷荣建");
INSERT INTO team_zuopin VALUES(28,6,6,"http://127.0.0.1:3000/img/wc/zuopin6_6.jpg","上海餐饮","设计师：雷荣建");
