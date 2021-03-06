import { LiteralUnion, AnyCase } from '@brixtol/tsutils';

export interface ICountries {
  /** Andorra */
  AD: 'Andorra';
  /** United Arab Emirates */
  AE: 'United Arab Emirates';
  /** Afghanistan */
  AF: 'Afghanistan';
  /** Antigua And Barbuda */
  AG: 'Antigua And Barbuda';
  /** Anguilla */
  AI: 'Anguilla';
  /** Albania */
  AL: 'Albania';
  /** Armenia */
  AM: 'Armenia';
  /** Angola */
  AO: 'Angola';
  /** Argentina */
  AR: 'Argentina';
  /** American Samoa */
  AS: 'American Samoa';
  /** Austria */
  AT: 'Austria';
  /** Australia */
  AU: 'Australia';
  /** Aruba */
  AW: 'Aruba';
  /** Aland Islands */
  AX: 'Åland Islands';
  /** Azerbaijan */
  AZ: 'Azerbaijan';
  /** Bosnia And Herzegovina */
  BA: 'Bosnia and Herzegovina';
  /** Barbados */
  BB: 'Barbados';
  /** Bangladesh */
  BD: 'Bangladesh';
  /** Belgium */
  BE: 'Belgium';
  /** Burkina Faso */
  BF: 'Burkina Faso';
  /** Bulgaria */
  BG: 'Bulgaria';
  /** Bahrain */
  BH: 'Bahrain';
  /** Burundi */
  BI: 'Burundi';
  /** Benin */
  BJ: 'Benin';
  /** Saint Barthelemy */
  BL: 'Saint Barthélemy';
  /** Bermuda */
  BM: 'Bermuda';
  /** Brunei Darussalam */
  BN: 'Brunei Darussalam';
  /** Bolivia; Plurinational State */
  BO: 'Bolivia';
  /** Bonaire Sint Eustatius And Saba */
  BQ: 'Bonaire, Sint Eustatius and Saba';
  /** Brazil */
  BR: 'Brazil';
  /** Bahamas */
  BS: 'Bahamas';
  /** Bhutan  */
  BT: 'Bhutan';
  /** Bouvet Island */
  BV: 'NOK';
  /** Botswana */
  BW: 'Botswana';
  /** Belarus */
  BY: 'Belarus';
  /** Belize */
  BZ: 'Belize';
  /** Canada */
  CA: 'Canada';
  /** Cocos Keeling Islands */
  CC: 'Cocos (Keeling) Islands';
  /** Congo The Democratic Republic */
  CD: 'Congo, Democratic Republic';
  /** Central African Republic */
  CF: 'Central African Republic';
  /** The Congo */
  CG: 'Congo';
  /** Switzerland */
  CH: 'Switzerland';
  /** Cote Divoire */
  CI: "Côte d'Ivoire";
  /** Cook Islands */
  CK: 'Cook Islands';
  /** Chile */
  CL: 'Chile';
  /** Cameroon */
  CM: 'Cameroon';
  /** China */
  CN: 'China';
  /** Colombia */
  CO: 'Colombia';
  /** Costa Rica */
  CR: 'Colombia';
  /** Cuba */
  CU: 'Cuba';
  /** Cabo Verde */
  CV: 'Cabo Verde';
  /** Curacao */
  CW: 'Curaçao';
  /** Christmas Island */
  CX: 'Christmas Island';
  /** Cyprus */
  CY: 'Cyprus';
  /** Czech Republic */
  CZ: 'Czech Republic';
  /** Germany */
  DE: 'Germany';
  /** Djibouti */
  DJ: 'Djibouti';
  /** Denmark */
  DK: 'Denmark';
  /** Dominica  */
  DM: 'Dominica';
  /** Dominican Republic */
  DO: 'Dominican Republic';
  /** Algeria **/
  DZ: 'Algeria';
  /** Ecuador */
  EC: 'Ecuador';
  /** Estonia */
  EE: 'Estonia';
  /** Egypt */
  EG: 'Egypt';
  /** Western Sahara */
  EH: 'Western Sahara';
  /** Eritrea */
  ER: 'Eritrea';
  /** Spain */
  ES: 'Spain';
  /** Ethiopia */
  ET: 'Ethiopia';
  /** Finland */
  FI: 'Finland';
  /** Fiji */
  FJ: 'Fiji';
  /** Falkland Islands Malvinas */
  FK: 'Falkland Islands (Malvinas)';
  /** Micronesia Federated States */
  FM: 'Micronesia, Federated States';
  /** Faroe Islands */
  FO: 'Faroe Islands';
  /** France */
  FR: 'France';
  /** Gabon */
  GA: 'Gabon';
  /** United Kingdom Of Great Britain and Northern Ireland */
  GB: 'United Kingdom';
  /** Grenada */
  GD: 'Grenada';
  /** Georgia */
  GE: 'Georgia';
  /** French Guiana */
  GF: 'French Guiana';
  /** Guernsey */
  GG: 'Guernsey';
  /** Ghana */
  GH: 'Ghana';
  /** Gibraltar */
  GI: 'GIP';
  /** Greenland */
  GL: 'Greenland';
  /** Gambia */
  GM: 'Gambia';
  /** Guinea */
  GN: 'Guinea';
  /** Guadeloupe */
  GP: 'Guadeloupe';
  /** Equatorial Guinea  */
  GQ: 'Equatorial Guinea ';
  /** Greece */
  GR: 'Greece';
  /** South Georgia and The South Sandwich Islands */
  GS: 'South Georgia and the South Sandwich Islands';
  /** Guatemala */
  GT: 'Guatemala';
  /** Guam */
  GU: 'Guam';
  /** Guinea Bissau */
  GW: 'Guinea Bissau';
  /** Guyana */
  GY: 'Guyana';
  /** Hong Kong */
  HK: 'Hong Kong';
  /** Heard Island And Mcdonald Islands */
  HM: 'Heard Island and Mcdonald Islands';
  /** Honduras */
  HN: 'Honduras';
  /** Croatia */
  HR: 'Croatia';
  /** Haiti */
  HT: 'Haiti';
  /** Hungary */
  HU: 'Hungary';
  /** Indonesia */
  ID: 'Indonesia';
  /** Ireland */
  IE: 'Ireland';
  /** Israel */
  IL: 'Israel';
  /** Isle Of Man  */
  IM: 'Isle of Man';
  /** India (Indian Rupee) */
  IN: 'India';
  /** British Indian Ocean Territory */
  IO: 'British Indian Ocean Territory';
  /** Iraq */
  IQ: 'Iraq';
  /** Iran Islamic Republic  */
  IR: 'Iran, Islamic Republic';
  /** Iceland */
  IS: 'Iceland';
  /** Italy */
  IT: 'Italy';
  /** Jersey */
  JE: 'Jersey';
  /** Jamaica */
  JM: 'Jamaica';
  /** Jordan */
  JO: 'Jordan';
  /** Japan */
  JP: 'Japan';
  /** Kenya */
  KE: 'Kenya';
  /** Kyrgyzstan */
  KG: 'Kyrgyzstan';
  /** Cambodia */
  KH: 'Cambodia';
  /** Kiribati */
  KI: 'Kiribati';
  /** Comoros */
  KM: 'Comoros';
  /** Saint Kitts And Nevis */
  KN: 'Saint Kitts and Nevis';
  /** North Korea */
  KP: 'North Korea (DPRK)';
  /** Korea The Republic Of */
  KR: 'South Korea';
  /** Kuwait  */
  KW: 'Kuwait';
  /** Cayman Islands */
  KY: 'Cayman Islands';
  /** Kazakhstan */
  KZ: 'Kazakhstan';
  /** Lao Peoples Democratic Republic  */
  LA: 'Lao Peoples Democratic Republic';
  /** Lebanon  */
  LB: 'Lebanon';
  /** Saint Lucia */
  LC: 'Saint Lucia';
  /** Liechtenstein */
  LI: 'Liechtenstein';
  /** Sri Lanka */
  LK: 'Sri Lanka';
  /** Liberia */
  LR: 'Liberia';
  /** Lesotho  */
  LS: 'Lesotho';
  /** Lithuania */
  LT: 'Lithuania';
  /** Luxembourg */
  LU: 'Luxembourg';
  /** Latvia */
  LV: 'Latvia';
  /** Libya */
  LY: 'Libya';
  /** Morocco */
  MA: 'Morocco';
  /** Monaco */
  MC: 'Monaco';
  /** Moldova Republic */
  MD: 'Moldova Republic';
  /** Montenegro */
  ME: 'Montenegro';
  /** Saint Martin French Part */
  MF: 'Saint Martin';
  /** Madagascar */
  MG: 'Madagascar';
  /** Marshall Islands */
  MH: 'Marshall Islands';
  /** Republic Of North Macedonia */
  MK: 'Republic of North Macedonia';
  /** Mali */
  ML: 'Mali';
  /** Myanmar */
  MM: 'Myanmar';
  /** Mongolia */
  MN: 'Mongolia';
  /** Macao (Pataca) */
  MO: 'Macao';
  /** Northern Mariana Islands */
  MP: 'Northern Mariana Islands';
  /** Martinique */
  MQ: 'Martinique';
  /** Mauritania */
  MR: 'Mauritania';
  /** Montserrat */
  MS: 'Montserrat';
  /** Malta */
  MT: 'Malta';
  /** Mauritius */
  MU: 'Mauritius';
  /** Maldives */
  MV: 'Maldives';
  /** Malawi */
  MW: 'Malawi';
  /** Mexico */
  MX: 'Mexico';
  /** Malaysia */
  MY: 'Malaysia';
  /** Mozambique */
  MZ: 'Mozambique';
  /** Namibia  */
  NA: 'Namibia';
  /** New Caledonia */
  NC: 'New Caledonia';
  /** Niger */
  NE: 'Niger';
  /** Norfolk Island  */
  NF: 'Norfolk Island';
  /** Nigeria */
  NG: 'Nigeria';
  /** Nicaragua  */
  NI: 'Nicaragua';
  /** Netherlands */
  NL: 'Netherlands';
  /** Norway */
  NO: 'Norway';
  /** Nepal  */
  NP: 'Nepal';
  /** Nauru */
  NR: 'Nauru';
  /** Niue */
  NU: 'Niue';
  /** New Zealand  */
  NZ: 'New Zealand';
  /** Oman */
  OM: 'Oman';
  /** Panama  */
  PA: 'Panama';
  /** Peru */
  PE: 'Peru';
  /** French Polynesia */
  PF: 'French Polynesia';
  /** Papua New Guinea  */
  PG: 'Papua New Guinea';
  /** Philippines */
  PH: 'Philippines';
  /** Pakistan  */
  PK: 'Pakistan';
  /** Poland  */
  PL: 'Poland';
  /** Saint Pierre and Miquelon */
  PM: 'Saint Pierre and Miquelon';
  /** Pitcairn  */
  PN: 'Pitcairn';
  /** Puerto Rico */
  PR: 'Puerto Rico';
  /** Palestine */
  PS: 'Palestine';
  /** Portugal  */
  PT: 'Portugal';
  /** Palau */
  PW: 'Palau';
  /** Paraguay  */
  PY: 'Paraguay';
  /** Qatar */
  QA: 'Qatar';
  /** Reunion */
  RE: 'Reunion';
  /** Romania  */
  RO: 'Romania';
  /** Serbia  */
  RS: 'Serbia';
  /** Russian Federation */
  RU: 'Russian Federation';
  /** Rwanda */
  RW: 'Rwanda';
  /** Saudi Arabia */
  SA: 'Saudi Arabia';
  /** Solomon Islands  */
  SB: 'Solomon Islands ';
  /** Seychelles */
  SC: 'Seychelles';
  /** Sudan  */
  SD: 'Sudan';
  /** Sweden */
  SE: 'Sweden';
  /** Singapore (Singapore Dollar) */
  SG: 'Singapore';
  /** Saint Helena Ascension And Tristan Da Cunha */
  SH: 'Saint Helena, Ascension and Tristan da Cunha';
  /** Slovenia */
  SI: 'Slovenia';
  /** Svalbard and Jan Mayen  */
  SJ: 'Svalbard and Jan Mayen';
  /** Slovakia  */
  SK: 'Slovakia';
  /** Sierra Leone  */
  SL: 'Sierra Leone';
  /** San Marino */
  SM: 'San Marino';
  /** Senegal */
  SN: 'Senegal';
  /** Somalia */
  SO: 'Somalia';
  /** Suriname */
  SR: 'Suriname';
  /** South Sudan */
  SS: 'South Sudan';
  /** Sao Tome And Principe */
  ST: 'Sao Tome and Principe';
  /** El Salvador */
  SV: 'El Salvador';
  /** Sint Maarten */
  SX: 'Sint Maarten';
  /** Syrian Arab Republic  */
  SY: 'Syrian Arab Republic';
  /** Swaziland */
  SZ: 'Swaziland';
  /** Turks And Caicos Islands */
  TC: 'Turks and Caicos Islands';
  /** Chad  */
  TD: 'Chad';
  /** French Southern Territories  */
  TF: 'French Southern Territories';
  /** Togo */
  TG: 'Togo';
  /** Thailand */
  TH: 'Thailand';
  /** Tajikistan */
  TJ: 'Tajikistan';
  /** Tokelau */
  TK: 'Tokelau';
  /** Timor Leste */
  TL: 'Timor Leste';
  /** Turkmenistan  */
  TM: 'Turkmenistan';
  /** Tunisia */
  TN: 'Tunisia ';
  /** Tonga */
  TO: 'Tonga';
  /** Turkey */
  TR: 'Turkey';
  /** Trinidad And Tobago */
  TT: 'Trinidad and Tobago';
  /** Tuvalu  */
  TV: 'Tuvalu';
  /** Taiwan */
  TW: 'Taiwan';
  /** Tanzania United Republic */
  TZ: 'Tanzania, United Republic';
  /** Ukraine */
  UA: 'Ukraine';
  /** Uganda */
  UG: 'Uganda';
  /** United States Minor Outlying Islands */
  UM: 'United States Minor Outlying Islands';
  /** United States Of America */
  US: 'United States of America';
  /** Uruguay */
  UY: 'Uruguay';
  /** Uzbekistan */
  UZ: 'Uzbekistan';
  /** Holy See  */
  VA: 'Holy See';
  /** Saint Vincent And The Grenadines */
  VC: 'Saint Vincent and the Grenadines';
  /** Virgin Islands; British */
  VG: 'Virgin Islands, British';
  /** Virgin Islands; U.S */
  VI: 'Virgin Islands, U.S';
  /** Viet Nam */
  VN: 'Viet Nam';
  /** Vanuatu */
  VU: 'Vanuatu';
  /** Wallis And Futuna */
  WF: 'Wallis and Futuna';
  /** Samoa */
  WS: 'Samoa';
  /** Republic of Kosovo */
  XK: 'Republic of Kosovo';
  /** Yemen */
  YE: 'Yemen';
  /** Mayotte */
  YT: 'Mayotte';
  /** South Africa */
  ZA: 'South Africa';
  /** Zambia */
  ZM: 'Zambia';
  /** Zimbabwe */
  ZW: 'Zimbabwe';
}

/* -------------------------------------------- */
/* ANNOTATION WORK-AROUND                       */
/* -------------------------------------------- */

/**
 * Type Annotated Union
 *
 * This is a temporary workaround for `keyof` not passing
 * JSDocs annotations declared on interface properties when
 * converting to union types.
 *
 * Until this is available in TypeScript, the unions are
 * hardcoded work-around.
 *
 * @see https://github.com/microsoft/TypeScript/issues/41531
 */
export type CountryCodes = (
 /** Andorra */
 'AD' |
 /** United Arab Emirates */
 'AE' |
 /** Afghanistan */
 'AF' |
 /** Antigua And Barbuda */
 'AG' |
 /** Anguilla */
 'AI' |
 /** Albania */
 'AL' |
 /** Armenia */
 'AM' |
 /** Angola */
 'AO' |
 /** Argentina */
 'AR' |
 /** American Samoa */
 'AS' |
 /** Austria */
 'AT' |
 /** Australia */
 'AU' |
 /** Aruba */
 'AW' |
 /** Aland Islands */
 'AX' |
 /** Azerbaijan */
 'AZ' |
 /** Bosnia And Herzegovina */
 'BA' |
 /** Barbados */
 'BB' |
 /** Bangladesh */
 'BD' |
 /** Belgium */
 'BE' |
 /** Burkina Faso */
 'BF' |
 /** Bulgaria */
 'BG' |
 /** Bahrain */
 'BH' |
 /** Burundi */
 'BI' |
 /** Benin */
 'BJ' |
 /** Saint Barthelemy */
 'BL' |
 /** Bermuda */
 'BM' |
 /** Brunei Darussalam */
 'BN' |
 /** Bolivia | Plurinational State */
 'BO' |
 /** Bonaire Sint Eustatius And Saba */
 'BQ' |
 /** Brazil */
 'BR' |
 /** Bahamas */
 'BS' |
 /** Bhutan  */
 'BT' |
 /** Bouvet Island */
 'BV' |
 /** Botswana */
 'BW' |
 /** Belarus */
 'BY' |
 /** Belize */
 'BZ' |
 /** Canada */
 'CA' |
 /** Cocos Keeling Islands */
 'CC' |
 /** Congo The Democratic Republic */
 'CD' |
 /** Central African Republic */
 'CF' |
 /** The Congo */
 'CG' |
 /** Switzerland */
 'CH' |
 /** Cote Divoire */
 'CI' |
 /** Cook Islands */
 'CK' |
 /** Chile */
 'CL' |
 /** Cameroon */
 'CM' |
 /** China */
 'CN' |
 /** Colombia */
 'CO' |
 /** Costa Rica */
 'CR' |
 /** Cuba */
 'CU' |
 /** Cabo Verde */
 'CV' |
 /** Curacao */
 'CW' |
 /** Christmas Island */
 'CX' |
 /** Cyprus */
 'CY' |
 /** Czech Republic */
 'CZ' |
 /** Germany */
 'DE' |
 /** Djibouti */
 'DJ' |
 /** Denmark */
 'DK' |
 /** Dominica  */
 'DM' |
 /** Dominican Republic */
 'DO' |
 /** Algeria **/
 'DZ' |
 /** Ecuador */
 'EC' |
 /** Estonia */
 'EE' |
 /** Egypt */
 'EG' |
 /** Western Sahara */
 'EH' |
 /** Eritrea */
 'ER' |
 /** Spain */
 'ES' |
 /** Ethiopia */
 'ET' |
 /** Finland */
 'FI' |
 /** Fiji */
 'FJ' |
 /** Falkland Islands Malvinas */
 'FK' |
 /** Micronesia Federated States */
 'FM' |
 /** Faroe Islands */
 'FO' |
 /** France */
 'FR' |
 /** Gabon */
 'GA' |
 /** United Kingdom Of Great Britain and Northern Ireland */
 'GB' |
 /** Grenada */
 'GD' |
 /** Georgia */
 'GE' |
 /** French Guiana */
 'GF' |
 /** Guernsey */
 'GG' |
 /** Ghana */
 'GH' |
 /** Gibraltar */
 'GI' |
 /** Greenland */
 'GL' |
 /** Gambia */
 'GM' |
 /** Guinea */
 'GN' |
 /** Guadeloupe */
 'GP' |
 /** Equatorial Guinea  */
 'GQ' |
 /** Greece */
 'GR' |
 /** South Georgia and The South Sandwich Islands */
 'GS' |
 /** Guatemala */
 'GT' |
 /** Guam */
 'GU' |
 /** Guinea Bissau */
 'GW' |
 /** Guyana */
 'GY' |
 /** Hong Kong */
 'HK' |
 /** Heard Island And Mcdonald Islands */
 'HM' |
 /** Honduras */
 'HN' |
 /** Croatia */
 'HR' |
 /** Haiti */
 'HT' |
 /** Hungary */
 'HU' |
 /** Indonesia */
 'ID' |
 /** Ireland */
 'IE' |
 /** Israel */
 'IL' |
 /** Isle Of Man  */
 'IM' |
 /** India (Indian Rupee) */
 'IN' |
 /** British Indian Ocean Territory */
 'IO' |
 /** Iraq */
 'IQ' |
 /** Iran Islamic Republic  */
 'IR' |
 /** Iceland */
 'IS' |
 /** Italy */
 'IT' |
 /** Jersey */
 'JE' |
 /** Jamaica */
 'JM' |
 /** Jordan */
 'JO' |
 /** Japan */
 'JP' |
 /** Kenya */
 'KE' |
 /** Kazakhstan */
 'KG' |
 /** Cambodia */
 'KH' |
 /** Kiribati */
 'KI' |
 /** Comoros */
 'KM' |
 /** Saint Kitts And Nevis */
 'KN' |
 /** North Korea */
 'KP' |
 /** Korea The Republic Of */
 'KR' |
 /** Kuwait  */
 'KW' |
 /** Cayman Islands */
 'KY' |
 /** Kazakhstan */
 'KZ' |
 /** Lao Peoples Democratic Republic  */
 'LA' |
 /** Lebanon  */
 'LB' |
 /** Saint Lucia */
 'LC' |
 /** Liechtenstein */
 'LI' |
 /** Sri Lanka */
 'LK' |
 /** Liberia */
 'LR' |
 /** Lesotho  */
 'LS' |
 /** Lithuania */
 'LT' |
 /** Luxembourg */
 'LU' |
 /** Latvia */
 'LV' |
 /** Libya */
 'LY' |
 /** Morocco */
 'MA' |
 /** Monaco */
 'MC' |
 /** Moldova Republic */
 'MD' |
 /** Montenegro */
 'ME' |
 /** Saint Martin French Part */
 'MF' |
 /** Madagascar */
 'MG' |
 /** Marshall Islands */
 'MH' |
 /** Republic Of North Macedonia */
 'MK' |
 /** Mali */
 'ML' |
 /** Myanmar */
 'MM' |
 /** Mongolia */
 'MN' |
 /** Macao (Pataca) */
 'MO' |
 /** Northern Mariana Islands */
 'MP' |
 /** Martinique */
 'MQ' |
 /** Mauritania */
 'MR' |
 /** Montserrat */
 'MS' |
 /** Malta */
 'MT' |
 /** Mauritius */
 'MU' |
 /** Maldives */
 'MV' |
 /** Malawi */
 'MW' |
 /** Mexico */
 'MX' |
 /** Malaysia */
 'MY' |
 /** Mozambique */
 'MZ' |
 /** Namibia  */
 'NA' |
 /** New Caledonia */
 'NC' |
 /** Niger */
 'NE' |
 /** Norfolk Island  */
 'NF' |
 /** Nigeria */
 'NG' |
 /** Nicaragua  */
 'NI' |
 /** Netherlands */
 'NL' |
 /** Norway */
 'NO' |
 /** Nepal  */
 'NP' |
 /** Nauru */
 'NR' |
 /** Niue */
 'NU' |
 /** New Zealand  */
 'NZ' |
 /** Oman */
 'OM' |
 /** Panama  */
 'PA' |
 /** Peru */
 'PE' |
 /** French Polynesia */
 'PF' |
 /** Papua New Guinea  */
 'PG' |
 /** Philippines */
 'PH' |
 /** Pakistan  */
 'PK' |
 /** Poland  */
 'PL' |
 /** Saint Pierre and Miquelon */
 'PM' |
 /** Pitcairn  */
 'PN' |
 /** Puerto Rico */
 'PR' |
 /** Palestine */
 'PS' |
 /** Portugal  */
 'PT' |
 /** Palau */
 'PW' |
 /** Paraguay  */
 'PY' |
 /** Qatar */
 'QA' |
 /** Reunion */
 'RE' |
 /** Romania  */
 'RO' |
 /** Serbia  */
 'RS' |
 /** Russian Federation */
 'RU' |
 /** Rwanda */
 'RW' |
 /** Saudi Arabia */
 'SA' |
 /** Solomon Islands  */
 'SB' |
 /** Seychelles */
 'SC' |
 /** Sudan  */
 'SD' |
 /** Sweden */
 'SE' |
 /** Singapore (Singapore Dollar) */
 'SG' |
 /** Saint Helena Ascension And Tristan Da Cunha */
 'SH' |
 /** Slovenia */
 'SI' |
 /** Svalbard and Jan Mayen  */
 'SJ' |
 /** Slovakia  */
 'SK' |
 /** Sierra Leone  */
 'SL' |
 /** San Marino */
 'SM' |
 /** Senegal */
 'SN' |
 /** Somalia */
 'SO' |
 /** Suriname */
 'SR' |
 /** South Sudan */
 'SS' |
 /** Sao Tome And Principe */
 'ST' |
 /** El Salvador */
 'SV' |
 /** Sint Maarten */
 'SX' |
 /** Syrian Arab Republic  */
 'SY' |
 /** Swaziland */
 'SZ' |
 /** Turks And Caicos Islands */
 'TC' |
 /** Chad  */
 'TD' |
 /** French Southern Territories  */
 'TF' |
 /** Togo */
 'TG' |
 /** Thailand */
 'TH' |
 /** Tajikistan */
 'TJ' |
 /** Tokelau */
 'TK' |
 /** Timor Leste */
 'TL' |
 /** Turkmenistan  */
 'TM' |
 /** Tunisia */
 'TN' |
 /** Tonga */
 'TO' |
 /** Turkey */
 'TR' |
 /** Trinidad And Tobago */
 'TT' |
 /** Tuvalu  */
 'TV' |
 /** Taiwan */
 'TW' |
 /** Tanzania United Republic */
 'TZ' |
 /** Ukraine */
 'UA' |
 /** Uganda */
 'UG' |
 /** United States Minor Outlying Islands */
 'UM' |
 /** United States Of America */
 'US' |
 /** Uruguay */
 'UY' |
 /** Uzbekistan */
 'UZ' |
 /** Holy See  */
 'VA' |
 /** Saint Vincent And The Grenadines */
 'VC' |
 /** Virgin Islands | British */
 'VG' |
 /** Virgin Islands | U.S */
 'VI' |
 /** Viet Nam */
 'VN' |
 /** Vanuatu */
 'VU' |
 /** Wallis And Futuna */
 'WF' |
  /** Republic of Kosovo */
 'XK' |
 /** Samoa */
 'WS' |
 /** Yemen */
 'YE' |
 /** Mayotte */
 'YT' |
 /** South Africa */
 'ZA' |
 /** Zambia */
 'ZM' |
 /** Zimbabwe */
 'ZW'
)

/**
 * Country Name
 *
 * Extracts the country name from the ICountries interface
 * which is use as the Return type reference
 */
export type CountryName<ISO> = (
  ISO extends CountryCodes
  ? ICountries[ISO]
  : never
)

/**
 * Countries Map
 *
 * Country code (ISO 3166-1 alpha-2) to country name
 * **Readonly** object.
 */
export const Countries: Readonly<ICountries> = Object.freeze({
  AD: 'Andorra',
  AE: 'United Arab Emirates',
  AF: 'Afghanistan',
  AG: 'Antigua And Barbuda',
  AI: 'Anguilla',
  AL: 'Albania',
  AM: 'Armenia',
  AO: 'Angola',
  AR: 'Argentina',
  AS: 'American Samoa',
  AT: 'Austria',
  AU: 'Australia',
  AW: 'Aruba',
  AX: 'Åland Islands',
  AZ: 'Azerbaijan',
  BA: 'Bosnia and Herzegovina',
  BB: 'Barbados',
  BD: 'Bangladesh',
  BE: 'Belgium',
  BF: 'Burkina Faso',
  BG: 'Bulgaria',
  BH: 'Bahrain',
  BI: 'Burundi',
  BJ: 'Benin',
  BL: 'Saint Barthélemy',
  BM: 'Bermuda',
  BN: 'Brunei Darussalam',
  BO: 'Bolivia',
  BQ: 'Bonaire, Sint Eustatius and Saba',
  BR: 'Brazil',
  BS: 'Bahamas',
  BT: 'Bhutan',
  BV: 'NOK',
  BW: 'Botswana',
  BY: 'Belarus',
  BZ: 'Belize',
  CA: 'Canada',
  CC: 'Cocos (Keeling) Islands',
  CD: 'Congo, Democratic Republic',
  CF: 'Central African Republic',
  CG: 'Congo',
  CH: 'Switzerland',
  CI: "Côte d'Ivoire",
  CK: 'Cook Islands',
  CL: 'Chile',
  CM: 'Cameroon',
  CN: 'China',
  CO: 'Colombia',
  CR: 'Colombia',
  CU: 'Cuba',
  CV: 'Cabo Verde',
  CW: 'Curaçao',
  CX: 'Christmas Island',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DE: 'Germany',
  DJ: 'Djibouti',
  DK: 'Denmark',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  DZ: 'Algeria',
  EC: 'Ecuador',
  EE: 'Estonia',
  EG: 'Egypt',
  EH: 'Western Sahara',
  ER: 'Eritrea',
  ES: 'Spain',
  ET: 'Ethiopia',
  FI: 'Finland',
  FJ: 'Fiji',
  FK: 'Falkland Islands (Malvinas)',
  FM: 'Micronesia, Federated States',
  FO: 'Faroe Islands',
  FR: 'France',
  GA: 'Gabon',
  GB: 'United Kingdom',
  GD: 'Grenada',
  GE: 'Georgia',
  GF: 'French Guiana',
  GG: 'Guernsey',
  GH: 'Ghana',
  GI: 'GIP',
  GL: 'Greenland',
  GM: 'Gambia',
  GN: 'Guinea',
  GP: 'Guadeloupe',
  GQ: 'Equatorial Guinea ',
  GR: 'Greece',
  GS: 'South Georgia and the South Sandwich Islands',
  GT: 'Guatemala',
  GU: 'Guam',
  GW: 'Guinea Bissau',
  GY: 'Guyana',
  HK: 'Hong Kong',
  HM: 'Heard Island and Mcdonald Islands',
  HN: 'Honduras',
  HR: 'Croatia',
  HT: 'Haiti',
  HU: 'Hungary',
  ID: 'Indonesia',
  IE: 'Ireland',
  IL: 'Israel',
  IM: 'Isle of Man',
  IN: 'India',
  IO: 'British Indian Ocean Territory',
  IQ: 'Iraq',
  IR: 'Iran, Islamic Republic',
  IS: 'Iceland',
  IT: 'Italy',
  JE: 'Jersey',
  JM: 'Jamaica',
  JO: 'Jordan',
  JP: 'Japan',
  KE: 'Kenya',
  KG: 'Kyrgyzstan',
  KH: 'Cambodia',
  KI: 'Kiribati',
  KM: 'Comoros',
  KN: 'Saint Kitts and Nevis',
  KP: 'North Korea (DPRK)',
  KR: 'South Korea',
  KW: 'Kuwait',
  KY: 'Cayman Islands',
  KZ: 'Kazakhstan',
  LA: 'Lao Peoples Democratic Republic',
  LB: 'Lebanon',
  LC: 'Saint Lucia',
  LI: 'Liechtenstein',
  LK: 'Sri Lanka',
  LR: 'Liberia',
  LS: 'Lesotho',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  LV: 'Latvia',
  LY: 'Libya',
  MA: 'Morocco',
  MC: 'Monaco',
  MD: 'Moldova Republic',
  ME: 'Montenegro',
  MF: 'Saint Martin',
  MG: 'Madagascar',
  MH: 'Marshall Islands',
  MK: 'Republic of North Macedonia',
  ML: 'Mali',
  MM: 'Myanmar',
  MN: 'Mongolia',
  MO: 'Macao',
  MP: 'Northern Mariana Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MS: 'Montserrat',
  MT: 'Malta',
  MU: 'Mauritius',
  MV: 'Maldives',
  MW: 'Malawi',
  MX: 'Mexico',
  MY: 'Malaysia',
  MZ: 'Mozambique',
  NA: 'Namibia',
  NC: 'New Caledonia',
  NE: 'Niger',
  NF: 'Norfolk Island',
  NG: 'Nigeria',
  NI: 'Nicaragua',
  NL: 'Netherlands',
  NO: 'Norway',
  NP: 'Nepal',
  NR: 'Nauru',
  NU: 'Niue',
  NZ: 'New Zealand',
  OM: 'Oman',
  PA: 'Panama',
  PE: 'Peru',
  PF: 'French Polynesia',
  PG: 'Papua New Guinea',
  PH: 'Philippines',
  PK: 'Pakistan',
  PL: 'Poland',
  PM: 'Saint Pierre and Miquelon',
  PN: 'Pitcairn',
  PR: 'Puerto Rico',
  PS: 'Palestine',
  PT: 'Portugal',
  PW: 'Palau',
  PY: 'Paraguay',
  QA: 'Qatar',
  RE: 'Reunion',
  RO: 'Romania',
  RS: 'Serbia',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  SA: 'Saudi Arabia',
  SB: 'Solomon Islands ',
  SC: 'Seychelles',
  SD: 'Sudan',
  SE: 'Sweden',
  SG: 'Singapore',
  SH: 'Saint Helena, Ascension and Tristan da Cunha',
  SI: 'Slovenia',
  SJ: 'Svalbard and Jan Mayen',
  SK: 'Slovakia',
  SL: 'Sierra Leone',
  SM: 'San Marino',
  SN: 'Senegal',
  SO: 'Somalia',
  SR: 'Suriname',
  SS: 'South Sudan',
  ST: 'Sao Tome and Principe',
  SV: 'El Salvador',
  SX: 'Sint Maarten',
  SY: 'Syrian Arab Republic',
  SZ: 'Swaziland',
  TC: 'Turks and Caicos Islands',
  TD: 'Chad',
  TF: 'French Southern Territories',
  TG: 'Togo',
  TH: 'Thailand',
  TJ: 'Tajikistan',
  TK: 'Tokelau',
  TL: 'Timor Leste',
  TM: 'Turkmenistan',
  TN: 'Tunisia ',
  TO: 'Tonga',
  TR: 'Turkey',
  TT: 'Trinidad and Tobago',
  TV: 'Tuvalu',
  TW: 'Taiwan',
  TZ: 'Tanzania, United Republic',
  UA: 'Ukraine',
  UG: 'Uganda',
  UM: 'United States Minor Outlying Islands',
  US: 'United States of America',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VA: 'Holy See',
  VC: 'Saint Vincent and the Grenadines',
  VG: 'Virgin Islands, British',
  VI: 'Virgin Islands, U.S',
  VN: 'Viet Nam',
  VU: 'Vanuatu',
  WF: 'Wallis and Futuna',
  XK: 'Republic of Kosovo',
  WS: 'Samoa',
  YE: 'Yemen',
  YT: 'Mayotte',
  ZA: 'South Africa',
  ZM: 'Zambia',
  ZW: 'Zimbabwe'
});

/**
 * Get Country Name
 *
 * Requires a 2 Letter (ISO 3166-1 alpha-2) country
 * code to be passed and returns the country name
 * in English.
 *
 * > _Accepts either uppercase, lowercase or
 * or a combination of either_
 */
export function getCountryName <ISO extends AnyCase<CountryCodes>> (
  code: LiteralUnion<ISO>
): CountryName<Uppercase<ISO>> {

  const country = Countries[code.toUpperCase()];

  if (!country) throw new Error(`"${code}" is an invalid ISO country code`);

  return country;

}
