## @brixtol/country-names

Country code ([3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)) to Country name ([ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) mappings used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with Localization and i18n operations.

> Mappings returned in the English Language.

Minified: 4.15 KB <br>
Gzipped: 2.25 KB

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm add @brixtol/country-names
```

[npm](https://www.npmjs.com/)

```cli
npm install @brixtol/country-names
```

[Yarn](https://yarnpkg.com/)

```cli
yarn add @brixtol/country-names
```

### Usage

You can pass in a 2 letter country code that is lowercase, uppercase or a mixture of both.

```javascript
import { getCountryName } from '@brixtol/country-names';

const sweden = getCountryName('SE'); // Sweden
const netherlands = getCountryName('nl'); // Netherlands
const usa = getCountryName('uS'); // United States of America
```

###### EXTRAS

The module also exposes the raw mappings and interface on the export. The mappings object is provided **read only** using [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze). In addition to the raw mappings a ISO code union export is also exposed.

```ts
import { Countries, ICountries, CountryCodes, Country } from '@brixtol/country-names';

// Mapping Object

Countries.SE; // Sweden
Countries.NL; // Netherlands
Countries.RU; // Russian Federation

// Interface

ICountries.SE; // Sweden
ICountries.NL; // Netherlands
ICountries.RU; // Russian Federation

// Country Code Union

CountryCodes<'SE' | 'NL' | 'RU'>; // etc etc

```

> The interface is identical to the mapping

### Related

Static GeoIP utility

- [@brixtol/i18n](https://github.com/brixtol/i18n)

Country code to currency code mappings:

- [@brixtol/currency-codes](https://github.com/brixtol/currency-codes)

Currency code to currency symbol mappings:

- [@brixtol/currency-symbols](https://github.com/brixtol/currency-symbols)

### License

Licensed under [MIT](#LICENCE)

---

We [???](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
