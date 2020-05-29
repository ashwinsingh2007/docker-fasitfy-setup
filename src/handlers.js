const path = require('path');
const healthController = require(path.resolve('src/controllers/HealthController'));

const opts = {
	schema: {
		response: {
			'2xx': {
				type: 'object',
				properties: {
					result: {
						type: 'string'
					}
				}
			}
		}
	}
};

const handlers = {
	apply: (app) => {
		app.get('/', opts, healthController.simple);
	}
};

module.exports = handlers;
