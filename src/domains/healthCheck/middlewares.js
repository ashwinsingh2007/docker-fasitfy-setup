const simple = (req, reply) => {
	return reply.send({ result: 'App-running' });
};

module.exports = {
	simple
};
