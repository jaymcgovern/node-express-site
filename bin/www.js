#!/usr/bin/env node

var app = module.exports = require('../app');
app.enable( 'trust proxy' );
app.listen( 3000 );
