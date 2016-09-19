function hideAll() {
    $('.icon, .icon-bg').hide();
    $('.description').hide();
}

$(function() {

    hideAll();

    $(document).click(hideAll);

    $('.link-box').each(function() {

        $(this) //...

        .mouseenter(debounce(function() {
            var linkBox = this;
            //$('img', linkBox).stop().fadeIn();
            $('.icon, .icon-bg', linkBox).stop().fadeIn();
            $('a', linkBox).stop().animate({width: '100%'}, function() {
                $('.description', linkBox).stop().slideDown(100);
            });
        }, 800, true))

        .mouseleave(function() {
            var linkBox = this;
            $('.icon, .icon-bg', linkBox).stop().fadeOut();
            $('.description', linkBox).stop().slideUp(100, function() {
                $('a', linkBox).stop().animate({width: '0%'});
            });
        });
    });

    $(document).scroll(debounce(function() {
        $('.icon').fadeIn(200, function() {
            $('.icon').fadeOut(200);
        });
    }, 600))

    // frame 5
    $(document).scroll(function() {
        var leftStart = 0, rightStart = 60.6,
            scrollStart = $('#comic-strip-5').position().top,
            scrollTop = document.scrollingElement.scrollTop;

        if(scrollTop > scrollStart && scrollTop < scrollStart + 1000) {
            var unit = (scrollTop - scrollStart) / 9;

            $('#family-left').css({
                left : (leftStart-unit)+'%',
                opacity : (100 - unit*2)/100
            });
            $('#family-right').css({
                left : (rightStart+unit)+'%',
                opacity : (100 - unit*2)/100
            });
        }
    });

    // cutout background resizing
    function adjustCutouts() {
        $('.cutout').css({ backgroundSize : $('.container div:first').width() + 'px' });
    }
    $(window).resize(adjustCutouts);
    adjustCutouts();

});

function debounce(func, wait, immediate) {
var timeout;
return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
   };
};
