/**
 * Render code client-side into document.body
 */

import { h, render } from 'preact';
import Page from './src/index';

if (module.hot) require('preact/devtools'); // eslint-disable-line

render(<Page />, document.body.lastChild);
