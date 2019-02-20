$(function(){
    $("<link rel='stylesheet' href='css/nav.css'>").appendTo('head');
    $.ajax({
        url:'http://localhost:3000/nav.html',
        type:'get',
        success: function(res) {
            $(res).replaceAll("#nav");
        }
    })
})