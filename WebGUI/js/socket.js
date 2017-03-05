chessApp.service("socket", function($websocket){

	var socket = $websocket("ws://cirrus.alekskivuls.com");

	socket.onMessage(function(_message){
		console.log(_message);
	});	

	var send = function(_message){

		var jObject = JSON.stringify(_message);
		socket.send(jObject):
	}


	send({test: 'hello world'});
	var service = {
		send 	: send
	}

	return service;
});