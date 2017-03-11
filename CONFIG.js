/**
 * Configuration variables
 *
 * @TODO always edit this file!
 */

const CONFIG = {
  'page title': 'Example Smarter Kit page',
  'canonical url': 'https://',
  'main image url': 'https://',

  // These will fallback to the above values if left undefined.
  'twitter url': undefined,
  'facebook url': undefined,
  'twitter image url': undefined,
  'facebook image url': undefined,
  'twitter card': 'summary_large_image', // Other option is just 'summary'; @see https://dev.twitter.com/cards/overview
  'twitter creator value': undefined,

  // Flags
  'flag:analytics': true,
  'tracking:product': null,
  'tracking:microsite': null,

  origami: {
    css: [
      'o-fonts@^2',
      'o-normalise@^1.2.1',
      'o-header@^6.14.0',
      'o-footer@^5.3.3',
    ],
    js: [
      'o-normalise@^1.2.1',
      'o-header@^6.14.0',
      'o-footer@^5.3.3',
    ],
  },
};

module.exports = CONFIG;
