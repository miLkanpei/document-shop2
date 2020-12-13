const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({ devtool: 'source-map' })
   .setResourceRoot("/");
   // .webpackConfig({
   //    watchOptions: {
   //      ignored: /node_modules/
   //    }
   //  });

mix.webpackConfig({

   module: {
      rules: [
         {
         exclude: /node_modules/,
         },
      ]
   }
});


   // .webpackConfig({
   //    module: {
   //      rules: [
   //        {
   //          exclude: /node_modules/,
   //        }
   //      ]
   //    }
   // });

   // mix.webpackConfig({
   //    watchOptions: {
   //      ignored: /node_modules/
   //    }
   //  })

