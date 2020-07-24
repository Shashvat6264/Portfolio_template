var slideIndex = 3;
showSlides(slideIndex);
slidesautomove()

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    var i;
    var prevSlide;
    var slides = document.getElementsByClassName("slide");
    // var dots = document.getElementsByClassName("slide_thumb");
    // var captionText = document.getElementById("caption");
    // var slide_row = document.getElementsByClassName("slide_row")[0];
    // var slide_row_width = slide_row.scrollWidth;
    n = slideIndex;
    prevSlide = slideIndex - 1;
    if (n > slides.length){
        slideIndex = 1
        // slide_row.scrollTo(slide_row.scrollLeft - slide_row_width,0);
        prevSlide = slides.length;
    }
    if (n < 1){
        slideIndex = slides.length();
        prevSlide = 1;
    }
    var movedoutSlide = slides[prevSlide-1];
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.zIndex = "0";
    movedoutSlide.style.zIndex = "1";
    movedoutSlide.style.transform = "translateX(-1500px)";
    movedoutSlide.style.filter = "blur(20px)";
    setTimeout(function(){
        for(i=0;i<slides.length;i++){
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
        movedoutSlide.style.transform = "translateX(0px)";
        movedoutSlide.style.filter = "blur(0px)";
    },2000);
    // for (i=0;i<slides.length;i++){
    //     dots[i].className = dots[i].className.replace(" slide_active", "");
    // }
    // dots[slideIndex-1].className += " slide_active";
    // if (n<slides.length){
    //     slide_row.scrollTo(slide_row.scrollLeft + (slide_row_width/6),0);
    // }
}

function slidesautomove(){
    var id = setInterval(frame, 5000);
    function frame(){
        plusSlides(1);
    }
}