// importing interfaces from main index.ts file
import { ICountry, IState } from '../lib/interface';

// writing tests for Interfaces
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript

/* Country */
function isValidCountryObjectStructure(object: any): object is ICountry {
  return 'name' in object && 'phonecode' in object && 'isoCode' in object && 'flag' in object;
}

test('Check for Interface export when Type Structure is Same', () => {
  const country: ICountry = {
    name: 'India',
    phonecode: '+91',
    isoCode: 'IN',
    flag: '🇮🇳',
    currency: 'INR',
    latitude: '20.00000000',
    longitude: '77.00000000',
    region: 'Asia'
  };
  const isCountry = isValidCountryObjectStructure(country)
  expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Not Same', () => {
  const country = {
    phonecode: '+91', // missing name field
    isoCode: 'IN',
    flag: '🇮🇳'
  };
  const isCountry = isValidCountryObjectStructure(country)
  expect(isCountry).toEqual(false);
});

function isValidCountryObjectAndValueType(object: any): object is ICountry {
  return typeof typeof object.name == "string" && typeof object.phonecode == "string" && typeof object.isoCode == "string" && typeof object.flag == "string";
}

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
  const country: ICountry = {
    name: 'India',
    phonecode: '+91',
    isoCode: 'IN',
    flag: '🇮🇳',
    currency: 'INR',
    latitude: '20.00000000',
    longitude: '77.00000000',
    region: 'Asia'
  };
  const isCountry = isValidCountryObjectAndValueType(country)
  expect(isCountry).toEqual(true);
});

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
  const country = {
    name: 'India',
    phonecode: 91, // wrong type
    isoCode: 'IN',
    flag: '🇮🇳',
    currency: 'INR',
    latitude: '20.00000000',
    longitude: '77.00000000',
    region: 'Asia'
  };
  const isCountry = isValidCountryObjectAndValueType(country)
  expect(isCountry).toEqual(false);
});

/* State */
function isValidStateObjectStructure(object: any): object is IState {
  return 'name' in object && 'isoCode' in object && 'countryCode' in object;
}

test('Check for Interface export when Type Structure is Same', () => {
  const state: IState = {
    name: 'New York',
    isoCode: 'NY',
    countryCode: 'US',
    latitude: '40.71277530',
    longitude: '-74.00597280'
  };
  const isState = isValidStateObjectStructure(state)
  expect(isState).toEqual(true);
});

test('Check for Interface export when Type Structure is Not Same', () => {
  const state = {
    isoCode: 'NY', // missing name field
    countryCode: 'US',
    latitude: '40.71277530',
    longitude: '-74.00597280'
  };
  const isState = isValidStateObjectStructure(state)
  expect(isState).toEqual(false);
});

function isValidStateObjectAndValueType(object: any): object is IState {
  return (
    typeof typeof object.name == "string" &&
    typeof object.isoCode == "string" &&
    typeof object.countryCode == "string" &&
    typeof object.latitude == "string" &&
    typeof object.longitude == "string"
  );
}

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
  const state: IState = {
    name: 'New York',
    isoCode: 'NY',
    countryCode: 'US',
    latitude: '40.71277530',
    longitude: '-74.00597280'
  };
  const isState = isValidStateObjectAndValueType(state)
  expect(isState).toEqual(true);
});

test('Check for Interface export when Type Structure is Same and Value is of same type as well', () => {
  const state = {
    name: 'New York',
    isoCode: 'NY',
    countryCode: 'US',
    latitude: 40.71277530,  // wrong type
    longitude: '-74.00597280'
  };
  const isState = isValidStateObjectAndValueType(state)
  expect(isState).toEqual(false);
});

