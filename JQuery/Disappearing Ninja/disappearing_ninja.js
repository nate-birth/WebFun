$(document).ready(function(){
    $('h1').click(function(){
        $('#ninjas').css("background-color", "red");
    });
    $('.pic').click(function(){
        $(this).hide();
    });
    $('#btn').click(function(){
        if( $('.pic').is(':hidden')){
            $('.pic').show();
        }
    });
});