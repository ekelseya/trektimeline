let $element = $(".each-event, .title");
let $window = $(window);
$window.on("scroll resize", check_for_fade);
$window.trigger("scroll");

function check_for_fade() {
    let window_height = $window.height();

    $.each($element, function (event) {
        let $element = $(this);
        let element_height = $element.outerHeight;
        let element_offset = $element.offsetTop;
        let space = window_height - (element_height + element_offset - $(window.scrollTop));
        if (space < 60) {
            $element.addClass("non-focus");
        } else {
            $element.removeClass("non-focus");
        }
    })

}


