let mix = require('laravel-mix');

mix.setPublicPath('docs')
   .js('resources/app.js', 'docs')
   .sass('resources/app.scss', 'docs')
   .options({
        processCssUrls: false,
   });