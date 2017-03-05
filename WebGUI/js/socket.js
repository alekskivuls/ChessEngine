chessApp.service("socket", function($websocket){

	var socket = $websocket();

	socket.onMessage(function(_message){
		console.log(_message);
	});	

	var send = function(_message){

		var jObject = JSON.stringify(_message);
		socket.send(jObject):
	}


	var service = {
		send 	: send
	}

	return service;
});