/**
 * Render code client-side into document.body
 */

import { render } from 'preact';
import page from './src/index';

render(page, document.body);
