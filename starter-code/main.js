// declared variables and assigned card values

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var gameBoard = document.getElementById('game-board');


var createBoard = function () {
	for (var i = 1; i <= 4; i++) {
		var newItem = document.createElement('div');
		newItem.className='card';
		document.getElementsByClassName('board')[0].appendChild(newItem);
	}
}