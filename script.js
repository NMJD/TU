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