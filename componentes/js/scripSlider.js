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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}








//funcion que permite mover las imagenes




//Slider de primeras lista de personas

  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type : 'loop',
        autoplay: true,
        perPage:5,
        breakpoints: {
            1024: {
              perPage: 5,
             
            },
            767: {
              perPage: 3,
          
            },
            640: {
              perPage: 3,
        
            },
          },
       
    
    } );
    splide.mount();
    } );
    







//slider de segunda vista de personajes

document.addEventListener( 'DOMContentLoaded', function() {
var splide = new Splide( '.splider',{
    type : 'loop',
    autoplay: true,
    perPage:6,
    breakpoints: {
        1024: {
          perPage: 6,
         
        },
        767: {
          perPage: 5,
      
        },
        640: {
          perPage: 4,
    
        },
      },
   

} );
splide.mount();
} );







document.addEventListener('DOMContentLoaded', function () {
let figure = document.getElementById('photo');
let directions = document.getElementById('directions');

directions.addEventListener('change', function () {
figure.setAttribute('tooltip-dir', this.value);
});
});

