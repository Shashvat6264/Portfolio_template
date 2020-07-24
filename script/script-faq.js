$(document).ready(function(){
    $(".qn").click(function(){
        $(this).siblings(".answer").slideToggle("fast");
        $(this).parent().toggleClass("open-qn");
    });
});