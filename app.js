// const table = document.getElementById('tableId');

// var whosTurn = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
// var counter = 0;

// table.addEventListener('click', (e) => {
//   const square = e.target.closest('td');
//   if(!square.innerHTML) {
//     square.innerHTML = whosTurn[counter];
//     counter++;
//   }
// })

var boxes = Array.from(document.getElementsByClassName('box'));
var resetBtn = document.getElementById('reset');

var cells = [];

var player1 = 'X';
var player2 = 'O';
var currentPlayer = player1;

let createBoard = () => {
  boxes.forEach((box) => {
    box.addEventListener('click', boxClicked);
  })
}

var boxClicked = (e) => {
  let id = e.target.id;
  console.log('id: ', id);
  if (!cells[id]) {
    cells[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerWins()) {
      alert(`${currentPlayer} wins!!!`)
    }

    if (playersTie()) {
      alert('TIE GAME, PLEASE HIT RESET AND TRY AGAIN.');
    }

    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }
}

let playerWins = () => {
  if(cells[0] === currentPlayer) {
    if(cells[1] === currentPlayer && cells[2] === currentPlayer) {
      return true;
    }
    if(cells[3] === currentPlayer && cells[6] === currentPlayer) {
      return true;
    }
    if(cells[4] === currentPlayer && cells[8] === currentPlayer) {
      return true;
    }
  }
  else if(cells[8] === currentPlayer) {
    if(cells[2] === currentPlayer && cells[5] === currentPlayer) {
      return true;
    }
    if(cells[6] === currentPlayer && cells[7] === currentPlayer) {
      return true;
    }
  }
  else if(cells[1] === currentPlayer) {
    if(cells[4] === currentPlayer && cells[7] === currentPlayer) {
      return true;
    }
  }
  else if(cells[3] === currentPlayer) {
    if(cells[4] === currentPlayer && cells[5] === currentPlayer) {
      return true;
    }
  }
}

let playersTie = () => {
  if ((cells[0] === player1 || cells[0] === player2) &&
  (cells[1] === player1 || cells[1] === player2) &&
  (cells[2] === player1 || cells[2] === player2) &&
  (cells[3] === player1 || cells[3] === player2) &&
  (cells[4] === player1 || cells[4] === player2) &&
  (cells[5] === player1 || cells[5] === player2) &&
  (cells[6] === player1 || cells[6] === player2) &&
  (cells[7] === player1 || cells[7] === player2) &&
  (cells[8] === player1 || cells[8] === player2)) {
    return true;
  }
}

let reset = () => {
  cells.forEach((cell, index) => {
    cells[index] = null;
  })
  boxes.forEach((box) => {
    box.innerText = '';
  })
  currentPlayer = player1;
}

resetBtn.addEventListener('click', reset)

reset();
createBoard();