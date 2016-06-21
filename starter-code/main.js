// declared variables and assigned card values

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var isMatch = function (checkTwoCards){
	if (checkTwoCards[0] === checkTwoCards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}

	var tempArray = document.getElementsByClassName('card');
	for (var i = 0; i < tempArray.length; i++) {
		tempArray[i].innerHTML = " ";
	}
};

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')==='queen') {
		this.innerHTML = '<img src="SpadesQ.png" alt="Queen" height="200px" width="150px">';
	} else if (this.getAttribute('data-card')==='king') {
		this.innerHTML = '<img src="SpadesK.png" alt="King" height="200px" width="150px">';
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var newItem = document.createElement('div');
		newItem.className='card';
		document.getElementsByClassName('board')[0].appendChild(newItem);
		newItem.setAttribute('data-card', cards[i]);
		newItem.addEventListener('click', isTwoCards);

	}	
};

createBoard();
