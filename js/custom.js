

$(".k-part1 div").click(function(){
        
   $(".k-part1").hide(1000,function(){
       
       $("body,html").animate({scrollTop:$("footer").offset().top},1000)
       
       $(".k-part2").show(1000,function(){
           
       });
       $(".k-part2").css("display","flex");
   });
     
    
})

$(".k-part2 h3").click(function(){
    $("body,html").animate({scrollTop:$("footer").offset().top},500)
    $(".k-part3").slideUp(1000);
    $(".k-part3").slideDown(1000);
})