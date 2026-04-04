//  $(document).ready(function () {
//             // Add smooth scrolling to all links
//             $("a").on('click', function (event) {

//                 // Make sure this.hash has a value before overriding default behavior
//                 if (this.hash !== "") {
//                     // Prevent default anchor click behavior
//                     event.preventDefault();

//                     // Store hash
//                     var hash = this.hash;

//                     // Using jQuery's animate() method to add smooth page scroll
//                     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//                     $('html, body').animate({
//                         scrollTop: $(hash).offset().top
//                     }, 800, function () {

//                         // Add hash (#) to URL when done scrolling (default click behavior)
//                         window.location.hash = hash;
//                     });
//                 } // End if
//             });
//         });



$(document).ready(function () {
    // Smooth Scrolling
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 60 // 60px offset for better visual padding
                }, 500);
            }
        }
    });

    // Simple Animation Trigger for icons (Optional UX touch)
    $('.box').hover(
        function() { $(this).find('ion-icon').addClass('animated pulse'); },
        function() { $(this).find('ion-icon').removeClass('animated pulse'); }
    );
});