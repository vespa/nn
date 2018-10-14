module.exports = {
  styleguideDir: './src/client/static/styleguide',
  sections: [
    {
      name: 'Introduction',
      content: 'readme.md',
    },
    {
      name: 'Client',
      sections: [
        {
          name: 'Pages',
          content: 'pages/readme.md',
          components: 'pages/**/*.{js,jsx}',
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Components',
          content: 'components/readme.md',
          components: 'components/**/*.{js,jsx}',
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
      ],
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader?modules!sass-loader',
        },
      ],
    },
  },
  components: '**/*.{js,jsx,ts,tsx}',
  ignore: [
    '**/style.js',
    '**/store/**',
    '**/redux.js',
    '**/redux/**',
    '**/actions.js',
    '**/initialState.js',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/_document.jsx',
    '**/_app.jsx',
  ],
};
