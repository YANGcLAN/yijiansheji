//查找包含data-toggle=tab的子元素的tabs父元素
$(".tabs:has([data-toggle=tab])")
  //利用冒泡: 仅允许data-toggle=tab的子元素触发事件
  .on("click","[data-toggle=tab]",e=>{
  var $tar=$(e.target);
  if(!$tar.parent().is(".active")){
    $tar.parent().addClass("active")
      .siblings().removeClass("active");
    var id=$tar.attr("href");
    $(id).addClass("active")
      .siblings().removeClass("active");
  }
})
$(".accordion")
.on("click",".title",e=>
  $(e.target).next(".content")
    .toggleClass("in")
    .siblings(".content").removeClass("in")
);