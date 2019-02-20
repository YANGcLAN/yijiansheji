$(document).ready(function(e){
  $(window).scroll(function(){
      var scrollT=$(window).scrollTop();
      var h=$(window).height();
      // console.log(scrollT)
      if(scrollT>300){
          $(".case_flex div:first-child").animate({
              "bottom":"0",
              "opacity":"1"
          },1000)
          $(".case_flex div:nth-child(2)").animate({
              "bottom":"0",
              "opacity":"1"
          },1500)
          $(".case_flex div:nth-child(3)").animate({
              "bottom":"0",
              "opacity":"1"
          },2000)
          $(".case_flex div:nth-child(4)").animate({
              "bottom":"0",
              "opacity":"1"
          },2500)
          $(".case_flex div:nth-child(5)").animate({
              "bottom":"0",
              "opacity":"1"
          },3000)
          $(".case_flex div:nth-child(6)").animate({
              "bottom":"0",
              "opacity":"1"
          },3500)
      }
    })
})