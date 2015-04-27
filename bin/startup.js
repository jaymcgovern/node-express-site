var forever     = require( 'forever-monitor' ),
    Log         = require( 'log' ),
    numRestarts = 10;

var child = new ( forever.Monitor )( './bin/www', {
    max: numRestarts,
    watch: true,
    watchDirectory: '.'
} );

var log = new Log( 'info' );

child.on( 'start', function () {
	log.info( './bin/www has started' );
} );

child.on( 'restart', function () {
	log.info( './bin/www has restarted' );
} );

child.on( 'stop', function () {
    log.info( './bin/www has stopped' );
} );

child.on( 'exit', function () {
    log.info( './bin/www has exited after %s restarts', numRestarts );
} );

child.start();