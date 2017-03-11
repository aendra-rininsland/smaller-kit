/**
 * Smarter Kit!
 */

import GPage from 'g-ui';
import { h } from 'preact';
import CONFIG from '../CONFIG';

export { Helmet } from 'g-ui';

// You can get content into Smarter Kit in a variety of ways:
//
// 1. Just use JSX and write pure html
//
// const content = <div><h1>Smarter Kit</h1><p>Your content here</p></div>
//
// 2. Create a Markdown react element:
//
// import ReactMarkdown from 'react-markdown';
//
// const markdown = `# Smarter Kit
// Your content here
// `;
//
// const content = <ReactMarkdown source={markdown} />;
//
// More to come!

export default () => (
  <GPage config={CONFIG}>
    {content || ''}
  </GPage>);
