export interface ICountry {
    name: string;
    phonecode: string;
    isoCode: string;
    flag: string;
    currency: string;
    latitude: string;
    longitude: string;
}

export interface IState {
    name: string;
    isoCode: string;
    countryCode: string;
    latitude: string;
    longitude: string;
}
