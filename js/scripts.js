// Navbar color change on scroll
$(window).scroll(function(){
$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

// Active Links
$(".navbar-nav .nav-item .nav-link").click(function(){
$(".nav-item .nav-link").removeClass("active");
$(this).addClass("active");
});

