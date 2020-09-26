$(document).ready(function(){

    $('.hidden button').click(function(){
        $('.hidden p').hide();
    });

    $('.shown button').click(function(){
        $('.shown p').show();
    });

    $('.toggle button').click(function(){
        $('.toggle p').toggle();
    });

    $('.sldown button').click(function(){
        $('.sldown h1, .sldown p').slideDown('slow');
    });

    $('.slup button').click(function(){
        if( $('.slup h1, .slup p').is(':hidden')){
            $('.slup h1, .slup p').show('slow');
        } else {
            $('.slup h1, .slup p').slideUp('fast');
        }
    });

    $('.sltoggle button').click(function(){
        $('.sltoggle img').slideToggle();
    });

    $('.fade-in button').click(function(){
        $('.fade-in span').fadeIn(5000);
    });

    $('.fade-out button').click(function(){
        $('.fade-out span').fadeOut(function(){
            $('.fade-out #fadeoutspan').fadeIn(2000);
        });
        $('.fade-out span').addClass('crimson');
    });
    var BAA = 0;
    $('.baa button').click(function(){
        BAA++ ;
        if (BAA % 2 == 0){
            $('.baa p').before(BAA);
        } else {
            $('.baa p').after(BAA);
        };
    });
    $('.appenTML span').click(function(){
        var htmlStuff = $('.appenTML p').html();
        var htmlRaw = $('.appenTML p').html();
        $('.appenTML p').append(htmlStuff);
        $(this).text(htmlRaw);
    });
});