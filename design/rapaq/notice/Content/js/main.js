$(function() {
    //e.preventDefault();
    //e.stopPropagation();

    //burger click event
    $('[data-id="js-burger"]').on('click', function() {
        $('body').toggleClass('openMenu');
        didScroll = false;
        clearInterval(didScrollID);
    });

    //click mask to close menu
    $('[data-id="mask-menu"]').on('click', function() {
        $('body').removeClass('openMenu');
        didScroll = true;
        didScrollID = setTimer();
    });

    //nav toggle class when scrolling window
    var didScrollID = setTimer();
    var didScroll = false,
        lastScrollTop = 0;

    function setTimer() {
        i = setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 500);
        return i;
    }

    $(window).on('scroll',function(event) {
        didScroll = true;
    }).trigger('scroll');

    function hasScrolled() {
        clearInterval(didScrollID);
        var st = $(this).scrollTop(),
            winHeight = $(window).height();
        var $header = $('.header'),
            $footer = $('.footer'),
            _footerH = $footer.height() + 120;
        var _toBottom = $(document).height() - winHeight - _footerH;
        if (st > lastScrollTop && st > winHeight) {
            //scrolling down
            $header.addClass('is--hidden').removeClass('is--default is--active');

            if (st > _toBottom) {
                //scroll to bottom
                $header.addClass('is--active').removeClass('is--hidden');
            }
        } else {
            $header.addClass('is--active').removeClass('is--hidden');
        }

        lastScrollTop = st;
        didScrollID = setTimer();
    }
})