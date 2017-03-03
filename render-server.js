/**
 * Render code server-side as a string
 */
import render from 'preact-render-to-string';
import { h } from 'preact';
import page from './src';

export default () => render(h(page));
