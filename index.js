'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var postcss = _interopDefault(require('postcss'));
var Import = _interopDefault(require('postcss-import'));
var Url = _interopDefault(require('postcss-url'));
var saladcssBem = _interopDefault(require('saladcss-bem'));
var Mixins = _interopDefault(require('postcss-mixins'));
var Nested = _interopDefault(require('postcss-nested'));
var Nesting = _interopDefault(require('postcss-nesting'));
var AdvancedVariables = _interopDefault(require('postcss-advanced-variables'));
var PropertyLookup = _interopDefault(require('postcss-property-lookup'));
var CssReset = _interopDefault(require('postcss-css-reset'));
var Shape = _interopDefault(require('postcss-shape'));
var Utils = _interopDefault(require('postcss-utils'));
var Extend = _interopDefault(require('postcss-extend'));
var CustomProperties = _interopDefault(require('postcss-custom-properties'));
var Calc = _interopDefault(require('postcss-calc'));
var Autoprefixer = _interopDefault(require('autoprefixer'));
var Assets = _interopDefault(require('postcss-assets'));

const plugins = [Import, Url, saladcssBem, Mixins, Nested, Nesting, AdvancedVariables, PropertyLookup, CssReset, Shape, Utils, Extend, CustomProperties, Calc, Autoprefixer, Assets];
const optKey = new Array(16);
optKey[0] = 'import';
optKey[12] = 'customProperties';
optKey[15] = 'assets';
var index = postcss.plugin('postcss-ui-theme', rawopts => {
  const opts = Object.assign({
    browsers: ['ie > 8', 'last 2 versions'],
    import: {},
    defaultNamespace: undefined,
    separators: {
      descendent: '__'
    },
    shortcuts: {
      modifier: 'm',
      descendent: 'd',
      component: 'c'
    },
    customProperties: {
      preserve: true,
      warnings: false
    },
    preserve: false,
    assets: {
      basePath: './',
      relative: true
    }
  }, rawopts); // initialize all plugins

  const initializedPlugins = plugins.map((plugin, i) => plugin(opts[optKey[i]] || opts));
  return (root, result) => initializedPlugins.reduce((promise, plugin, i) => {
    return promise.then(() => {
      if (i === 15) {
        return plugin.process(result.root, result);
      }

      return plugin(result.root, result);
    });
  }, Promise.resolve());
});

module.exports = index;
