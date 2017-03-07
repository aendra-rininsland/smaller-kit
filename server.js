/**
 * Render code server-side as a string
 */
import renderString from 'preact-render-to-string';
import { h } from 'preact';
import Page, { Helmet } from './src';

const body = renderString(h(Page));
const head = Helmet.rewind();

export default () => `<!doctype html>
<html ${head.htmlAttributes.toString()}>
  <head>
    ${head.title.toString()}
    ${head.meta.toString()}
    ${head.link.toString()}
  </head>
  ${body}
</html>`;
