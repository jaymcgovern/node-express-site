var express = require( 'express' ),
    Log     = require( 'log' ),
    app     = express(),
    server  = require( 'http' ).createServer( app );

app.use( function ( req, res, next ) {
	req.log = new Log( app.get( 'log level' ) );
	next();
} );

// if (app.get('log level') >= Log.INFO) {
//     var format = '[:date] INFO :remote-addr - :method :url ' +
//                  ':status :res[content-length] - :response-time ms';
//     express.logger.token('date', function () { return new Date(); });
//     app.use(express.logger(format));
// }

app.get( '/', function ( req, res ) {
	res.send( "Hello World!!!!" );
} );

app.listen( 3000 );