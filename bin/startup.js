var forever     = require( 'forever-monitor' ),
    numRestarts = 10;

var child = new ( forever.Monitor )( './bin/www', {
    max: numRestarts,
    watch: true,
    watchDirectory: '.'
} );

child.on( 'start', function () {
	console.log( './bin/www has started' );
} );

child.on( 'restart', function () {
	console.log( './bin/www has restarted' );
} );

child.on( 'stop', function () {
    console.log( './bin/www  has stopped' );
} );

child.on( 'exit', function () {
    console.log( './bin/www  has exited after ' + numRestarts + ' restarts' );
} );

child.start();