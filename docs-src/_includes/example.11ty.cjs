const page = require('./page.11ty.cjs');
const relative = require('./relative-path.cjs');

/**
 * This template extends the page template and adds an examples list.
 */
module.exports = function (data) {
  return page({
    ...data,
    content: renderExample(data),
  });
};

const renderExample = ({name, content, collections, page}) => {
  const urlParts = page.url.split('/');
  const baseUrl = `/${urlParts[1]}/${urlParts[2]}/`;

  const filteredExamples =
    collections.example && collections.example.length > 0
      ? collections.example.filter(
          (val) =>
            val.template.filePathStem.length !== 0 &&
            val.template.filePathStem.indexOf(baseUrl) === 0
        )
      : [];

  return `
    <h1>Example: ${name}</h1>
    <section class="examples">
      <nav class="collection">
        <ul>
          ${
            filteredExamples.length === 0
              ? ''
              : filteredExamples
                  .map(
                    (post) => `
                  <li class=${post.url === page.url ? 'selected' : ''}>
                    <a href="${post.url}">${post.data.description.replace(
                      '<',
                      '&lt;'
                    )}</a>
                  </li>
                `
                  )
                  .join('')
          }
        </ul>
      </nav>
      <div>
        ${content}
      </div>
    </section>
  `;
};
