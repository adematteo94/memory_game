
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

var checkForMatch = function() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit) {
		alert("You found a match!");
	} else {
		alert("Try again.");
	}
}

var flipCard = function(cardId) {
	
	console.log("You flipped the "  + cards[cardId].rank);

	cardsInPlay.push(cards[cardId]);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	}


flipCard(0);
flipCard(4);
checkForMatch();










































