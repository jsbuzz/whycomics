function hideAll() {
    $('.icon').hide();
    $('.description').hide();
}

$(function() {

  hideAll();

  $(document).click(hideAll);

  $('.link-box').each(function() {
    $(this)
    .mouseenter(debounce(function() {
        var linkBox = this;
        $('a', linkBox).stop().animate({width: '100%'}, function() {
            $('img', linkBox).fadeIn();
            $('.description', linkBox).stop().slideDown(100);
        });
    }, 800, true))
    .mouseleave(function() {
        var linkBox = this;
        $('img', linkBox).fadeOut();
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
