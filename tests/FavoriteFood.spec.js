describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('it should filter items by favorite food', function() {
			var customers = [
				{
					name: 'customer1',
					favoriteFood: 'chicken'
				},
				{
					name: 'customer2',
					favoriteFood: 'beef'
				},
				{
					name: 'customer3',
					favoriteFood: 'salad'
				}
			];

			var results = $filter('favoriteFood')(customers, 'chicken');

			expect(results.length).toBe(1);
			expect(results[0].name).toBe('customer1');



	});

});
