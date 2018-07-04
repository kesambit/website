let mix = require('laravel-mix');

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

mix.react('resources/assets/js/app.js', 'public/js/farindra.js')
   .sass('resources/assets/sass/app.scss', 'public/css/farindra.css');

mix.react( [
    'resources/assets/js/default/web/reducers/reducer.menus.js',
    'resources/assets/js/default/web/components/Header.js',
    'resources/assets/js/default/web/components/Main.js',
    'resources/assets/js/default/web/Index.js',
], 'public/js/web.js');

mix.copyDirectory('resources/assets/images', 'public/images');
mix.copy('resources/assets/images/misc/favicon.ico', 'public');
//

if (mix.inProduction()) {
    mix.version();
}
