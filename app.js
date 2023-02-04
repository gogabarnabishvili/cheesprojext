function changeSrc(x) {
    x.setAttribute("src", "img/chessOpen.jpg");
    x.style.height = "210px";
    x.style.width = "210px"

}

function backSrc(x) {
    x.setAttribute("src", "img/chessClosse.jpg");
    x.style.height = "200px";
    x.style.width = "200px"

}

// test
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}