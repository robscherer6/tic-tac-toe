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
  if(cells[8] === currentPlayer) {
    if(cells[2] === currentPlayer && cells[5] === currentPlayer) {
      return true;
    }
    if(cells[6] === currentPlayer && cells[7] === currentPlayer) {
      return true;
    }
  }
  if(cells[1] === currentPlayer) {
    if(cells[4] === currentPlayer && cells[7] === currentPlayer) {
      return true;
    }
  }
  if(cells[3] === currentPlayer) {
    if(cells[4] === currentPlayer && cells[5] === currentPlayer) {
      return true;
    }
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