# postcss-ui-theme

## 项目介绍

`postcss-ui-theme` let you can easy change ui theme by postcss.

### feature
- 自定义导入文件配置
- 支持 bem 命名
- 支持类 sass 语法
- 支持打包 css4 变量
- 支持配置静态文件路径

### 用法

Add postcss-ui-theme to your build tool:

```
npm install postcss-ui-theme --save-dev
``` 

#### Node
Use postcss-ui-theme to process your CSS:
```
import postcssUiTheme from 'postcss-ui-theme';
postcssUiTheme.process(YOUR_CSS);
```

Add PostCSS to your build tool:
```
npm install postcss --save-dev
```

#### Use postcss-ui-theme as a plugin:
```
import postcss from 'postcss';
import postcssUI from 'postcss-ui-theme';

postcss([
  postcssUI(/* options */)
]).process(YOUR_CSS);
```


#### Webpack, add postcss.config.js and used as a plugin:
```
module.exports = {
    plugins: [require('postcss-ui-theme')]
}
```

### Options

##### import 
The [postcss-import](https://github.com/postcss/postcss-import) configs

```
import : {
    postcssImportOptions
}
```

##### customProperties

默认配置
```
customProperties: {
    preserve: true,
    warnings: false
}
```

the [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) configs

#### assets

默认配置
```
assets: {
    basePath: './',
    relative: true
}
```

the [postcss-assets](https://github.com/borodean/postcss-assets) configs


##### bem

有关 bem 参考[saladcss-bem](https://github.com/SpringLIAO/saladcss-bem) configs。 
`默认配置`
```
defaultNamespace: undefined, // means no prefix
separators: {
    descendent: '__'
},
shortcuts: {
    modifier: 'm',
    descendent: 'd',
    component: 'c'
}
```

##### autoprefixer

有关 autoprefixer 参考 [autoprefixer](https://github.com/postcss/autoprefixer) configs

默认配置
```
browsers: ['ie > 8', 'last 2 versions']
```



### 参考

##### [测试用例](https://git.souche-inc.com/souche-ui/postcss-ui-theme/blob/master/.tape.js)

##### plugins

postcss-ui-theme is powered by the following plugins (in this order):

- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-url](https://github.com/postcss/postcss-url)
- [saladcss-bem](https://github.com/SpringLIAO/saladcss-bem)
- [postcss-mixins](https://github.com/postcss/postcss-mixins)
- [postcss-nested](https://github.com/postcss/postcss-nested)
- [postcss-nesting](https://github.com/postcss/postcss-nesting)
- [postcss-advanced-variables](https://github.com/postcss/postcss-advanced-variables)
- [postcss-property-lookup](https://github.com/postcss/postcss-property-lookup)
- [postcss-css-reset](https://github.com/postcss/postcss-css-reset)
- [postcss-shape](https://github.com/postcss/postcss-shape)
- [postcss-utils](https://github.com/postcss/postcss-utils)
- [postcss-extend](https://github.com/postcss/postcss-extend)
- [postcss-calc](https://github.com/postcss/postcss-calc)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-assets](https://github.com/borodean/postcss-assets)