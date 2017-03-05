chessApp.service('chessService', function(){
	
	var letters = ['h','g', 'f', 'e', 'd', 'c','b','a'];

	var boardCoord = {
	}

	for(var i = 1; i <= 8; i++){
		for(var ii = 0; ii < letters.length; ii++){
			// console.log(letters[ii] + i)/;
			boardCoord[letters[ii] + i] = "";
		}
	}

	var set = function(_location, _piece){
		boardCoord[_location] = _piece;
	}

	var getCoord = function(_location){
		return boardCoord[_location];
	}


	var init = function(){
		// Set up the board
		set("e8", "bK");
		set("e1", "wK");

		set("d8", "bQ");
		set("d1", "wQ");

		set("c8", "bB");
		set("f8", "bB");
		set("c1", "wB");
		set("f1", "wB");

		set("b8", "bN");
		set("g8", "bN");
		set("b1", "wN");
		set("g1", "wN");

		set("a8", "bR");
		set("h8", "bR");
		set("a1", "wR");
		set("h1", "wR");

		set("a7", "bP");
		set("b7", "bP");
		set("c7", "bP");
		set("d7", "bP");
		set("e7", "bP");
		set("f7", "bP");
		set("g7", "bP");
		set("h7", "bP");

		set("a2", "wP");
		set("b2", "wP");
		set("c2", "wP");
		set("d2", "wP");
		set("e2", "wP");
		set("f2", "wP");
		set("g2", "wP");
		set("h2", "wP");
	}

	init();

	var service = {
		getCoord : getCoord,
		set 	 : set
	};

	return service;
})