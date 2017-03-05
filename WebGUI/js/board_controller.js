chessApp.controller('board_controller', function($scope, chessService){

	$scope.board = [
		{
			row : 1,
			cols : ['h','g', 'f', 'e', 'd', 'c','b','a']
		},
		{
			row : 2,
			cols : ['h','g', 'f', 'e', 'd', 'c','b','a']
		},
		{
			row : 3,
			cols : ['h','g', 'f', 'e', 'd', 'c','b','a']
		},
		{
			row : 4,
			cols : ['h','g', 'f', 'e', 'd', 'c','b','a']
		},
		{
			row : 5,
			cols : ['h','g', 'f', 'e', 'd', 'c','b','a']
		},
		{
			row : 6,
			cols : ['h','g', 'f', 'e', 'd', 'c','b','a']
		},
		{
			row : 7,
			cols : ['h','g', 'f', 'e', 'd', 'c','b','a']
		},
		{
			row : 8,
			cols : ['h','g', 'f', 'e', 'd', 'c','b','a']
		}
	]

	$scope.get = function(_loc){
		// console.log(_loc);
		return chessService.getCoord(_loc);
	}

	/*** Clicking & Move ***/
	$scope.active_click = null;
	$scope.click = function(_loc){


		if($scope.active_click == null){
			// Check if there is a piece there
			var piece = chessService.getCoord(_loc);

			// Try to select a tile
			if(piece != ""){
				$scope.active_click = _loc;
			}
		} else {

			// Try to move, update board
			if($scope.active_click != _loc){
				// The click tile is not itself(Active Tile)

				// Not equal to itself, then move
				chessService.set(_loc, chessService.getCoord($scope.active_click));

				// Clear previous tile
				chessService.set($scope.active_click, "");
			}
			$scope.active_click = null;
		}
	}
});