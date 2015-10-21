// @formatter:off

var requireCachedModule     = require('../util/requireCachedModule');
var config                  = require('../config');

var gulp                    = requireCachedModule('gulp');
var watch                   = requireCachedModule('gulp-watch');
var browserSync             = requireCachedModule('browser-sync');

var reloadTimeout;
var RELOAD_TIMEOUT_DELAY    = 200; // in milliseconds

// @formatter:on


/**
 * Task for watching files and running related tasks when needed.
 * JavaScript is done via watchify instead for this task for optimized configuration.
 * @see https://www.npmjs.com/package/gulp-watch
 */
gulp.task( 'watch', [ 'watchify' ], function ( callback ) {

    watch( config.source.getFiles( 'images' ),
        function ( events, done ) { gulp.start( 'images', done ); } );

    watch( config.source.getPath( 'css', '**/*.scss' ),
        function ( events, done ) { gulp.start( 'css' ); } );

    watch( config.source.getPath( 'html', '**' ),
        function ( events, done ) { gulp.start( 'html' ); } );

    watch( config.source.getFiles( 'data' ),
        function ( events, done ) { gulp.start( 'html', done ); } );

    watch( config.dest.getPath( 'html', '**/*.html' ), onHTMLChange );

} );

// @formatter:on

/**
 *  A separate function to refresh the browser. This is to bypass a known bug in chrome.
 *  see: https://github.com/BrowserSync/browser-sync/issues/155
 */
function onHTMLChange ( events, done ) {

    if( reloadTimeout ) clearTimeout( reloadTimeout );
    reloadTimeout = setTimeout( browserSync.reload, RELOAD_TIMEOUT_DELAY );

}

