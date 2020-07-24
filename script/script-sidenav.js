function openNav(){
    document.getElementById("sidenav").style.width = "60%";
    document.getElementsByClassName("main")[0].style.filter = "blur(2px)";
    $(".sidenav-info").css('transform', 'translate(0px, 0px)');
    $(".sidenav-info").css('opacity', '1');
    $(".navlink").css('transform', 'translate(0px,0px)');
    $(".navlink").css('opacity','1');
}
  
function closeNav(){
    document.getElementById("sidenav").style.width = "0";
    document.getElementsByClassName("main")[0].style.filter = "blur(0px)";
    $(".sidenav-info").css('transform', 'translate(500px, 0px)');
    $(".sidenav-info").css('opacity', '0');
    $(".navlink").css('transform', 'translate(500px,0px)');
    $(".navlink").css('opacity','0');
}