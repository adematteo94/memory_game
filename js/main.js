
var cardId = "cards";

var cards = [
{
		rank: "King",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "Queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "King",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "Queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	}
];

var cardsInPlay = [];

var score = 0;

var scoreUpdate = function() {
	var points = document.getElementById('points');
	points.textContent = score;
};

//Trying to figure out how to not reset the points
//var keepScore = function () {
	//var currentScore = document.getElementById('points');
	//currentScore = score + score;
	//return currentScore;
//};

var shuffle = function(deck) {
    var counter = deck.length;
    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = deck[counter];
        deck[counter] = deck[index];
        deck[index] = temp;
    }
    return deck;
};

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit) {
		score++;
		scoreUpdate();
		cardsInPlay.pop(cards[cardId]);
		cardsInPlay.pop(cards[cardId]);
		} else {
		cardsInPlay.pop(cards[cardId]);
		cardsInPlay.pop(cards[cardId]);
		}
	}	
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
};

var createBoard = function () {
	shuffle(cards);
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var removeBoard = function () {
	var remove = document.getElementById("game-board").innerHTML = "";	
};

var resetBoard = function () {
	removeBoard();
	createBoard();
};

var resetGame = function () {
	
};

createBoard();







