import sub from '../src/index';

describe('Substract', () => {

	it('Should return null if no arguments passed', () => {
		expect(sub()).toBe(null);
	});

	it('Should return subtract amount', () => {
		expect(sub(10, 5)).toBe(5);
	});

})
