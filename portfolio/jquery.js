$("#testimonial").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#testimonialTo").offset().top
    }, 2000);
});



/*$(document).ready(function() {
    $("#about").click(function() {
        $('html body').animate({
            scrollTop: $("#about1").offset().top
        }, 2000);
    });
});


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

$(".hide").on({
    mouseenter: function() {
        $(this).css("background-color", "red");
    },
    mouseleave: function() {
        $(this).css("background-color", "lightblue");
    },
    click: function() {
        $(this).css("background-color", "yellow");
        $(this).css("font-weight", "bold");
    },
})





/*$("img").on({
    click: function() {
        $(this).css("width", "200px");

    },

});

$("p:first").click(function() {
    $(this).css("background-color", "red")
        .css("fontSize", "10px")
        .slideUp(1000)
        .slideDown(1000)
        .toggle(100);

});

$("h1").on({
    mouseenter: function() {
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function() {
        $(this).css("background-color", "lightblue");
    },
    click: function() {
        $(this).css("background-color", "yellow");
        $(this).css("font-weight", "bold");
    }
});*/