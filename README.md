# webpack 

｀｀｀

######      package.json
    
    scripts: {
        "start": "webpack --env=dev --progress --colors",
        "build": "rm -rf ./build && webpack --env=pro --progress --colors",
    }
｀｀｀

｀｀｀

######     webpack.config.js
    
    module.exports = function(env) {
    	return require(`./webpack.${env}.js`)
    }

｀｀｀

```
touch webpack.dev.js webpack.pro.js webpack.common.js
    
webpack.dev.js      用于开发环境配置
webpack.pro.js      用于生产环节配置
webpack.common.js   公共配置  

webpack-merge 合并webpack
    
webpack.dev.js      用于开发环境配置    
    devtool、devServer
    
webpack.pro.js      用于生产环节配置
    UglifyJsPlugin
    
webpack.common.js   公共配置  
    context
    entry
    output
    resolve
    module: {
       rules: [...]
    }
    plugins
    
    
    
    
    

```

