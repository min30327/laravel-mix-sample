const mix = require('laravel-mix');
    
    mix.setResourceRoot('');
    mix.js('src/js/app.js', 'public/js/')
    .sass('src/sass/app.scss', 'public/css/')
    .options({
        processCssUrls: false
    })
    .browserSync({
        files: './**/*',
        server: './public/',
        proxy: false
    });
