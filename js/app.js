let newGame = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
  }
}

const startButton = document.querySelector("#begin-game");
const gameoverMessage = document.querySelector("#game-over");
  startButton.addEventListener("click", () => {
    if(!newGame.winner){
      document.getElementById("play-area").style.opacity = "1";
    } else {
      const parent = document.querySelector('#game-board-underlay')
      removeAllChildNodes(parent);
      gameoverMessage.style.display = "none";
      newGame = new Game();
    }
    startButton.style.display = "none";
    newGame.startGame();
  }
);

document.addEventListener("keydown", function(event) {
  newGame.handleKeydown(event);
});
