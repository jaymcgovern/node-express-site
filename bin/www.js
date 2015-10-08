#!/usr/bin/env node

var app = module.exports = require( '../app' );
app.enable( 'trust proxy' );

var port = parseInt( process.env.PORT, 10 ) || 3000;
app.set( 'port', port );

app.listen( port );
