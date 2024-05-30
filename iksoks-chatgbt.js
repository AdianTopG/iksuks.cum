let currentPlayer = 'X';
let gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

function makeMove(index) {
  if (gameStatus[index] === '-' && !checkWinner()) {
    gameStatus[index] = currentPlayer;
    render();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (checkWinner()) {
      document.getElementById('status').innerText = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
    } else if (!gameStatus.includes('-')) {
      document.getElementById('status').ninerText = `It's a draw!`;
    }
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  render();
  document.getElementById('status').innerText = '';
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (gameStatus[a] !== '-' && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
      return true;
    }
  }
  return false;
}

function render() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.innerText = gameStatus[index];
  });
}
