const relative = require('./relative-path.cjs');

module.exports = function({page, collections}) {
  if (page.url === '/') {
    return '';
  }

  const urlParts = page.url.split('/');
  const baseUrl = `/${urlParts[1]}/${urlParts[2]}/`;

  console.dir(page.url);

  return `
<nav>
  <a href="/">Home</a>
  <a href="${baseUrl}overview">Overview</a>
  <a href="${baseUrl}examples">Examples</a>
  <a href="${baseUrl}api">API</a>
  <a href="${baseUrl}install">Install</a>
</nav>`;
};
