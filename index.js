function showsponsors(){
    $("#sponsors_container").css("display","inherit");
    $("#sponsors_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#sponsors_container").removeClass("animated slideInDown");
    },800);
}
function closesponsors(){
    $("#sponsors_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#sponsors_container").removeClass("animated slideOutUp");
        $("#sponsors_container").css("display","none");
    },800);
}
function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showvillage(){
    $("#village_container").css("display","inherit");
    $("#village_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#village_container").removeClass("animated slideInRight");
    },800);
}
function closevillage(){
    $("#village_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#village_container").removeClass("animated slideOutRight");
        $("#village_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#sponsors").removeClass("animated fadeIn");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#village").removeClass("animated fadeIn");
    },1000);
},1500);
