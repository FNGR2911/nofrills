module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    process.env.NODE_ENV === 'production' ? require('postcss-custom-properties') : null,
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production' ? require('cssnano')({ preset: 'default' }) : null,
  ],
}
