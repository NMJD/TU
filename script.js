// document.addEventListener('DOMContentLoaded', function () {
//     var dropdowns = document.querySelectorAll('.navbar-nav .nav-item.dropdown');

//     dropdowns.forEach(function (dropdown) {
//         dropdown.addEventListener('click', function (event) {
//             var isDropdownOpen = dropdown.classList.contains('show');

//             dropdowns.forEach(function (otherDropdown) {
//                 otherDropdown.classList.remove('show');
//                 otherDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
//             });

//             if (!isDropdownOpen) {
//                 dropdown.classList.add('show');
//                 dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
//             } else {
//                 dropdown.classList.remove('show');
//                 dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
//             }

//             event.stopPropagation(); // Prevent event from reaching document click event
//         });
//     });

//     // Close dropdowns when clicking outside
//     document.addEventListener('click', function () {
//         dropdowns.forEach(function (dropdown) {
//             dropdown.classList.remove('show');
//             dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    // Use Anime.js to animate the text
    anime.timeline({ loop: false })
        .add({
            targets: '.banner-text h1',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 1000,
        })
        .add({
            targets: '.banner-text p',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 1000,
        });
});

// GALLERY
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
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  
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
  captionText.innerHTML = dots[slideIndex-1].alt;
  
  // Set the interval for automatic scrolling (every 3 seconds)
//   setTimeout(() => {
//     plusSlides(1);
//   }, 6000);
}