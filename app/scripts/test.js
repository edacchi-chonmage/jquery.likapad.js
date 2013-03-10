describe('Test', function () {
	var
		likapad;

	beforeEach(function () {
		$('#jsi-likapad').likapad();
	});

	it('hoge to be defined', function () {
		expect($('#jsi-likapad').css('backgroundColor')).toBe('rgb(0, 0, 0)');
	});
});

var
	jasmineEnv = jasmine.getEnv(),
	htmlReporter = new jasmine.HtmlReporter();

jasmineEnv.addReporter(htmlReporter);

window.onload = function () {
	jasmineEnv.execute();
};
