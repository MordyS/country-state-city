/* eslint-disable no-shadow */
import { Country, State } from '../index';
import { ICountry, IState } from '../lib/interface';

const executeAllTests = function (Country: any, State: any) {
	test('Check for Country By Code ', () => {
		const code = 'CA';
		const country: ICountry = Country.getCountryByCode(code);
		expect(country).toEqual({
			name: 'Canada',
			phonecode: '1',
			isoCode: 'CA',
			flag: '🇨🇦',
			currency: 'CAD',
			latitude: '60.00000000',
			longitude: '-95.00000000',
			region: 'Northern America'
		});
	});

	test('Check for Country By undefined Code ', () => {
		let code;
		const country: ICountry = Country.getCountryByCode();
		expect(country).toEqual(code);
	});

	test('Check for Canada States', () => {
		const code = 'CA';
		const country: any = Country.getCountryByCode(code);
		const states = State.getStatesOfCountry(country.isoCode);
		const names = states.map((state: IState) => {
			return state.name;
		});
		expect(names).toEqual([
			'Alberta',
			'British Columbia',
			'Manitoba',
			'New Brunswick',
			'Newfoundland and Labrador',
			'Northwest Territories',
			'Nova Scotia',
			'Nunavut',
			'Ontario',
			'Prince Edward Island',
			'Quebec',
			'Saskatchewan',
			'Yukon',
		]);
	});

	test('Check All States for United States Of America', () => {
		const code = 'US';
		const country: any = Country.getCountryByCode(code);
		const states = State.getStatesOfCountry(country.isoCode);
		const names = states.map((state: IState) => {
			return state.name;
		});
		expect(names).toEqual([
			'Alabama',
			'Alaska',
			'American Samoa',
			'Arizona',
			'Arkansas',
			'Baker Island',
			'California',
			'Colorado',
			'Connecticut',
			'Delaware',
			'District of Columbia',
			'Florida',
			'Georgia',
			'Guam',
			'Hawaii',
			'Howland Island',
			'Idaho',
			'Illinois',
			'Indiana',
			'Iowa',
			'Jarvis Island',
			'Johnston Atoll',
			'Kansas',
			'Kentucky',
			'Kingman Reef',
			'Louisiana',
			'Maine',
			'Maryland',
			'Massachusetts',
			'Michigan',
			'Midway Atoll',
			'Minnesota',
			'Mississippi',
			'Missouri',
			'Montana',
			'Navassa Island',
			'Nebraska',
			'Nevada',
			'New Hampshire',
			'New Jersey',
			'New Mexico',
			'New York',
			'North Carolina',
			'North Dakota',
			'Northern Mariana Islands',
			'Ohio',
			'Oklahoma',
			'Oregon',
			'Palmyra Atoll',
			'Pennsylvania',
			'Puerto Rico',
			'Rhode Island',
			'South Carolina',
			'South Dakota',
			'Tennessee',
			'Texas',
			'United States Minor Outlying Islands',
			'United States Virgin Islands',
			'Utah',
			'Vermont',
			'Virginia',
			'Wake Island',
			'Washington',
			'West Virginia',
			'Wisconsin',
			'Wyoming',
		]);
	});

	test('Check for State By Code ', () => {
		const code = 'NY';
		const state: IState = State.getStateByCode(code);
		expect(state).toEqual({
			name: 'New York',
			isoCode: 'NY',
			countryCode: 'US',
			latitude: '40.71277530',
			longitude: '-74.00597280'
		});
	});
};
export default executeAllTests;
executeAllTests(Country, State);
