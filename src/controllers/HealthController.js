const controller = {

    simple: async (request, reply) => {
        reply.type('application/json').code(200);
        return { result: 'App-Running' };
    }

};

module.exports = controller;
