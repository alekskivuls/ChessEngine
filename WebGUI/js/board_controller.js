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
		console.log(_loc);
		return chessService.getCoord(_loc);
	}
});