$(document).ready(function(e){
    $(window).scroll(function(){
        var scrollT=$(window).scrollTop();
        var h=$(window).height();
        // console.log(scrollT)
        if(scrollT>100){
            $(".news_content div:first-child").animate({
                "bottom":"0",
                "opacity":"1"
            },1000)
            $(".news_content div:nth-child(2)").animate({
                "bottom":"0",
                "opacity":"1"
            },1500)
            $(".news_content div:nth-child(3)").animate({
                "bottom":"0",
                "opacity":"1"
            },2000)
        }
        if(scrollT> $('.news_content').offset().top - h * 0.25){
            $(".news_content div:nth-child(4)").animate({
                "bottom":"0",
                "opacity":"1"
            },1000)
            $(".news_content div:nth-child(5)").animate({
                "bottom":"0",
                "opacity":"1"
            },1500)
            $(".news_content div:last-child").animate({
                "bottom":"0",
                "opacity":"1"
            },2000)
        }
      })
})

