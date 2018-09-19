import * as fs from 'fs-extra';
import now from 'performance-now';

const FILE = 'file.json';

async function test(file, key) {
  const start = now();
  const bundleSizes = await fs.readJSON(file);
  console.log('read, and parse file', now() - start);
 
  if (bundleSizes[key] !== undefined) {
    console.log('key found', now() - start);
  } else {
    console.log('key missing', now() - start);
  }

  bundleSizes[key] = value;
  await fs.writeJSONSync(file, bundleSizes);
  console.log('write new file', now() - start);
}


const bundleSizes = fs.readJsonSync('bundle-sizes.json');
bundleSizes['ffffffffffffffffffffffffffffffffffffffff'] = '99.99KB';
fs.writeJsonSync('bundle-sizes.json', bundleSizes);