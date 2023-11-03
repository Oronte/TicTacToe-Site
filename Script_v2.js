
var tableau = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];


var currentPlayer = 'X';


function survol(cell) {
  if (cell.innerHTML == "") {
    cell.style.backgroundColor = "lightgreen";
  }
}


function survolSortie(cell) {
  if (cell.innerHTML == "") {
    cell.style.backgroundColor = "";
  }
}



var gameOver = false;


function markCell(cell) {
  
  if (gameOver || cell.innerHTML !== "") return;

  cell.innerHTML = currentPlayer;
  cell.style.color = currentPlayer === 'X' ? "red" : "blue";
  var ligne = cell.parentNode.rowIndex;
  var colonne = cell.cellIndex;
  tableau[ligne][colonne] = currentPlayer;
  checkVictory(currentPlayer);
  switchPlayer();
}


function checkVictory(symbole) {
  if (isWinner(symbole)) {
    alert(symbole + ' a gagné !');
    gameOver = true;  
    resetGame();
  } else if (isDraw()) {
    alert('Match nul !');
    resetGame();
  }
}



function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


function checkVictory(symbole) {
  if (isWinner(symbole)) {
    alert(symbole + ' a gagné !');
    resetGame();
  } else if (isDraw()) {
    alert('Match nul !');
    resetGame();
  }
}


function isDraw() {
  return tableau.flat().every(cell => cell !== '');
}


function isWinner(symbole) {
if (
 (tableau[0][0] === symbole && tableau[0][1] === symbole && tableau[0][2] === symbole) ||
 (tableau[1][0] === symbole && tableau[1][1] === symbole && tableau[1][2] === symbole) ||
 (tableau[2][0] === symbole && tableau[2][1] === symbole && tableau[2][2] === symbole) ||
 (tableau[0][0] === symbole && tableau[1][0] === symbole && tableau[2][0] === symbole) ||
 (tableau[0][1] === symbole && tableau[1][1] === symbole && tableau[2][1] === symbole) ||
 (tableau[0][2] === symbole && tableau[1][2] === symbole && tableau[2][2] === symbole) ||
 (tableau[0][0] === symbole && tableau[1][1] === symbole && tableau[2][2] === symbole) ||
 (tableau[0][2] === symbole && tableau[1][1] === symbole && tableau[2][0] === symbole)
) {
 alert(symbole + ' a gagné !');
 resetGame();
}
  }


document.querySelector("button").addEventListener("click", resetGame);
function resetGame() {
  location.reload();
}





