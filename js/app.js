$('.carousel').carousel({
  interval: 2000
})

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top
    }, 2000);
});