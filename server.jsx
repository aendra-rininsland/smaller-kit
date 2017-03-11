/**
 * Render code server-side as a string
 */
import renderString from 'preact-render-to-string';
import { h } from 'preact';
import { Helmet } from 'g-ui/g-head';
import Page from './src';

import CONFIG from './CONFIG';

const body = renderString(<Page />);
const head = Helmet.rewind();

export default () => `<!doctype html>
<html ${head.htmlAttributes.toString()}>
  <head>
    ${head.title.toString()}
    ${head.meta.toString()}
    ${head.link.toString()}
  </head>
  <body>
  ${body}
  <script src="//origami-build.ft.com/v2/bundles/js?modules=${CONFIG.origami.js.join(',')}"></script>
  </body>
</html>`;
