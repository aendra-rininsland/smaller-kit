/**
 * Render code server-side as a string
 */
import render from 'preact-render-to-string';
import GHead from 'g-ui/g-head';
import { h } from 'preact';
import page from './src';

const testCommentsUUID = '1234';

export default (id = false) => `<!doctype html>
<html
  lang="en-GB"
  class="core"
  data-buildtime="${new Date().toISOString()}"
  data-content-id="${id || testCommentsUUID}">
  ${render(h(GHead))}
  <body>${render(h(page))}</body>
</html>
`;
