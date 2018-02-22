

//List of Cards and selecting IDs from index.html
const card1 = document.querySelector('card1');
const card2 = document.querySelector('card2');
const card3 = document.querySelector('card3');
const card4 = document.querySelector('card4');
const card5 = document.querySelector('card5');
const card6 = document.querySelector('card6');
const card7 = document.querySelector('card7');
const card8 = document.querySelector('card8');

// Array of cards
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

//shuffling cardsOpen Array

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




//Displays 'symbol' on clicked card

    function displaySymbol(selectCard) {
    selectCard.classList.add('show');
    console.log('Symbol class has been added to classList', selectCard);
    };

//Displays 'open' on select Card and checks if card is in cardsOpen array

    function openCard(selectCard) {
    selectCard.classList.add('open');
    console.log('Open class has been added to card')
    const id = selectCard.id;
    const cardNumber = id.slice(0, 5);

    if (cardsOpen.length === 2) {

        checkMatch(selectCard);


    }  else {
    cardsOpen.push(cardNumber);
    cardsOpen.push(id);
    console.log("the card is put into cardsOpen array")
};
};

//Logs moves and removes stars

let number = 1;
function logMove(selectCard) {
    const moveCounter = document.querySelector('.moves');
    const div = document.createElement('span')
    const increaseOne = number++;
    moveCounter.innerText = div.innerText;
    div.innerText = increaseOne;
    moveCounter.appendChild(div);
    if (div.innerText == 16) {
        starRemoval();
        console.log('Removed 1 star');
    } else if (div.innerText == 24) {
        starRemoval();
        console.log('Removed 2 stars')
    } else if (div.innerText == 30) {
        starRemoval();
        console.log('Removed 3 stars')
    } else {
        console.log('adding more moves');
    }

    console.log('Move logged.', selectCard);
};

//Finds matched card in cardsOpen array and determines if there is a match
function findingCard(selectCard) {
    const cardId = selectCard.id;
    const cardInArrayId = document.getElementById(cardsOpen[1])

    if (cardId.endsWith('-1') && cardsOpen[1].endsWith('-2')) {
    cardInArrayId.classList.remove('open');
    cardInArrayId.classList.remove('show');
    cardInArrayId.classList.add('match');
    cardsOpen.pop();
    cardsOpen.pop();
    finishGame();
    console.log('You matched a set!');
}   else if (cardId.endsWith('-1') && cardsOpen[1].endsWith('-1')) {
    alert('You cannot click the same card twice.')
    location.reload();
}   else if (cardId.endsWith('-2') && cardsOpen[1].endsWith('-1')) {
    cardInArrayId.classList.remove('open');
    cardInArrayId.classList.remove('show');
    cardInArrayId.classList.add('match');
    cardsOpen.pop();
    cardsOpen.pop();
    console.log('You matched a set!');
}   else if (cardId.endsWith('-2') && cardsOpen[1].endsWith('-2')) {
    alert('You cannot click the same card twice.')
    location.reload();
}   else {
    console.log('*This should never be logged');
}
}


// Removes 'symbol' and 'open' class from the card in cardsOpen
function findingCardMisMatch(selectCard) {
    const selectCardId = document.getElementById(cardsOpen[1]);
    const selectCardClass = selectCardId.classList;
    selectCardClass.remove('open');
    selectCardClass.remove('show');
    cardsOpen.pop();
    cardsOpen.pop();
    console.log('Removing Unmatching card from array and returning original classList');
}




    function cardMatch(selectCard) {
    selectCard.classList.remove('open');
    selectCard.classList.remove('show');
    selectCard.classList.add('match');
    findingCard(selectCard);
    console.log('cardMatch working');
};




    function cardMismatch(selectCard) {
    selectCard.classList.remove('open');
    selectCard.classList.remove('show')
    findingCardMisMatch(selectCard);

    console.log('misMatchworking');
};




  function checkMatch(selectCard) {
    const id = selectCard.id;
    const cardNumbers = id.slice(0, 5);
   if (cardsOpen.includes(cardNumbers)) {

    cardMatch(selectCard);
    console.log('checkMatch working');
   } else {
    cardMismatch(selectCard);
    console.log('checkMatch working');

   };
};




function starRemoval(selectCard) {
  const removeStar = document.getElementsByClassName('stars')[0]
  console.log({ removeStar })
  if (removeStar.children.length > 0) {
    removeStar.removeChild(removeStar.children[0])
    console.log('logMoveworking', selectCard)
  } else {
    console.log('no more cards')
  }
}



//Runs if all cards have the 'match' class.

function finishGame() {
    clearInterval(timerInterval);
    alert('Congratulations! You have won in ' + timer + ' seconds and ' + number + ' moves!');
}


//Starts a timer
    let timer = 0
    const moveTimer = document.querySelector('.timer');
    const timerDiv = document.createElement('span')
    timerDiv.innerHTML = timer;
    timerInterval = setInterval(function() {
    timer++
    timerDiv.innerHTML = timer;
    moveTimer.appendChild(timerDiv);
    }, 1000);



// Resets game

    const restartIt = document.querySelector(".restart");
    restartIt.addEventListener('click', function() {
    location.reload();
    console.log('You reset the game');
});

//Even Listener for clicked card

Array.from(document.getElementsByClassName('card')).forEach(function(cards) {
  cards.addEventListener('click', function() {

    displaySymbol(this);
    openCard(this);
    logMove(this);

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

