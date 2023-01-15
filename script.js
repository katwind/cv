let slideIndex = 1;
showSlides(slideIndex);

function moveSlides(num) {
    showSlides(slideIndex += num);
}

function currentSlide(num) {
    showSlides(slideIndex = num);
}

function showSlides(num) {
    let i;
    let slides = document.getElementsByClassName('slide-wrapper');
    let dots = document.getElementsByClassName("dot");
    if (num > slides.length) {
        slideIndex = 1
    }
    if (num < 1) {
        slideIndex = slides.length
    }
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
}