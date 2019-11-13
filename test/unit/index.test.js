//--------------------------------------------------------
//-- Unit tests
//--------------------------------------------------------
import capturingGroupValues from '../../dist/node';


describe(`Validate that capturingGroupValues works`, () => {

	//-- Does validate
	[
		['an empty base',  ['',    /./u]],
		['an normal base', ['abc', /./u]]
	]
		.forEach(([description, parameters]) => {
			test(`Ensure ${description} validates`, () => {
				expect(() => {
					capturingGroupValues(...parameters);
				}).not.toThrow();
			});
		})
	;


	//-- Does not validate
	[
		['an undefined base',    []],
		['a numeric base',       [1]],
		['a boolean base',       [true]],
		['an undefined pattern', ['abc']],
		['a numeric pattern',    ['abc', 1]],
		['a string pattern',     ['abc', true]],
		['an object pattern',    ['abc', {}]]
	]
		.forEach(([description, parameters]) => {
			test(`Ensure ${description} does not validate`, () => {
				expect(() => {
					capturingGroupValues(...parameters);
				}).toThrow();
			});
		})
	;


	//-- Expected values
	[
		['containing no group',          ['abc', /./u],                         'an empty object',             {}],
		['matching an unamed group',     ['abc', /(a)/u],                       'an empty object',             {}],  // eslint-disable-line prefer-named-capture-group
		['matching 0 of 1 named group',  ['abc', /(?<group>z)?/u],              'an empty object',             {}],
		['matching 1 of 1 named group',  ['abc', /(?<group>a)/u],               'an object with that group',   { group: 'a' }],
		['matching 1 of 2 named groups', ['abc', /(?<group1>a)(?<group2>z)?/u], 'an object with that group',   { group1: 'a' }],
		['matching 2 of 2 named groups', ['abc', /(?<group1>a)(?<group2>b)/u],  'an object with these groups', { group1: 'a', group2: 'b' }]
	]
		.forEach(([description, parameters, expectedDescription, expected]) => {
			test(`Ensure a pattern ${description} returns ${expectedDescription}`, () => {
				expect(capturingGroupValues(...parameters)).toEqual(expected);
			});
		})
	;

});
