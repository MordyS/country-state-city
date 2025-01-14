export interface ICountry {
    name: string;
    phonecode: string;
    isoCode: string;
    flag: string;
    currency: string;
    latitude: string;
    longitude: string;
    region: string;
    internationalOrganization: string;
    getCountryByCode?(): ICountry;
	getAllCountries?(): ICountry[];
	isEuropeanUnion?(): boolean;
}

export interface IState {
    name: string;
    isoCode: string;
    countryCode: string;
    latitude: string;
    longitude: string;
    getAllStates?(): IState[];
	getStatesOfCountry?(): IState[];
	getStateByCode?(): IState;
}
