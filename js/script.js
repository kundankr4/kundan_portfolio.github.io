(function() {
    "use strict";

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 80) {
            $(".main-header").addClass("sticky-nav");
        } else {
            $(".main-header").removeClass("sticky-nav");
        }
    });
    // Window Scroll

    var scrollLink = $(".scroll-link");

    $(scrollLink).on("click", function (event) {
        event.preventDefault();
        $("html,body").animate(
            {
            scrollTop: $(this.hash).offset().top - 50,
            },
            300
        );
    });

    $(window).on("scroll", function () {
        var scrollTop = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionHead = $(this.hash).offset().top - 100;
            if (scrollTop >= sectionHead) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        });
    });
    // Scroll Spay Navigation
}(jQuery))