const header = require('./header.11ty.cjs');
const footer = require('./footer.11ty.cjs');
const nav = require('./nav.11ty.cjs');
const htmlspecialchars = require('./htmlspecialchars');

module.exports = function(data) {
  let analytics = '';

  if (process.env.GOOGLE_ANALYTICS_TRACKING_ID) {
    analytics =`
    <!-- Google Analytics -->
    <script>
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID}', 'auto');
    ga('send', 'pageview');
    </script>
    <script async src='https://www.google-analytics.com/analytics.js'></script>
    <!-- End Google Analytics -->
    `
  }

  const {title, content} = data;
  return `
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${htmlspecialchars(title)}</title>
    ${analytics}
    <link rel="stylesheet" href="${this.url('/docs.css')}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto+Mono">
    <link rel="stylesheet" href="${this.url('/prism-okaidia.css')}">
    <script type="module" src="${this.url('/bundled.js')}"></script>
  </head>
  <body>
    ${header(data)}
    ${nav(data, this)}
    <div id="main-wrapper">
      <main>
        ${content}
      </main>
    </div>
    ${footer()}
  </body>
</html>`;
};
