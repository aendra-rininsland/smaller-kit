/**
 * Smarter Kit!
 */

import GPage from 'g-ui';
import { h } from 'preact';

import CONFIG from '../CONFIG';
// import './index.scss';

export { Helmet } from 'g-ui';
export default () => (
  <GPage
    origamiCSS={[
      'o-fonts@^2',
      'o-normalise@^1.2.1',
      'o-header@^6.14.0',
      'o-footer@^5.3.3',
    ]}
    origamiJS={[
      'o-normalise@^1.2.1',
      'o-header@^6.14.0',
      'o-footer@^5.3.3',
    ]}
    config={CONFIG}
  >
    <h1>🎊 Welcome to Smarter Kit 🎉</h1>
    <p>This is my body content</p>
  </GPage>);
