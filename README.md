# webpack2 + react + redux + react-router + yarn 搭建脚手架

```
webpack2

    mkdir myProject && cd myProject && yarn init && touch webpack.config.js webpack.common.js webpack.dev.js webpack.pro.js
    
    webpack.config.js 入口webpack 文件
    webpack.common.js 公共部分webpack 配置文件
    webpack.dev.js 测试环境webpack 配置文件
    webpack.pro.js 生产环境webpack 配置文件
    

1、制作webpack 配置
    yarn add webpack webpack-dev-server -D
    
    
    首先入口文件是用yarn命令，所以执行命令配置在package.json中
        scripts: {
            "start": "webpack-dev-server --open --env=dev --progress --colors",
            "build": "rm -rf ./dist && webpack --env=pro --progress --colors",
        }
        
    webpack.config.js 作为一个中转的文件 （env是接收的package.json中的--env的值）
       module.exports = function(env) {
        return require(`./webpack.${env}.js`)
       }

    webpack.common.js 公共部分webpack 配置文件
        module.exports = {
            context: '' ,    // 配置内容目录
            entry: [] || '' ,  // 入口文件 (入口文件是相对context配置的目录地址, 可为数据或字符串)
            output: {           // 输入文件
                path: path.join(__dirname, '/dist'),   
                filename: '[name].bundle.js',
                sourceMapFilename: '[name].map'
            },
            resolve: {},  // 配置模块如何解析
            module: {     // 模块
                rules: [
                    {
                        // js 用babel 转换
                        // yarn add babel-loader babel-core babel-preset-env --dev
                        // touch .babelrc
                        test: /\.(js|jsx)$/,
                        exclude: path.join(__dirname, 'node_modules'),
                        include: path.join(__dirname, 'src'),
                        loader: "babel-loader",
                    },
                    {
                        // 解析less为css
                        // yarn style-loader css-loader postcss-loader less-loader less
                        // postcss 需要一个配置项 touch postcss.config.js
                        // postcss.config.js 内容:
                        ```
                            module.exports = {
                              plugins: [
                                require('autoprefixer')({browsers:'ios >= 8'})
                              ]
                            }
                        ```
    
                        test: /\.less$/,
                        // extract-text-webpack-plugin 将css 单独提取出来
                        use: ExtractTextPlugin.extract({
                          fallback: "style-loader",
                          use: ["css-loader", 'postcss-loader', 'less-loader']
                        })
                    },
                ]
            },
            plugins: [   // 插件
            
                // html-webpack-plugin 这个插件用来简化创建服务于 webpack bundle 的 HTML 文件
                new HtmlWebpackPlugin({
                  filename: 'index.html',
                  template: 'index.html',
                  chunksSortMode: 'dependency'
                }),
            
                // extract-text-webpack-plugin 将css 单独提取出来
                new ExtractTextPlugin("[name].css")
            ]
        }
        

    webpack.dev.js 测试环境webpack 配置文件
        // yarn add webpack-merge   // webpack-merge 可以合并2个webpack config文件
        const Merge = require('webpack-merge');
        const CommonConfig = require('./webpack.common.js');
        
        module.exports = Merge(CommonConfig, {
          devtool: 'cheap-module-source-map',
        
          devServer: {
            port: 7777,
            host: 'localhost',
            historyApiFallback: true,
            noInfo: false,
            stats: 'minimal',
          }
        })
    
    webpack.pro.js  生产环境webpack 配置文件   ...执行压缩，环境配置，优化文件等操作
        const Merge = require('webpack-merge')
        const CommonConfig = require('./webpack.common.js')
        const webpack = require('webpack')
        
        module.exports = Merge(CommonConfig, {
          plugins: [
            new webpack.LoaderOptionsPlugin({
              minimize: true,
              debug: false
            }),
            new webpack.DefinePlugin({
              'process.env': {
                'NODE_ENV': JSON.stringify('production')
              }
            }),
            new webpack.optimize.UglifyJsPlugin({
              beautify: false,
              mangle: {
                screw_ie8: true,
                keep_fnames: true
              },
              compress: {
                screw_ie8: true
              },
              comments: false
            })
          ]
        })
```


｀｀｀
react react-router redux

    安装：yarn add react react-dom react-router react-router-dom redux react-redux 
         yarn add whatwg-fetch es6-promise
         
    
    demo:
    
        index.js 
        ｀｀｀
            import React from 'react'
            import { render } from 'react-dom'
            import { combineReducers, createStore } from 'redux'
            import { Provider, connect } from 'react-redux'
            import {
              BrowserRouter as Router,
              Route,
              Link,
              Switch,
              Redirect
            } from 'react-router-dom'
            
            const reducer1 = function (state=0, action) {
                switch (action.type) {
                    case 'A':
                        return state + 1
                    case 'B':
                        return state - 1
                    default:
                        return state
                }
            }
            
            const reducer2 = function (state=0, action) {
                 switch (action.type) {
                    case 'A':
                        return state + 1
                    case 'B':
                        return state - 1
                    default:
                        return state
                }            
            }
            
            const reducers = combineReducers({ reducer1, reducer2 })
            
            const initialState = {}
            
            const store = createStore(reducers, initialState)
            
            
            // APP Component
            class AppComponent extends React.Component {
                render () {
                        const { value, onInClick } = this.props
                        debugger
                        return (
                            <div>
                                <p> { value } </p>
                
                                <button onClick={onInClick}>Increase</button>
                            </div>
                        )
                    }
            }
            
            function mapStateToProps(state) {
              return {
                value: JSON.stringify(state)
              }
            }
            
            function mapDispatchToProps(dispatch) {
              return {
                onInClick: () => dispatch({ type: 'B' })
              }
            }
            
            const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)
            
            
            // Home Component
            const Home = () => {
                return (
                    <div> this's Home Page ... </div>
                )
            }
            
            // NotFound Component
            const NotFound = () => {
                return (
                    <div>
                        this's NotFound Page ....
                    </div>
                )
            }
            
            render(
                <Provider store={store}>
                    <Router>
                            <Switch>
                                <Route exact path='/' component={App} /> 
                                <Route path='/home' component={Home}/>
                                <Route path='*' component={NotFound}/> 
                            </Switch>
                        </Router> 
                </Provider>
                , document.getElementById('root')
            )
            
        ｀｀｀
        
        
        ｀｀｀
        mock
            用koa做后端数据模拟
            yarn add koa koa-body koa-router --P
            mkdir mock && mock/server.js 
            // pageage.json 中配置mock 启动命令
            "scripts": {
                "mock": "node --harmony ./mock/server.js"
            }
            // 在webpack.dev.js 中配置代理
            devServer: {
                proxy: {
                   // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
                   // koa 代码在 ./mock 目录中，启动命令为 npm run mock
                  '/api': {
                    target: 'http://localhost:3000',
                    secure: false
                  }
                },
            }
        ｀｀｀
        
        ```
        redux-thunk
            默认情况下redux只能dispatch一个plain object
            dispatch({
                type: 'SOME_ACTION_TYPE',
                data: 'xxxx'
            });
            
            使用 redux-thunk 之后，可以dispatch一个函数了，这个函数会接收dispatch, getState作为参数，在这个函数里可以再次接受dispatch，在任何地方随意dispatch了，例如下面这个ajax请求：
            dispatch(function (dispatch) {
                $.get('/api/users', function(users) {
                    dispatch({
                        type: 'FETCH_USERS_SUCCESS',
                        users: users,
                    });
                });
            });
        ```

｀｀｀



