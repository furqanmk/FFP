/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$.getScript("js/FileSaver.min.js", function() {});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
   $("#InputPicture").fileinput({'showUpload':false, 'previewFileType':'any', allowedFileTypes: ['image'], maxImageWidth: 1000, maxImageHeight: 1000, minImageWidth: 200, minImageHeight: 200}); 
});

$('#InputPicture').on('filebatchselected', function(event, files) {
    $image = files[0];
    $extension = $image.name.slice($image.name.indexOf('.'), $image.name.length);
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});