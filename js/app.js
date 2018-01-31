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






    function displaySymbol(selectCard) {
    selectCard.classList.add('show');
    console.log('symbol shown', selectCard);
    };



    function openCard(selectCard) {
    selectCard.classList.add('open');
    cardsOpen.push(selectCard);
    console.log("try this", selectCard)
};


function checkMatch(selectCard) {
    const openIt = selectCard.id;
    // if (cardsOpen.includes(selectCard)) {   This will always run because on line 133 it is in the same event listener and it always pushes the 'this' selectCard to the cardsOpen[]
    // if (cardsOpen.includes(selectCard.id))  I am trying to check if the the id of the 'card' that was pushed to the cardsOpen[] is already there. This is what differentiates the 'card's.
       if (cardsOpen.includes(openIt)) {
        cardMatch(selectCard);
        console.log('yesssssss');
    };
};




    function cardMatch(selectCard) {
    selectCard.classList.add('match');
    console.log('matched', selectCard);
};




    function cardMismatch(selectCard) {
    cardsOpen.pop();
    console.log('misMatchworking', selectCard);
}










function starRemoval(selectCard) {  //removes star 1 by 1 by index node 0
    const removeStar = document.querySelector('.stars');
    const removeFa = document.querySelector('.fa fa-star');
    removeStar.removeChild(removeStar.childNodes[0]);
    /*Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
    at starRemoval (app.js:114)
    at HTMLLIElement.<anonymous> (app.js:151)
    */
    console.log('logMoveworking', selectCard);
}






    let number = 0;
function logMove(selectCard) {
    const moveCounter = document.querySelector('.moves');
    const increaseOne = number++;
    moveCounter.innerText = increaseOne;
    moveCounter.appendChild(moveCounter.innerText);
    /*;app.js:128 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    at logMove (app.js:128)
    at HTMLLIElement.<anonymous> (app.js:145)
    */
    console.log('movecounterworking', selectCard);
}








Array.from(document.getElementsByClassName('card')).forEach(function(cards) {
  cards.addEventListener('click', function() {

    displaySymbol(this);
    openCard(this);
    checkMatch(this);
    logMove(this);
    starRemoval(this);
    console.log('clicked');
});
});






/*
/* set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

