/*const categories = {
    fruits: ["🍎", "🍌", "🍒", "🍇", "🥭", "🍍", "🍉", "🍓"],
    emojis: ["😀", "😂", "😍", "😎", "😭", "😡", "🤩", "😱"],
    animals: ["🐶", "🐱", "🐼", "🐵", "🐷", "🦁", "🐨", "🐸"],
    planets: ["🪐", "🌍", "🌕", "🌞", "⭐", "🌑", "🌛", "🌟"],
    flags: ["🇺🇸", "🇬🇧", "🇮🇳", "🇨🇦", "🇩🇪", "🇫🇷", "🇯🇵", "🇧🇷"]
};

let selectedCategory = [];
let firstCard, secondCard;
let lockBoard = false;
let matches = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const flipSound = new Audio('./Coffee_Shop/cardflip.mp3');
const matchSound = new Audio('./Coffee_Shop/match.mp3');
const winSound = new Audio('./Coffee_Shop/win.mp3');
const loseSound = new Audio('./Coffee_Shop/lose.mp3');

function startGame(category) {
    selectedCategory = [...categories[category], ...categories[category]];
    selectedCategory.sort(() => Math.random() - 0.5);

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    createBoard();
    startTimer();
    saveGameState();
}

function createBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
    
    selectedCategory.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.dataset.value = item;
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
    saveGameState();
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.innerText = this.dataset.value;
    flipSound.play();
    
    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkMatch();
}

function checkMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        matches++;
        score += 10;
        document.getElementById("score").innerText = score;
        matchSound.play();

        if (matches === 8) endGame(true);
        saveGameState();
        resetBoard();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.innerText = "";
            secondCard.innerText = "";
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
    saveGameState();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft === 30) endGame(false);
    }, 1000);
}


function endGame(win) {
    clearInterval(timerInterval);
    setTimeout(() => {
        const popup = document.getElementById("popup");
        document.getElementById("popup-message").innerText = win ? `You won! Score: ${score}` : `Time's up! Score: ${score}`;
        popup.style.display = "block";
        win ? winSound.play() : loseSound.play();
    }, 500);
}

function saveGameState() {
    const gameState = {
        selectedCategory,
        matches,
        score,
        timeLeft,
        flippedCards: [...document.querySelectorAll('.card')].map(card => ({
            index: card.dataset.index,
            value: card.innerText
        }))
    };
    localStorage.setItem("memoryGameState", JSON.stringify(gameState));
}

window.onload = function () {
    const savedState = localStorage.getItem("memoryGameState");
    if (savedState) {
        document.getElementById("continue-popup").style.display = "block";
    }
};

function resetGame() {
    localStorage.removeItem("memoryGameState");
    window.location.reload();
}

function loadGameState() {
    const savedState = localStorage.getItem("memoryGameState");
    if (savedState) {
        const { selectedCategory: savedCategory, matches: savedMatches, score: savedScore, timeLeft: savedTime } = JSON.parse(savedState);
        selectedCategory = savedCategory;
        matches = savedMatches;
        score = savedScore;
        timeLeft = savedTime;

        document.getElementById("score").innerText = score;
        document.getElementById("timer").innerText = timeLeft;

        createBoard();
        startTimer();
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    localStorage.clear();
    location.reload();
} 
document.addEventListener("DOMContentLoaded", addPopupButtons);*/
const categories = {
    fruits: ["🍎", "🍌", "🍒", "🍇", "🥭", "🍍", "🍉", "🍓"],
    emojis: ["😀", "😂", "😍", "😎", "😭", "😡", "🤩", "😱"],
    animals: ["🐶", "🐱", "🐼", "🐵", "🐷", "🦁", "🐨", "🐸"],
    planets: ["🪐", "🌍", "🌕", "🌞", "⭐", "🌑", "🌛", "🌟"],
    flags: ["🇺🇸", "🇬🇧", "🇮🇳", "🇨🇦", "🇩🇪", "🇫🇷", "🇯🇵", "🇧🇷"]
};

let selectedCategory = [];
let firstCard, secondCard;
let lockBoard = false;
let matches = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const flipSound = new Audio('./Coffee_Shop/cardflip.mp3');
const matchSound = new Audio('./Coffee_Shop/match.mp3');
const winSound = new Audio('./Coffee_Shop/win.mp3');
const loseSound = new Audio('./Coffee_Shop/lose.mp3');
const timerSound = new Audio('./Coffee_Shop/timer.mp3');

function startGame(category) {
    selectedCategory = [...categories[category], ...categories[category]];
    selectedCategory.sort(() => Math.random() - 0.5);

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    createBoard();
    startTimer();
    saveGameState();
}

function createBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
    
    selectedCategory.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.dataset.value = item;
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
    saveGameState();
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.innerText = this.dataset.value;
    flipSound.play();
    
    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkMatch();
}

function checkMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        matches++;
        score += 10;
        document.getElementById("score").innerText = score;
        matchSound.play();

        if (matches === 8) endGame(true);
        saveGameState();
        resetBoard();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.innerText = "";
            secondCard.innerText = "";
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
    saveGameState();
}

function startTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = timeLeft;
    timerSound.play();

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame(false);
        }
    }, 1000);
}

function endGame(win) {
    clearInterval(timerInterval);
    setTimeout(() => {
        const popup = document.getElementById("popup");
        document.getElementById("popup-message").innerText = win ? `You won! Score: ${score}` : `Time's up! Score: ${score}`;
        popup.innerHTML += `<br><button onclick='saveGameState(); closePopup();'>Save Game</button>`;
        popup.innerHTML += `<button onclick='resetGame();'>Play Again</button>`;
        popup.style.display = "block";
        win ? winSound.play() : loseSound.play();
    }, 500);
}

function saveGameState() {
    const gameState = {
        selectedCategory,
        matches,
        score,
        timeLeft,
        flippedCards: [...document.querySelectorAll('.card')].map(card => ({
            index: card.dataset.index,
            value: card.innerText
        }))
    };
    localStorage.setItem("memoryGameState", JSON.stringify(gameState));
}

window.onload = function () {
    const savedState = localStorage.getItem("memoryGameState");
    if (savedState) {
        document.getElementById("continue-popup").style.display = "block";
    }
};

function resetGame() {
    localStorage.removeItem("memoryGameState");
    window.location.reload();
}

function loadGameState() {
    const savedState = localStorage.getItem("memoryGameState");
    if (savedState) {
        const { selectedCategory: savedCategory, matches: savedMatches, score: savedScore, timeLeft: savedTime } = JSON.parse(savedState);
        selectedCategory = savedCategory;
        matches = savedMatches;
        score = savedScore;
        timeLeft = savedTime;

        document.getElementById("score").innerText = score;
        document.getElementById("timer").innerText = timeLeft;

        createBoard();
        startTimer();
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    localStorage.clear();
    location.reload();
}
