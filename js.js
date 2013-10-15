var offset = 0;
var current_offset = 0;

$(function () {    

    $('img').on('dragstart', function(event) { event.preventDefault(); });

    $(document.body).css({
        userSelect : 'none'
    });

    $(document).hammer().on('drag', function (e) {
        $('#video-carousel').stop();

        current_offset = e.gesture.deltaX;

        if (current_offset + offset > 0) {
            current_offset *= 0.5;
        }

        $('#video-carousel').css({
            position : 'absolute',
            left : offset + current_offset
        });
    });

    $(document).hammer().on('dragend', function () {

        offset += current_offset;

        if (offset > 0) {
            $('#video-carousel').animate({
                left : 0
            });
            offset = 0;
        }
        else if (offset < $(document.body).width() - $('#video-carousel').width()) {
            $('#video-carousel').animate({
                left : $(document.body).width() - $('#video-carousel').width()
            });
            offset = $(document.body).width() - $('#video-carousel').width();
        }
    });

    $('.video-container').on('mouseenter', function () {
        $(this).find('.video-details').show();
    });

    $('.video-container').on('mouseleave', function () {
        $(this).find('.video-details').hide();
    });
});
