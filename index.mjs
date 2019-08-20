import postcss from 'postcss';
import Import from 'postcss-import';
import Url from 'postcss-url';
import saladcssBem from 'saladcss-bem';
import Mixins from 'postcss-mixins';
import Nested from 'postcss-nested';
import Nesting from 'postcss-nesting';
import AdvancedVariables from 'postcss-advanced-variables';
import PropertyLookup from 'postcss-property-lookup';
import CssReset from 'postcss-css-reset';
import Shape from 'postcss-shape';
import Utils from 'postcss-utils';
import Extend from 'postcss-extend';
import CustomProperties from 'postcss-custom-properties';
import Calc from 'postcss-calc';
import Autoprefixer from 'autoprefixer';
import Assets from 'postcss-assets';

const plugins = [Import, Url, saladcssBem, Mixins, Nested, Nesting, AdvancedVariables, PropertyLookup, CssReset, Shape, Utils, Extend, CustomProperties, Calc, Autoprefixer, Assets];
const optKey = new Array(16);
optKey[0] = 'import';
optKey[12] = 'customProperties';
optKey[15] = 'assets';
var index = postcss.plugin('postcss-ui-theme', rawopts => {
  const opts = Object.assign({
    overrideBrowserslist: ['ie > 8', 'last 2 versions'],
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

export default index;
