$(document).ready(function(e){
    $(window).scroll(function(){
        var scrollT=$(window).scrollTop();
        //console.log(scrollT)
        var h=$(window).height();
        //console.log(scrollT);
        if(scrollT>250){
            $(".about1_contentP p:first-child").animate({
                "left":"0",
                "opacity":"1"
            },800)
            $(".about1_contentP p:nth-child(2)").animate({
                "left":"0",
                "opacity":"1"
            },1000)
            $(".about1_contentP p:nth-child(3)").animate({
                "left":"0",
                "opacity":"1"
            },1200)
            $(".about1_contentP p:nth-child(4)").animate({
                "left":"0",
                "opacity":"1"
            },1400)
        }
    
        //console.log($('.ab-content').offset().top - h * 0.8)
        if(scrollT > $('.ab-content').offset().top - h * 0.8){
            $(".ab-content-li:first-child").animate({
                "top":"0",
                "opacity":"1"
            },800);
            $(".ab-content-li:nth-child(2)").animate({
                "top":"0",
                "opacity":"1"
            },1200)
            $(".ab-content-li:nth-child(3)").animate({
                "top":"0",
                "opacity":"1"
            },1600)
        }
        //console.log( $('.ab-content').offset().top - h * 0.1)
        if(scrollT > 1100){
            $(".ab-content-li:nth-child(4)").animate({
                "top":"0",
                "opacity":"1"
            },800)
            $(".ab-content-li:nth-child(5)").animate({
                "top":"0",
                "opacity":"1"
            },1200)
        }
        //console.log(scrollT)
        //console.log($('.swiper-wrapper').offset().top - h * 0.8)
        if(scrollT >1500){
            $(".swiper-slide:first-child>div.ab3_lis").animate({
                "top":"0",
                "opacity":"1"
            },800);
            $(".swiper-slide:nth-child(2)>div.ab3_lis").animate({
                "top":"0",
                "opacity":"1"
            },1200)
        }
    
        //console.log($('.ab4-cot').offset().top - h * 0.9);
        if(scrollT > $('.ab4-cot').offset().top - h * 0.9){
            $(".con-right").animate({
                "top":"-30"
            },800)
        }
    })

    var dwidth=$(".swiper-wrapper").find("div").eq(0).width();
    //console.log(w*1)
    var num=0;
    console.log(dwidth)
    var leng=document.querySelectorAll(".swiper-wrapper>div").length;
    $(".swiper-button-next").on("click",function(){
        if(num<leng - 2){
            num++
            if(num!=leng - 2){
                $(".swiper-slide").stop(true, false).animate({
                    "left":- dwidth * num
                },500);
                console.log(dwidth)
            }
            if(num==leng - 2){
                $(".swiper-slide").stop(true, false).animate({
                    "left":- dwidth * num
                },500,function(){
                    $(".swiper-slide").css("left","0");
                    num = 0
                });
            }
           
           
            //console.log(num)
        }
        // else if(num==9){
        //     num=0
        //     $(".swiper-slide:first-child").animate({
        //         "right":w*num
        //     })
        // }
    })

    $(".swiper-button-prev").on("click",function(){
        if(num>-1){
            num--
            if(num!=-1){
                $(".swiper-slide").stop(true, false).animate({
                    "left":- dwidth*num
                },500);
               // console.log(num)
            }
            if(num==-1){
                $(".swiper-slide").stop(true, false).animate({
                    "left":"0"
                },500,function(){
                    $(".swiper-slide").css("left",- dwidth*(leng - 2))
                    num=leng - 3;
                   // console.log(num)
                });
            }
        }
    })

    var timer=setInterval(function(){
        if(num<leng - 2){
            num++
            if(num!=leng - 2){
                $(".swiper-slide").stop(true, false).animate({
                    "left":- dwidth * num
                },500);
            }
            if(num==leng - 2){
                $(".swiper-slide").stop(true, false).animate({
                    "left":- dwidth * num
                },500,function(){
                    $(".swiper-slide").css("left","0");
                    num=0
                });
            }
           
           
            //console.log(num)
        }
    },5000)
    var tit=document.querySelectorAll(".ab5-tit>ul.container>li");
    //console.log(tit)
    var left=document.querySelectorAll(".ab5-left>ul>li")
    //console.log(left.length)
    //var lwidth=$(left).eq(0).width()
    var right=document.querySelectorAll(".ab5-right>li")
    //console.log(left)
    //console.log(right)
    // $(right[0]).animate({
    //     "opacity":"1"
    // })
    var lnum=0;
    $(".ab5-tit>ul.container>li").on("click",function(){
        $(this).addClass("ab-active").siblings().removeClass("ab-active");
        if($(this).is(".ab-active")){
            var idx=$(this).index();
            //console.log(idx)
            $(".ab5-left>ul").animate({
                "left":- 100*idx+"%"
            })

            $(right[idx]).animate({
                "opacity":"1"
            }).siblings().animate({
                "opacity":"0"
            })
            lnum=idx;
        }
    })

    $(".ab5-jt-right").on("click",function(){
        //console.log(num)
        if(lnum<left.length - 2){
            lnum++
            //console.log(num)
             if(lnum!=left.length - 2){
                 $(".ab5-left>ul").stop(true, false).animate({
                     "left":- 100*lnum+"%"
                 });
                 $(right[lnum]).animate({
                    "opacity":"1"
                }).siblings().animate({
                    "opacity":"0"
                })
                $(tit[lnum]).addClass("ab-active").siblings().removeClass("ab-active");
                 //console.log(lnum)
             }
            if(lnum==left.length - 2){
                $(".ab5-left>ul").stop(true, false).animate({
                    "left":- 100*lnum+"%"
                },function(){
                    $(".ab5-left>ul").css(
                        "left","0"
                    )
                });
                lnum=0
                $(right[lnum]).animate({
                    "opacity":"1"
                }).siblings().animate({
                    "opacity":"0"
                })
                $(tit[lnum]).addClass("ab-active").siblings().removeClass("ab-active");
                //console.log(lnum)
            }
        }
    })
    $(".ab5-jt-left").on("click",function(){
        if(lnum> - 1){
            lnum--
            if(lnum!= - 1){
                $(".ab5-left>ul").stop(true, false).animate({
                    "left":- 100 * lnum+"%"
                });
                $(right[lnum]).animate({
                   "opacity":"1"
               }).siblings().animate({
                   "opacity":"0"
               })
               $(tit[lnum]).addClass("ab-active").siblings().removeClass("ab-active");
               console.log(lnum)
            }
            if(lnum==-1){
                console.log(lnum)
                $(".ab5-left>ul").stop(true,false).animate({
                    "left":"0"
                },function(){
                    $(".ab5-left>ul").css(
                        "left",-100 * (left.length-3)+"%"
                    ) 
                })
                lnum=left.length-3
                $(right[lnum]).animate({
                    "opacity":"1"
                }).siblings().animate({
                    "opacity":"0"
                })
                $(tit[lnum]).addClass("ab-active").siblings().removeClass("ab-active");
            }
        }
    })
})