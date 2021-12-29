let player = {
  name: "Mark",
  chips: 145
  }

let cards = [];
let sum = 0;
let hasCardValue = false;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById("player-el");


playerEl.textContent = player.name + ": $" +  player.chips;

function getRandomCard(){

  let randomNumber = Math.floor(Math.random()*13)+ 1;
    if(randomNumber > 10){
      return 10;
  }
    else if(randomNumber === 1){
      return 11;
  }
    else{
      return randomNumber
  }
}

function startGame() {
  if(hasCardValue === false){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = 'Sum:' + sum;

  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
    hasCardValue = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    hasCardValue = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    hasCardValue = true;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false){
  let nextCard = getRandomCard();
  sum += nextCard;
  cards.push(nextCard);
  renderGame();
  }
 
}


