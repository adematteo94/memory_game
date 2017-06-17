
var cardId = "cards";

var cards = [
{
		rank: "King",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
		backImage: "images/back.png"
	},
	{
		rank: "King",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
		backImage: "images/back.png"
	},
	{
		rank: "Queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
		backImage: "images/back.png"
	},
	{
		rank: "Queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
		backImage: "images/back.png"
	},
	{
		rank: "King",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
		backImage: "images/back.png"
	},
	{
		rank: "King",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
		backImage: "images/back.png"
	},
	{
		rank: "Queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
		backImage: "images/back.png"
	},
	{
		rank: "Queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
		backImage: "images/back.png"
	}
];

var cardsInPlay = [];

var score = 0;

var scoreUpdate = function() {
	var points = document.getElementById('points');
	points.textContent = score;
};

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

var resetUnmatchedCards = function() {
	//Looking to select the two most recently flipped cards, replace their image with the image of the back of the card.
	cardsInPlay.forEach(function(image) {
		var cardFront = document.getElementsByName('in');
		cardFront.setAttribute('src', 'images/back.png');
		console.log(cardId);

	})


	//for (var i = 0; i < cardsInPlay.length; i++) {
		//having trouble selecting the flipped card and changing it back to its original state (tha back of the card).
		//How do I select the cards that are in cardsInPlay?

		//this is what I have experimented with, hoping to grab the cards that get the name attribute 'in' from the flip card function.
		//var card = document.getElementById('game-board');
		//var cardFront = card.getElementsByName('in')[i];
		//cardFront.setAttribute('src', cardsInPlay[i].backImage);


		//this works partially but only grabs the first two cards because I am selecting the img tag, and only the frist 2 as noted with i.
		/*var card = document.getElementById('game-board');
		var cardFront = card.getElementsByTagName('img')[i];
		//Right now I can only select the first two cards in the div, which I dont want. Need to flip back any card that someone flips. 
		cardFront.setAttribute('src', cardsInPlay[i].backImage);*/
		
	//}
	cardsInPlay.pop(cards[cardId]);
	cardsInPlay.pop(cards[cardId]);
};

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit) {
		score++;
		scoreUpdate();
		cardsInPlay.pop(cards[cardId]);
		cardsInPlay.pop(cards[cardId]);
		} else {
		setTimeout(function() { resetUnmatchedCards(); }, 750);
		}
	}	
};

var flipCard = function() {
	 
 	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId]);
	this.setAttribute('src', cards[cardId].cardImage);
	this.setAttribute('name', 'in');
	console.log("user clicked the " + cards[cardId].rank + " of " + cards[cardId].suit);	
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
};

var createBoard = function () {
	shuffle(cards);
	for (var i = 0; i < cards.length; i++) {
		console.log(i)
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

createBoard();







