export interface ICountry {
    name: string;
    phonecode: string;
    isoCode: string;
    flag: string;
    currency: string;
}

export interface IState {
    name: string;
    isoCode: string;
    countryCode: string;
}
