NOTE!
==============================
This is a slim version of country-state-city
forked from [here](https://github.com/harpreetkhalsagtbit/country-state-city)
I removed the timezones and the cities and everithing i don't need
in order to decrease the size of my project
if you want, please use [the original npm package](https://www.npmjs.com/package/country-state-city)

# country-state-city
Basic library for Country, State and City

Data Source:<br>
https://github.com/dr5hn/countries-states-cities-database<br>
For any data related issue, you can raise a Issue [here](https://github.com/dr5hn/countries-states-cities-database/issues/new).

# Install
`npm i country-state-city-slim`
# Docs

getCountryByCode(code)
---------------

It accepts a valid `CountryCode` eg: `'AS'` and   returns *Country Details*

type: **json | ICountry**

```js
{
	"isoCode": "IN",
	"name": "India",
	"phonecode": "91",
	"flag": "🇮🇳",
	"currency": "INR",
	"latitude": "20.00000000",
	"longitude": "77.00000000"
}
```

getStatesOfCountry(countryCode)
---------------

It accepts a valid `CountryCode` and returns *all States* as Array of JSON

type: **array of json | IState**

```js
[
	{
		"name": "Delhi",
		"isoCode": "DL",
		"countryCode": "IN",
		"latitude": "28.70405920",
		"longitude": "77.10249020"
	}
]

```

getAllCountries
---------------
It returns **all Countries**

type: **array of json | ICountry**

```js
[
	{
		"isoCode": "IN",
		"name": "India",
		"phonecode": "91",
		"flag": "🇮🇳",
		"currency": "INR",
		"latitude": "20.00000000",
		"longitude": "77.00000000"
	}
]
```

getAllStates
---------------
It returns **all States**

type: **array of json | IState**

```js
[
	{
		"name": "Delhi",
		"isoCode": "DL",
		"countryCode": "IN",
		"latitude": "28.70405920",
		"longitude": "77.10249020"

	}
]
```


Special Thanks
---------------

[@baywet](https://github.com/baywet) - For mentoring Javascript to Typescript Conversion

[@dr5hn](https://github.com/dr5hn) - For updated World Data Dictionary

Change Logs
---------------
**v2.0.0 (Backward Incompatible)** :: [Data Source (dr5hn)](https://github.com/dr5hn/countries-states-cities-database)

1. Not backward compatible with previous versions.
2. New and updated API functions.
3. Removed proprietor Indexed Id's for uniquely identifying Country, State, City. Instead now using standard isoCodes.
4. Data taken from more robust and accurate database.
5. Countries with their respective flags, isoCode, currencies, latitude, longitude & timezones.
6. States & cities with their latitude & longitude.

**v1.0.0** :: [Data Source (hiiamrohit)](https://github.com/hiiamrohit/Countries-States-Cities-database)
1. `export = {}` changed to `export default` in index.ts.
2. `Interface` type `re-exported` from `index.ts`.
3. `Compatible` with `ES6` module syntax.
4. `Compatible` with `AMD` module - using `require('../index').default`.
5. Add tests for Interface Re-Exports.
6. Test cases for both AMD modules and ES6 modules usage.
7. Common Test Cases are being shared between AMD and ES6 modules test files.

**v0.1.8** :: [Data Source (hiiamrohit)](https://github.com/hiiamrohit/Countries-States-Cities-database)
1. Development code - Javascript to Typescript conversion: [#12](https://github.com/harpreetkhalsagtbit/country-state-city/pull/12)

**v0.1.0**
1. Fix: [#2](https://github.com/harpreetkhalsagtbit/country-state-city/issues/2)
2. Fix: [#3](https://github.com/harpreetkhalsagtbit/country-state-city/issues/3)
3. Added some missing states and cities for Canada and US
