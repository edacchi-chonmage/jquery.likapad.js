// ;(function ($) {
(function (jQuery) {
	jQuery.fn.likapad = function () {
		var
			Likapad,
			$bases = this;

		Likapad = function () {
		};
		Likapad.prototype = {
			hoge: 1
		};

		return $bases.each(function () {
			var
				$base = $(this);

			$base.css('backgroundColor', 'black');
		});
	};
})(jQuery);

$(function () {
	$('#jsi-likapad').likapad();
});
