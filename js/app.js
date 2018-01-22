/*
 * Create a list that holds all of your cards
 */


const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');
const card7 = document.querySelector('.card7');
const card8 = document.querySelector('.card8');


const cards = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
    'card7',
    'card8',
];

const cardsOpen = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976




function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

shuffle(cards);

function displaySymbol() {
    const selectCard = this;
    selectCard.classList.add('show');
    console.log('symbol shown', this);
    };

function openCard() {
    const selectCard = document.querySelector('.card');
    selectCard.classList.add('open');
    cardsOpen.push(selectCard);
       if (selectCard === selectCard) {
        selectCard.classList.add('match');
        console.log('yes');
    } else {
        selectCard.classList.remove('open', 'show')
        console.log('no');
    }

    console.log('card open');
};


document.getElementsByClassName('card').forEach(cardEl => {
  cardEl.addEventListener('click', function() {
       displaySymbol(this);
       openCard(this);
       console.log('clicked')

    // now you can pass in the card el that was clicked, either using this or the cardEl variable
  });
});


/*

document.getElementById('card5').addEventListener('click', function () {
    displaySymbol();
    openCard();

    console.log('clicked!');
});
*/

/*
function moveCounter()  {
    const moves = document.querySelector('.moves')
    document.getElementsbyClassName('card').addEventListener('click' function() {
    moves++;
    counter.innerText = moves;
}
moveCounter();



/* set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

