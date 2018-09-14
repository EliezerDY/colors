  
    $(document).ready(function(){
    $("#box1").hide();
    $("#box2").hide();
    $("#box3").hide();
    $("#box4").hide();
    $("#box5").hide();
     });
    //
    $("#bt1").click(function(){
 $("#box1").fadeIn(1000);
    $("#main").hide();
    //$("#box2").fadeOut();
    //$("#box3").fadeOut();
    //$("#box4").fadeOut();
   // $("#box5").fadeOut();
  });
     $("#bt2").click(function(){
 $("#box2").fadeIn(1000);
    $("#bt1").hide();
    $("#main").hide();
});
