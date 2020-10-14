# nofrills

nofrills is a clean **Drupal 8/9 starter theme** (or boilerplate) with Webpack, SASS (Autoprefixer), Babel (ES6), Uglify, Imagemin and more.

### Features

- Base theme is stable so you have bare **minimum of classes** and wrapping divs in your HTML
- Basic template files are included so they can be easily overwritten
- **Webpack** powered to transform and watch **Sass** (with Autoprefixer), **JavaScript** (ES6 with Babel) and **images** (imagemin)
- sanitize.css to make css development for different browsers easier

### Requirements

- Node (> 10.7)
- NPM or Yarn (> 6.4)

### Installation

1. Go to your themes folder and clone this repo into it:

```bash
$ cd web/themes/ && git clone git@github.com:FNGR2911/nofrills.git YOUR_THEME_NAME
```

2. Install all dependencies

```bash
$ npm install
```

3. Run the dev script and start developing

```bash
$ npm run dev
```

4. To get production optimized assets, run build

```bash
$ npm run build
```

### License

MIT
