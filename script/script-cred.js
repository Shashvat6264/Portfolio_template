var cards = document.getElementsByClassName("card");
// for (var i=0;i<cards.length;i++){
//     var card = cards[i];
// }
// setTimeout(function(){
    rotatein();
// },1000)
function rotatein(){
    setTimeout(function(){
        cards[0].style.opacity = "1";
    },200)
    setTimeout(function(){
        cards[1].style.opacity = "1";
    },400)
    setTimeout(function(){
        cards[2].style.opacity = "1";
    },600)
    setTimeout(function(){
        cards[3].style.opacity = "1";
    },800)
    setTimeout(function(){
        cards[4].style.opacity = "1";
    },1000)
    setTimeout(function(){
        cards[5].style.opacity = "1";
    },1200)
    setTimeout(function(){
        cards[6].style.opacity = "1";
    },1400)
    setTimeout(function(){
        cards[7].style.opacity = "1";
    },1600)
    setTimeout(function(){
        cards[8].style.opacity = "1";
    },1800)
    setTimeout(function(){
        cards[9].style.opacity = "1";
    },2000)
}