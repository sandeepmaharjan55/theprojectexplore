const SassRuleRewire = require('react-app-rewire-sass-rule')
const path = require('path')
const rewireAliases = require('react-app-rewire-aliases')

module.exports = function override(config, env) {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [require('postcss-rtl')()]
  })

  config = rewireAliases.aliasesOptions({
    '@src': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/@core/assets'),
    '@components': path.resolve(__dirname, 'src/@core/components'),
    '@layouts': path.resolve(__dirname, 'src/@core/layouts'),
    '@store': path.resolve(__dirname, 'src/redux'),
    '@styles': path.resolve(__dirname, 'src/@core/scss'),
    '@configs': path.resolve(__dirname, 'src/configs'),
    '@utils': path.resolve(__dirname, 'src/utility/Utils'),
    '@hooks': path.resolve(__dirname, 'src/utility/hooks')
  })(config, env)

  config = new SassRuleRewire()
    .withRuleOptions({
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'sass-loader',
          
            // loader: ExtractTextPlugin.extract(
            //   'style-loader', // backup loader when not building .css file
            //   'css-loader!sass-loader' // loaders to preprocess CSS
            //  ),
          options: {
            sassOptions: {
              includePaths: ['node_modules', 'src/assets']
            }
          }
        }
      ]
    //   use:[// Creates `style` nodes from JS strings
    //   "style-loader",
    //   // Translates CSS into CommonJS
    //   {
    //     loader: "css-loader",
    //     options: {
    //       sourceMap: true,
    //     },
    //   },
    //   // Compiles Sass to CSS
    //     {
    //       loader: 'sass-loader',
    //       options: {
    //         sassOptions: {
    //           includePaths: ['node_modules', 'src/assets']
    //         }
    //       }
    //     }
    // ]
    })
    .rewire(config, env)
  return config
}