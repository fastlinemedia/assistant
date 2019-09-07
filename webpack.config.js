const webpack = require( 'webpack' )
const path = require( 'path' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const OptimizeCSSAssets = require( 'optimize-css-assets-webpack-plugin' )
const production = 'production' === process.env.NODE_ENV

const alias = {
    lib: path.resolve( __dirname, './src/system/lib/'),
    store: path.resolve( __dirname, './src/system/store'),
    utils: path.resolve( __dirname, './src/system/utils' ),
    config: path.resolve( __dirname, './src/system/config'),
    'shared-utils': path.resolve( __dirname, './packages/shared-utils/src/' ),
}

const externals = {

    /* fl-vendor */
    'fl-react'              		: 'FL.vendors.React',
    'fl-react-dom'          		: 'FL.vendors.ReactDOM',
    'fl-react-router-dom'   		: 'FL.vendors.ReactRouter',
    'fl-redux'              		: 'FL.vendors.Redux',
    'fl-prop-types'         		: 'FL.vendors.PropTypes',
    'fl-classnames'         		: 'FL.vendors.classnames',

    /* system bundle */
    'assistant'             		: 'FL.Assistant',
    'assistant/store'       		: 'FL.Assistant.data', // TODO: Delete = data replaces store
    'assistant/data'        		: 'FL.Assistant.data',

    'assistant/lib'         		: 'FL.Assistant.ui', // TODO: delete - ui replaces lib
    'assistant/ui'          		: 'FL.Assistant.ui',

    'assistant/cloud'               : 'FL.Assistant.cloud',

    'assistant/i18n'        		: 'FL.Assistant.i18n',
    'assistant/utils'       		: 'FL.Assistant.utils',

    // I'd be great not to need these
    'assistant/utils/react'   		: 'FL.Assistant.utils.react',
    'assistant/utils/url'   		: 'FL.Assistant.utils.url',
    'assistant/utils/wordpress'   	: 'FL.Assistant.utils.wordpress',

    /* wp */
    '@wordpress/i18n'               : 'wp.i18n',
    '@wordpress/keycodes'           : 'wp.keycodes',
    '@wordpress/dom'                : 'wp.dom',
    '@wordpress/element'            : 'wp.element',
    '@wordpress/components'         : 'wp.components',
    '@wordpress/heartbeat'          : 'wp.heartbeat',
    '@wordpress/hooks'              : 'wp.hooks',
}

const entry = {
    ui: './src/ui',
    api: './src/system',
    apps: './src/apps',
    vendors: './packages/fl-vendors',
}

const config = {
	entry,
    externals,
	mode: 'development',
    target: 'web',
    watch: true,
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: `fl-assistant-[name].bundle.js`,
    },
    resolve: { alias },
    devtool: production ? '' : 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ],
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ],
			},
		]
    },
    plugins: [
        new MiniCssExtractPlugin( {
            filename: `fl-assistant-[name].bundle.css`,
        } ),
    ]
}

if ( production ) {
	config.mode = 'production'
	config.stats = false
	config.watch = false
	config.plugins.push(
		new OptimizeCSSAssets( {
			cssProcessorOptions: {
				safe: true,
			}
		} ),
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( 'production' ),
		} )
	)
}

module.exports = config
