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

const generateFile = async (templateFile, filePath, componentName) => {
  if (fs.existsSync(filePath)) {
    console.log(`${filePath} exists, skipped`);
    return;
  }

  let template = await readFile(
    path.resolve(__dirname, templateFile),
    'utf-8'
  );

  template = template.replace(/\%tagName\%/gm, componentName);
  template = template.replace(/\%className\%/gm, kebabToPascal(componentName));

  try {
    await writeFile(filePath, template);
    console.log(filePath, 'has been created');
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
    await generateFile('./component-template.txt', `src/${componentName}.ts`, componentName);
    await generateFile('./test-template.txt', `src/test/${componentName}_test.ts`, componentName);
    await generateFile('./overview-md-template.txt', `docs-src/pages/${componentName}/overview.md`, componentName);
    // await generateFile('./example-basic-md-template.txt', `docs-src/pages/${componentName}/examples/index.md`, componentName);
    // await generateFile('./example-another-md-template.txt', `docs-src/pages/${componentName}/examples/another-example.md`, componentName);
  } catch (err) {
    console.log(err);
  }
};

main();
