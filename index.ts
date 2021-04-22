import countryList from './lib/country.json';
import stateList from './lib/state.json';
import { ICountry, IState } from './src/interface';

export { ICountry, IState } from './src/interface';

const _findEntryByCode = (source: any, code: string) => {
	if (code && source != null) {
		const codex = source.findIndex((c: any) => {
			return c.isoCode === code;
		});
		return codex !== -1 ? source[codex] : '';
	}
	return '';
};

const compare = (a: any, b: any) => {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
};

export default {
	getStatesOfCountry(countryCode: string): IState[] {
		const states = stateList.filter((value) => {
			return value.countryCode === countryCode;
		});
		return states.sort(compare);
	},
	getAllCountries(): ICountry[] {
		return countryList;
	},
	getAllStates(): IState[] {
		return stateList;
	},
	getCountryByCode(isoCode: string): ICountry {
		return _findEntryByCode(countryList, isoCode);
	},
	getStateByCode(isoCode: string): IState {
		return _findEntryByCode(stateList, isoCode);
	},
};
