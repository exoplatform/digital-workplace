(function($) {
    var ShadowScroll = {
        initShadow : function() {
            var  tb = $('.UIToolbarContainer');
            tbs = "top-bar-scrolled";

            $(window).scroll(function() {
                if($(this).scrollTop()) {
                    tb.addClass(tbs);
                } else {
                    tb.removeClass(tbs);
                }
            });
        }
    };
    return ShadowScroll;
})($);