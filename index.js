let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Nice, Blackjack!"
        hasBlackJack = true
    } else {
        message = "Ouch, busted!"
        isAlive = false
    }
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from deck")
    let card = 4
    sum += card
    cards.push(card)
    renderGame()
}




