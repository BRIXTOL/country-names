import test from 'ava';
import { getCountryName, Countries } from '../package/index';

test('Country code', (t) => {

  t.is(getCountryName('SE'), 'Sweden');
  t.is(getCountryName('Nl'), 'Netherlands');
  t.is(getCountryName('dE'), 'Germany');
  t.is(getCountryName('us'), 'United States of America');
  t.is(getCountryName('AU'), 'Australia');

  t.pass();
});

test('Country code is invalid', (t) => {

  t.throws(() => getCountryName('WW'), {
    message: '"WW" is an invalid ISO country code'
  });

  t.pass();
});

test('Country code in uppercase', (t) => {

  t.is(getCountryName('SE'), 'Sweden');
  t.is(getCountryName('NL'), 'Netherlands');
  t.is(getCountryName('DE'), 'Germany');
  t.is(getCountryName('US'), 'United States of America');
  t.is(getCountryName('AU'), 'Australia');

  t.pass();

});

test('Country code in lowercase', (t) => {

  t.is(getCountryName('se'), 'Sweden');
  t.is(getCountryName('nl'), 'Netherlands');
  t.is(getCountryName('de'), 'Germany');
  t.is(getCountryName('us'), 'United States of America');
  t.is(getCountryName('au'), 'Australia');

  t.pass();

});

test('Countries mapping export', (t) => {

  t.is(Countries.SE, 'Sweden');
  t.is(Countries.NL, 'Netherlands');
  t.is(Countries.DE, 'Germany');
  t.is(Countries.US, 'United States of America');
  t.is(Countries.AU, 'Australia');
  t.is(Countries.RU, 'Russian Federation');

  t.pass();

});
