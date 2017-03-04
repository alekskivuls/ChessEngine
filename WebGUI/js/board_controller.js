chessApp.controller('board_controller', function($scope){
	$scope.test = "board"

	$scope.board = [
		{
			row : 8,
			cols : ['a','b','c','d','e','f','g','h']
		},
		{
			row : 7,
			cols : ['a','b','c','d','e','f','g','h']
		},
		{
			row : 6,
			cols : ['a','b','c','d','e','f','g','h']
		},
		{
			row : 5,
			cols : ['a','b','c','d','e','f','g','h']
		},
		{
			row : 4,
			cols : ['a','b','c','d','e','f','g','h']
		},
		{
			row : 3,
			cols : ['a','b','c','d','e','f','g','h']
		},
		{
			row : 2,
			cols : ['a','b','c','d','e','f','g','h']
		},
		{
			row : 1,
			cols : ['a','b','c','d','e','f','g','h']
		}
	]
});