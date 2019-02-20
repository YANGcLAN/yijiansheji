
/*$(document).ready(function(e){
    $(window).scroll(function(){
        var scrollT=$(window).scrollTop();
        console.log(scrollT)
        var h=$(window).height();
        if(scrollT>300){
            $(".sx1_cont li:first-child").animate({
                "left":"0",
                "opacity":"1"
            },800)
            $(".sx1_cont li:nth-child(2)").animate({
                "left":"0",
                "opacity":"1"
            },1000)
            $(".sx1_cont li:nth-child(3)").animate({
                "left":"0",
                "opacity":"1"
            },1200)
            $(".sx1_cont li:nth-child(4)").animate({
                "left":"0",
                "opacity":"1"
            },1400)
        }
    })
})
*/



// $(document).ready(function(e) {
//     $(window).scroll(function() {
//         var scrollT = $(window).scrollTop();
//         //console.log(scrollT);
//         if(scrollT > $('.sx1_cont').offset().top - $(window).height() * 0.5) {
//             $('ul.sx1_cont li').each(function(i) {
//                 $('ul.sx1_cont li').eq(i).delay(i * 200).animate({
//                     'top': '50',
//                     'opacity': '1'
//                 }, 800)
//             })
//         }
//         if(scrollT > $('.sx2_cont').offset().top - $(window).height() * 0.8) {
//             $('ul.sx2_cont li').each(function(i) {
//                 $('ul.sx2_cont li').eq(i).delay(i * 200).animate({
//                     'top': '30',
//                     'left':'30',
//                     'left':'-30',
//                     'opacity': '1'
//                 }, 800)
//             })
//         }
//         if(scrollT > $('.sx3_cont').offset().top - $(window).height() * 0.8) {
//             $('.sx3_cont img').animate({
//                 'top': '50',
//                 'opacity': '1'
//             }, 800)
//         }
//         if(scrollT > $('.sx4_cont').offset().top - $(window).height() * 0.8) {
//             $('ul.sx4_cont li').each(function(i) {
//                 $('ul.sx4_cont li').eq(i).delay(i * 200).animate({
//                     'top': '50',
//                     'opacity': '1'
//                 }, 800)
//             })
//         }
//         if(scrollT > $('.ser5_cont1').offset().top - $(window).height() * 0.8) {
//             $('.ser5_cont li').each(function(i) {
//                 $('.ser5_cont li').eq(i).delay(i * 200).animate({
//                     'top': '50',
//                     'opacity': '1'
//                 }, 800)
//             })
//         }
//     })
// })


$(document).ready(function(e){
    $(window).scroll(function(){
        var scrollT=$(window).scrollTop();
        var h=$(window).height();
        // console.log(scrollT)
        if(scrollT>200){
            $(".sx1_cont li:first-child").animate({
                "bottom":"0",
                "opacity":"1"
            },1000)
            $(".sx1_cont li:nth-child(2)").animate({
                "bottom":"0",
                "opacity":"1"
            },1500)
            $(".sx1_cont li:nth-child(3)").animate({
                "bottom":"0",
                "opacity":"1"
            },2000)
            $(".sx1_cont li:nth-child(4)").animate({
                "bottom":"0",
                "opacity":"1"
            },2500)
        }
        if(scrollT>700){
            $(".sx2_top li:first-child").animate({
                "bottom":"0",
                "opacity":"1"
            },1000)
            $(".sx2_top li:nth-child(2)").animate({
                "bottom":"0",
                "opacity":"1"
            },1300)
            $(".sx2_top li:nth-child(3)").animate({
                "bottom":"0",
                "opacity":"1"
            },1600)
            $(".sx2_top li:nth-child(4)").animate({
                "bottom":"0",
                "opacity":"1"
            },1900)
            $(".sx2_top li:nth-child(5)").animate({
                "bottom":"0",
                "opacity":"1"
            },2200)
        }
        if(scrollT>700){
            $(".sx2_bott li:first-child").animate({
                "bottom":"0",
                "opacity":"1"
            },2500)
            $(".sx2_bott li:nth-child(2)").animate({
                "bottom":"0",
                "opacity":"1"
            },2800)
            $(".sx2_bott li:nth-child(3)").animate({
                "bottom":"0",
                "opacity":"1"
            },3100)
            $(".sx2_bott li:nth-child(4)").animate({
                "bottom":"0",
                "opacity":"1"
            },3400)
        }
        if(scrollT>1300){
            $(".sx3_cont img:first-child").animate({
                "bottom":"0",
                "opacity":"1"
            },1500)
        }
        if(scrollT>1900){
            $(".sx4_cont li:first-child").animate({
                "bottom":"0",
                "opacity":"1"
            },1000)
            $(".sx4_cont li:nth-child(2)").animate({
                "bottom":"0",
                "opacity":"1"
            },1500)
            $(".sx4_cont li:nth-child(3)").animate({
                "bottom":"0",
                "opacity":"1"
            },2000)
            $(".sx4_cont li:nth-child(4)").animate({
                "bottom":"0",
                "opacity":"1"
            },2500)
            $(".sx4_cont li:nth-child(5)").animate({
                "bottom":"0",
                "opacity":"1"
            },3000)
        }
        if(scrollT>2600){
            $(".ser5_cont li:first-child").animate({
                "bottom":"0",
                "opacity":"1"
            },1000)
            $(".ser5_cont li:nth-child(2)").animate({
                "bottom":"0",
                "opacity":"1"
            },1500)
            $(".ser5_cont li:nth-child(3)").animate({
                "bottom":"0",
                "opacity":"1"
            },2000)
            $(".ser5_cont li:nth-child(4)").animate({
                "bottom":"0",
                "opacity":"1"
            },2500)
        }
      })
})
