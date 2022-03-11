
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

$('.mob-menu').on('click', function () {
    $('.nav').slideToggle();
  });

let menu = document.getElementById('header')
let section = document.getElementById('muzi')
window.onscroll = function(){
    if(window.pageYOffset >= section.offsetTop){
        menu.classList.add('sticky')
    }
    if(window.pageYOffset < section.offsetTop){
        menu.classList.remove('sticky')
    }
}