describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));
	it('it should remove all vowels', function() {
		var result = $filter('removeAllVowels')('remove');

		expect(result).toBe('rmv');

	});

});
