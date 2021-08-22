## @brixtol/country-names

Country code ([3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)) to Country name ([ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) mappings used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with Localization and i18n operations.

> Mappings returned in the English Language.

Minified: 2.23 KB <br>
Gzipped: 1.08 KB

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @brixtol/country-names
```

##### Boomer / Sheep Alternatives

[npm](https://www.npmjs.com/)

```cli
npm install @brixtol/country-names
```

[Yarn](https://yarnpkg.com/)

```cli
yarn add @brixtol/country-names
```

### Usage

You can pass in a country code that is lowercase, uppercase or a mixture of both.

```javascript
import { getCountryName } from "@brixtol/country-names";

// Country code SE (Sweden)
const sweden = getCountryName("SE");

// Country code NL (Netherlands)
const netherlands = getCountryName("nl");

// ....
```

### Related

- [@brixtol/currency-codes](https://github.com/brixtol/currency-codes)
- [@brixtol/currency-symbols](https://github.com/brixtol/currency-symbols)
- [@brixtol/currency-symbol-placements](https://github.com/brixtol/currency-symbol-placements)

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
