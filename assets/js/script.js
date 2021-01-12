$.fn.offScreen = function (distance) {
        var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top - distance,
                _bottom = $t.offset().top + $t.height() + distance;

        return {
                top: _bottom <= viewTop,
                bottom: _top >= viewBottom,
        };
};

var win = $(window);

var allMods = $(".box");

allMods.each(function (i, el) {
        var el = $(el);
        if (!el.offScreen(150).bottom) {
                el.addClass("already-visible");
        }
});

win.on("scroll resize", function (event) {
        allMods.each(function (i, el) {
                var el = $(el);
                if (!el.offScreen(150).top && !el.offScreen(150).bottom) {
                        el.removeClass(
                                "already-visible off-screen-top off-screen-bottom"
                        );
                        el.addClass("come-in");
                } else {
                        if (el.offScreen(150).top) {
                                el.addClass("off-screen-top");
                        } else {
                                el.addClass("off-screen-bottom");
                        }
                }
        });
});

win.trigger("scroll");
