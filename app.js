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

var cells = [null, null, null, null, null, null, null, null, null];

var player1 = 'X';
var player2 = 'O';
var currentPlayer = player1;

let createBoard = () => {
  boxes.forEach((box, index) => {
    box.addEventListener('click', boxClicked);
  })
}

var boxClicked = (e) => {
  let id = e.target.id;
  console.log('id: ', id);
  if (!cells[id]) {
    cells[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }
}

createBoard();