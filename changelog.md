## _CHANGELOG_

### 1.2.1 - 05/11/2021

Improved type support and provided error handling for when invalid or incorrect ISO codes are provided.

- Added literal union support for argument `code`
- Added type support for country name reference of return
- Added error support when an unmatched ISO is provided
- Appended "(DPRK)" to "North Korea" country name.

### 1.2.0 - 24/10/2021

- Added `CountryCodes` type export

### 1.1.2 - 10/09/2021

Replaced development rollup dependencies to use [@brixtol/rollup-config](https://github.com/BRIXTOL/rollup-config)

### 1.1.1 - 23/08/2021

Extend prettier config in `package.json` file and align readme.

### 1.1.0 - 23/08/2021

Mostly development space adjustments, no code was modified, aside from the eslint formats that were applied to source. In addition, the module also exposes the mapping object on the exports.

##### Breakdown

- Expose the object mapping on export, available on `Countries`
- Improved and aligned rollup build config
- Added [@brixtol/eslint-config](https://github.com/BRIXTOL/eslint-config) to development dependencies.
- Added [@brixtol/prettier-config](https://github.com/BRIXTOL/prettier-config) to development dependencies.

### 1.0.0 - 22/08/2021

Dropped support of default exports. This module uses named exports. The module typings now export an identical interface of countries.

##### Named export

```js
import { getCountryName } from '@brixtol/country-names';

const country = getCountryName('SE'); // Sweden
```

##### Breakdown

- No longer support default exports, project now uses named export approach.
- Provided interface of country mappings, available on `ICountries`

### 0.1.0 - 17/08/2021

- Initial Release
