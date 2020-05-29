'use strict';

const middleware = require('./middlewares');
const schemas = require('./schemas');

const routes = [
	{ method: 'get',
		path: '/',
		handler: middleware.simple,
		schema: schemas.simple,
	}
];

module.exports = routes;
