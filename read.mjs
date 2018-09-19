const fs = require('fs-extra');
const now = require('performance-now');

const TEN_THOUSAND_ENTRIES = 'ten_thousand.json';
const SEVEN_HUNDRED_THOUSAND_ENTRIES = 'seven_hundred_thousand.json';

async function test(file, key) {
  const start = now();
  const bundleSizes = await fs.readJSON(file);
  console.log('read, parse   -', now() - start);
 
  if (bundleSizes[key] !== undefined) {
    console.log('key found     -', now() - start);
  } else {
    console.log('key missing   -', now() - start);
  }

  bundleSizes[key] = "10.99KB";
  await fs.writeJSON(file, bundleSizes);
  console.log('write         -', now() - start);
}

const pre10k = now();
Promise.resolve(test(TEN_THOUSAND_ENTRIES, "2b5dc3dc7f452615849defe6a16b48393ae993ef")).then(function() {
  console.log('10K COMPLETE  -', now() - pre10k);
});

const pre700k = now();
Promise.resolve(test(SEVEN_HUNDRED_THOUSAND_ENTRIES, "c8531ab343dec88ed8005e403b1b304c710b7494")).then(function() {
  console.log('700K COMPLETE -', now() - pre700k);
});