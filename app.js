var express    = require( 'express' ),
	path       = require('path'),
	handlebars = require( 'express-handlebars' ),
    Log        = require( 'log' );

var app = module.exports = express();

// Create a log for every app request.
app.use( function ( req, res, next ) {
	req.log = new Log( app.get( 'log level' ) );
	next();
} );

// Setup handlebars templates.
var hbs = handlebars.create( {
	extname: 'html',
	defaultLayout: 'main.html',
	layoutsDir: path.join( __dirname, 'templates' ),
	partialsDir: [
		path.join( __dirname, 'templates' )
	]
} );

// view engine setup
app.engine( 'html', hbs.engine );
app.set( 'views', path.join( __dirname, 'templates' ) );
app.set( 'view engine', 'html' );

// Root path route
app.get( '/', function ( req, res ) {
	res.render( 'body', {
		name: 'Jay'
	} );
} );

// Log errors.
app.use( function( err, req, res, next ) {
	req.log.error( err );

	res
		.status( 500 )
		.send( 'TODO: Create an error page' );
} );