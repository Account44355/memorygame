/*
 * Create a list that holds all of your cards
 */


const card1 = document.querySelector("li.card1");
const card2 = document.querySelector("li.card2");
const card3 = document.querySelector("li.card3");
const card4 = document.querySelector("li.card4");
const card5 = document.querySelector("li.card5");
const card6 = document.querySelector("li.card6");
const card7 = document.querySelector("li.card7");
const card8 = document.querySelector("li.card8");
const card9 = document.querySelector("li.card9");
const card10 = document.querySelector("li.card10");




const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

const newCard1 = document.querySelector('li.card1')
newCard1.addEventListener('click', function () {
  console.log('The heading was clicked!');
});


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

    return cards;


}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
