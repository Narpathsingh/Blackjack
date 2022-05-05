let cards = [];
let isAlive = false;
let hasBlackJack = false;
let sum = 0;
let message = '';

// dom
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let messageEl = document.getElementById('message-el')

//startGame
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    Cards()
}


//getrandom card
function getRandomCard(){
    let randomCard  = Math.floor(Math.random() * 13) + 1
    if(randomCard > 10){
        return 10;
    } else if(randomCard === 1){
        return 11;
    } else {
        return randomCard
    }
}

// get dom value
function Cards(){
    cardsEl.textContent = "Cards: "
    for( let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    //sum value
    sumEl.textContent = "Sum: " + sum; 
    if(sum <= 20){
        message = "Want to draw a new Card?"
    } else if(sum === 21){
        message = "It is a blackjack"
        hasBlackJack = true;
    } else {    
        message =  "Game Over."
        isAlive = false
    }
    messageEl.textContent = message;
}

//newcard
function newCard(){
   if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    Cards()
   }
}