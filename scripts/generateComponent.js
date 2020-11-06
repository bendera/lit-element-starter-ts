import chalk from 'chalk';
import fs from 'fs';
import util from 'util';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const stat = util.promisify(fs.stat);
const fsOpen = util.promisify(fs.open);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const camelize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const kebabToPascal = (kebab) => {
  const parts = kebab.split('-');

  return parts.reduce(
    (prevVal, currentVal) => prevVal + camelize(currentVal),
    ''
  );
};

const generateComponentFile = async (componentName) => {
  const componentFp = `src/${componentName}.ts`;

  if (fs.existsSync(componentFp)) {
    console.log(`${componentFp} exists, skipped`);
    return;
  }

  let template = await readFile(
    path.resolve(__dirname, './component-template.txt'),
    'utf-8'
  );

  template = template.replace(/\%tagName\%/gm, componentName);
  template = template.replace(/\%className\%/gm, kebabToPascal(componentName));

  try {
    await writeFile(componentFp, template);
    console.log(componentFp, 'has been created');
  } catch (err) {
    throw(err);
  }
};

const generateTestFile = async (componentName) => {
  const testFp = `src/test/${componentName}_test.ts`;

  if (fs.existsSync(testFp)) {
    console.log(`${testFp} exists, skipped`);
    return;
  }

  let template = await readFile(
    path.resolve(__dirname, './test-template.txt'),
    'utf-8'
  );

  template = template.replace(/\%tagName\%/gm, componentName);
  template = template.replace(/\%className\%/gm, kebabToPascal(componentName));

  try {
    await writeFile(testFp, template);
    console.log(testFp, 'has been created');
  } catch (err) {
    throw(err);
  }
}

const main = async () => {
  const componentName = process.argv[2];

  if (!componentName) {
    console.log(chalk.red('ERR!', 'Component name is missing'));
    process.exit(1);
  }

  console.log('Generate', `${componentName}...`);

  try {
    await generateComponentFile(componentName);
    await generateTestFile(componentName);
  } catch (err) {
    console.log(err);
  }
};

main();
