'use strict';

const path      = require(`path`);
const gulp      = require(`gulp`);
const pug       = require(`gulp-pug`);
const embedSVG  = require(`gulp-embed-svg`);
const sass      = require(`gulp-sass`);
const webpack   = require(`webpack-stream`);
const server    = require(`browser-sync`).create();


// Path
const dirs = {
  pugMain:      `./src/pug/*.pug`,
  svg:          `./src/img/**/*.svg`,
  scssMain:     `./src/scss/style.scss`,
  scssAll:      `./src/scss/**/*.scss`,
  jsSrc:        `./src/js/**/*.js`,

  dist:         `./docs`,
  html:         `./docs/*.html`,
};


// Webpack Config
const webpackConfig = {
  entry: {
    scripts: `./src/js/scripts.js`,
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, `dist`),
  },
  mode: `development`,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: `babel-loader`,
      },
    ],
  },
  devtool: `source-map`,
};


// Start BrowserSync Server
const startServer = () => {
  server.init({
    server: {
      baseDir: dirs.dist,
    },
    port: 3000,
    ghostMode: {
      clicks: false,
      forms: false,
      location: false,
      scroll: false,
    },
  }, (err, bs) => {
    // 
  })
};


// Render html from pug
const renderPug = (cb) => {
  gulp
    .src(dirs.pugMain)
    .pipe(pug({
      pretty: true,
      data: {},
    }))
    .on(`error`, (err) => {
      console.log("\x1b[31m", err.message, "\x1b[0m");
    })
    .pipe(embedSVG({
      root: `./src/`,
    }))
    .on(`error`, (err) => {
      console.log("\x1b[31m", err.message, "\x1b[0m");
    })
    .pipe(gulp.dest(dirs.dist))
    .pipe(server.stream());

  cb();
};


// Compile style.css
const compileStyles = (cb) => {
  gulp
    .src(dirs.scssMain)
    .pipe(sass().on(`error`, sass.logError))
    .pipe(gulp.dest(dirs.dist))
    .pipe(server.stream());

  cb();
}


const watch = () => {
  startServer();
  gulp.watch(dirs.pugMain, renderPug);
  gulp.watch(dirs.scssAll, compileStyles);
};


exports.watch = watch;
exports.pug = renderPug;
exports.styles = compileStyles;
exports.server = startServer;
