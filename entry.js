const http = require('http')


const server = http.createServer(function(request,response){
	console.log('server demarrer !')
	response.writeHead(200)
	response.end('salut tout le monde !')
});

server.listen(8080)