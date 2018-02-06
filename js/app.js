/*
 * Create a list that holds all of your cards
 */


const card1 = document.querySelector('card1');
const card2 = document.querySelector('card2');
const card3 = document.querySelector('card3');
const card4 = document.querySelector('card4');
const card5 = document.querySelector('card5');
const card6 = document.querySelector('card6');
const card7 = document.querySelector('card7');
const card8 = document.querySelector('card8');


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
    console.log("card is opened", selectCard)
};


  function checkMatch(selectCard) {
    const id = selectCard.id;
    const cardNumber = id.slice(0, 5);
    const match = cardsOpen.find(function(openCard) {
   if (cardsOpen.includes(cardNumber)) {
    cardMatch()
    console.log('match initiated')
   } else {
    cardMismatch()
    console.log('no match');
   };
});
};



    function cardMatch(selectCard) {
    selectCard.classList.add('match');
    console.log('matched', selectCard);
};




    function cardMismatch(selectCard) {
    //cardsOpen.pop();
    console.log('misMatchworking', selectCard);
};









/*
function starRemoval(selectCard) {
    const removeStar = document.getElementById('stars');
    const removeFa = document.getElementById('fa fa-star');

if (removeStar.includes(removeFa) === true) { // <--- right here
       removeStar.removeChild(removeStar.childNodes[0]);
        //removeStar.pop();
        console.log('logMoveworking', selectCard);
    } else {
        console.log('no more cards');
    };



        if (removeStar.includes(removeFa) === true) {
        removeStar.removeChild(removeStar.childNodes[0]);
        //removeStar.pop();
        console.log('logMoveworking', selectCard);
    } else {
        console.log('no more cards');
    };

};
*/





    let number = 0;
function logMove(selectCard) {
    const moveCounter = document.querySelector('.moves');
    const div = document.createElement('span')
    const increaseOne = number++;

    moveCounter.innerText = div.innerText;
    div.innerText = increaseOne;
    moveCounter.appendChild(div);

    console.log('movecounterworking', selectCard);
}








Array.from(document.getElementsByClassName('card')).forEach(function(cards) {
  cards.addEventListener('click', function() {

    displaySymbol(this);
    openCard(this);
    checkMatch(this);
    logMove(this);
  //starRemoval(this);
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



