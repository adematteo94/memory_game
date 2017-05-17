
var cards = ["Joker", "Joker", "Ace", "Ace", "Jack", "Jack", "Queen", "Queen", "King", "King", "Blank", "Blank"];

var cardsInPlay = [];

var card1 = cards[0];
var card2 = cards[5];
var card3 = cards[8];
var card4 = cards[4];
var card5 = cards[6];
var card6 = cards[1];
var card7 = cards[10];
var card8 = cards[7];
var card9 = cards[3];
var card10 = cards[11];
var card11 = cards[2];
var card12 = cards[9];

cardsInPlay.push(card1);
cardsInPlay.push(card2);
cardsInPlay.push(card3);
cardsInPlay.push(card4);
cardsInPlay.push(card5);
cardsInPlay.push(card6);
cardsInPlay.push(card7);
cardsInPlay.push(card8);
cardsInPlay.push(card9);
cardsInPlay.push(card10);
cardsInPlay.push(card11);
cardsInPlay.push(card12);

console.log("You flipped the "  + card1);
console.log("You flipped the "  + card2);
console.log("You flipped the "  + card3);
console.log("You flipped the "  + card4);
console.log("You flipped the "  + card5);
console.log("You flipped the "  + card6);
console.log("You flipped the "  + card7);
console.log("You flipped the "  + card8);
console.log("You flipped the "  + card9);
console.log("You flipped the "  + card10);
console.log("You flipped the "  + card11);
console.log("You flipped the "  + card12);

if (cardsInPlay[0]===cardsInPlay[1]) {
	alert("You found a match!")
} else {
	alert("Try again.")
}