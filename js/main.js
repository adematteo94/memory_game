
var cards = ["Joker", "Joker", "Ace", "Ace", "Jack", "Jack", "Queen", "Queen", "King", "King", "Blank", "Blank"];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Try again.");
	}
}

var flipCard = function(cardId) {
	
	console.log("You flipped the "  + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	checkForMatch();	
	}


flipCard(0);
flipCard(5);













































