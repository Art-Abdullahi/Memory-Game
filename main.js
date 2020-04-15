document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.jpg",
    },
    {
      name: "fries",
      img: "images/fries.jpg",
    },
    {
      name: "burger",
      img: "images/burger.jpg",
    },
    {
      name: "burger",
      img: "images/burger.jpg",
    },
    {
      name: "hotdogs",
      img: "images/hotdogs.jpg",
    },
    {
      name: "hotdogs",
      img: "images/hotdogs.jpg",
    },
    {
      name: "pizza",
      img: "images/pizza.jpg",
    },
    {
      name: "pizza",
      img: "images/pizza.jpg",
    },
    {
      name: "icecream",
      img: "images/icecream.jpg",
    },
    {
      name: "icecream",
      img: "images/icecream.jpg",
    },
    {
      name: "milkshake",
      img: "images/milkshake.jpg",
    },
    {
      name: "milkshake",
      img: "images/milkshake.jpg",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create your board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/colors.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.jpg");
      cards[optionTwoId].setAttribute("src", "images/white.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/colors.jpg");
      cards[optionTwoId].setAttribute("src", "images/colors.jpg");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      var modal = (document.getElementById("id01").style.display = "block");
      //resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
