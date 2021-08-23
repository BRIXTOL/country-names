## _CHANGELOG_

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
import { getCountryName } from "@brixtol/country-names";

const country = getCountryName("SE"); // Sweden
```

##### Breakdown

- No longer support default exports, project now uses named export approach.
- Provided interface of country mappings, available on `ICountries`

### 0.1.0 - 17/08/2021

- Initial Release
