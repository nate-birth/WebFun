$(document).ready(function(){
    
    $("img").click(function(){
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
        var current = $(this).attr('src');
        var backup = $(this).attr('data-alt-src');
        $(this).attr('src', backup);
        $(this).attr('data-alt-src', current);
    })
});