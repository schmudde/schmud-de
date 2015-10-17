/**
 * Note: This JavaScipt file relies on JQuery and must be invoked after loading said library.
 */

// Bootstrap defaults
var screen_sm_min = 768;
var screen_md_min = 992;
var screen_lg_min = 1200;

/*
(function() {
    function contentHeightResizer() {
	if ($(window).width() >= screen_sm_min) {
            var footerHeight = $("#frontPageFooter").height() + 45;
            $(".mainContent").css("padding-bottom", footerHeight);
	} else {
	    $(".mainContent").css("padding-bottom", 15);
	}
    }

    $(document).on("ready", contentHeightResizer);
    $(window).on("resize", contentHeightResizer);

})();
*/

// Social Media Shares
/*
$('.popupShare').click(function (event) {

    var width = 575,
        height = 400,
        left = ($(window).width() - width) / 2,
        top = ($(window).height() - height) / 2,
        url = this.href,
        opts = 'status=1' +
	       ', width=' + width +
	       ', height=' + width +
	       ', top=' + top +
	       ', left=' + left;

    event.preventDefault();
    window.open(url, 'popupWindow', opts);

    return false;
});*/
