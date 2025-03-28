export default {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
    ],
    plugins: [
      //ignorar arquivos de estilo
      ['babel-plugin-transform-assets', {
        extensions: ['sass', 'scss', 'css']
      }]
    ],
  };