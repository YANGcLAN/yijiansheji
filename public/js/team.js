
setTimeout(function(){


    $(document).ready(function(){ 
       $(function() {
       
         (function($){
             var app = function(el, userConfig) {
                   var _this = this;
                   this.el = el;
                   // 参数配置
                   this.userConfig = userConfig;
                   this.config = {
                     w:1423,  //轮播的宽度
                     current: 0,
                     speed: 300,
                     time: 5000    
                     }    
               var num=_this.config.current;  //个数
               var tran=_this.config.speed;    //动画时间
               var width=_this.config.w;       //图片宽度
               var s=_this.config.time;        //定时器
               if(userConfig != null) {
                 $.extend(this.config,this.userConfig);
               }     
               // 保存查找元素
               var app=$("#app");
               var lun=$(".team_sec");
               var ul=$(".scroller");
               var li=$(".room");
               // 初始化左右按钮
               var btn_l=$(".btn--nav-left");
               var btn_r=$(".btn--nav-right");
               // 初始化圆点
               var dian=$(".team_box");
               var dian_img=$(".team_box_img");
               var li_len = li.length;
               //var atv=$(".team_box_img.active:before");
               //console.log(dian_img);
               //  为第一个轮播图片添加样式
               $("#app .room:nth-child(2)").addClass(".room--current");//room第2个加 room--current
               $(".slide__title").addClass('a1');
               $(".slide__date").addClass('a3');
               $(".team_btn").addClass('a2');
               $("#app .team_box_img:nth-child(1)").addClass(' active');    //头像第一个加active
             
               // 初始化默认显示图片位置
               ul.css('left', - width * num - width);
               // 圆点切换点亮    
               var active = function(i) {    
                 dian_img.removeClass('active').eq(i).addClass('active')       
               }     
             // $(".slide__title").addClass('a1');   
                
               var a=function(i){
                 $(".slide__title").removeClass('a1')
                 $(".slide__date").removeClass('a3')
                 $(".team_btn").removeClass('a2')
                 setTimeout(function(){
                 $(".slide__title").addClass('a1');
                 $(".slide__date").addClass('a3');
                 $(".team_btn").addClass('a2');
               },1000);
                 //atv.css('left', 80*i);
               }
               //图片切换后退
               var active_img = function(i) {  
                 //lun.toggleClass('active_img');
                 lun.addClass('active_img');       
                 setTimeout(function(){    
                   lun.removeClass('active_img');
                 },900);
               }
               // 右点击事件 
               btn_r.on('click', function(event) {
                   event.preventDefault();
                   active_img(num);
                 setTimeout(function(){ 
                   a(num);      
                   if(num <li_len- 2){           
                     t ();
                     num ++;
                     if(num != li_len - 2) {          
                         ul.stop(true, false).animate({left: - width * num - width}, tran, function () { 
                           active(num);
                             })
                           }
                         if (num === li_len - 2) {           
                           ul.stop(true, false).animate({left: - width * num - width}, tran, function() {
                             ul.css('left', - width)
                             num = 0
                             active(num)
                       })
                     }
                   }
                 },500)
               })
               // 左点击事件
               btn_l.on('click', function(event) {
                 event.preventDefault(); 
                 active_img(num);         
                 setTimeout(function(){           
                     a(num);   
                   if(num > -1){ 
                     t();
                     num --
                     if(num != -1){
                       ul.stop(true, false).animate({left: - width * num - width}, tran, function() {
                         active(num);
                         })
                       }
                       if(num === -1){
                         ul.stop(true, false).animate({left: 0},tran, function() {
                           ul.css('left', - width * (li_len - 2))
                           num = li_len - 3;
                           active(num);
                       })
                     }
                   }
                 },500)
               })
               // dot点击事件
               dian_img.on('click', function(event) {
                   event.preventDefault(); 
                   t(); 
                   active_img(num);  
                 setTimeout(()=>{ 
                     a(num);               
                   var index = $(this).index();
                   active(index);
                   console.log(index);
                   ul.stop(true, false).animate({left: - width * index - width}, tran, function() {
                     num = index;
                     console.log(111111111);
                   })
                 },500)
               })
               // 自动切换
               var sliderInt = setInterval(sliderInterval, s)
               // 判断图片切换
               function sliderInterval() {
                   active_img(num);
                 setTimeout(function(){
                   a(num);               
                   if (num < li_len - 2) {
                     // num.css({"transfrom":"translateZ(-200px)"}).siblings().css({"transfrom":"translateZ(-200px)"}); 
                     num ++;       
                     ul.stop(true, false).animate({left: - width * num - width}, tran, function() {           
                       active(num);
                       if (num === li_len - 2) {
                         ul.css('left', - width);
                         num = 0;              
                         active(num);
                         console.log(11111111);
                       }
                     })
                   }
                 },500)
               }
               // 重置计时器
               function t() {
                 clearInterval(sliderInt);
                 sliderInt = setInterval(sliderInterval, s);
               }
             } // --end-- app
             $.fn.extend({
               app: function() {
                 new app($(this))
               }
             })
         })(jQuery)
           var config = {
             current: 0,
             speed: 300,
             time: 5000   
           }
           $('.app').app(config);
   
          
             var cards = document.querySelectorAll(".room");    
             // cards.forEach(cards,function(pre){
             //     console.log(pre);
             // })
             // var card=cards.slice(0,7);
             //console.log(cards);
             
             cards.forEach(function(item,index){
                        // console.log(item);      
                 var range = 10;
                 // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
                 var calcValue = function calcValue(a, b) {return (a / b * range - range / 2).toFixed(1);}; 
                     //undefined === void 0;  //true
                     //除了防止被重写外，还可以减少字节。void 0代替undefined省3个字节。
                     //类似的还有很多常用的写法，看到别人这样写的时候就当是老司机的套路就行了。
                         var timeout = void 0;
                 
                     document.addEventListener('mousemove',function(_ref){
                     var x = _ref.x,y = _ref.y;
                     if (timeout) {
                         window.cancelAnimationFrame(timeout);
                     }
                     timeout=window.requestAnimationFrame(function(){  //调用函数  更新动画
                         var yValue = calcValue(y, window.innerHeight);
                         var xValue = calcValue(x, window.innerWidth);
                       // console.log(xValue, yValue);
                         item.style.transform = "rotateX(" + yValue + "deg) rotateY(" + xValue + "deg)";
                     });
                 }, false); 
             });  
           
       
       
       })
    })
   
   },2000)