$(document).ready(function(e){
  $(window).scroll(function(){
      var scrollT=$(window).scrollTop();
      var h=$(window).height();
      // console.log(scrollT)
      if(scrollT>100){
          $(".newsd_box div:first-child").animate({
              "left":"0",
              "opacity":"1"
          },1000)
      }
      if(scrollT>$('.dot1').offset().top - h * 0.6){
          $(".dot1 div:first-child").animate({
              "bottom":"0",
              "opacity":"1"
          },1000)
          $(".dot1 div:nth-child(2)").animate({
              "bottom":"0",
              "opacity":"1"
          },1500)
          $(".dot1 div:nth-child(3)").animate({
              "bottom":"0",
              "opacity":"1"
          },2000)
      }
    })
})

