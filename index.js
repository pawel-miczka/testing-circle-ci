const Hapi = require('hapi');
const server = new Hapi.Server({port: 5000});

(async () => {
	await server.start();
	console.log(`server started at port 5000`);
})();