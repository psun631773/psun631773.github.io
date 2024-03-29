$(document).ready(function(){
    format_showcase();
});

$('.card').on('load', format_showcase);

function format_showcase() {
    $('.showcase').masonry({
        itemSelector: '.card',
        columnWidth: 280,
        gutter: 40,
        horizontalOrder: true,
        fitWidth: true,
        transitionDuration: '0.35s'
    });
}