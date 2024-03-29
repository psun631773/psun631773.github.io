$(document).ready(function(){
    format_showcase();
});

$('.image').on('load', format_showcase);

function format_showcase() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 250,
        gutter: 20,
        horizontalOrder: true,
        fitWidth: true,
        transitionDuration: '0.35s'
    });
}