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

let createBoard = () => {
  boxes.forEach((box, index) => {
    box.addEventListener('click', boxClicked);
  })
}

var boxClicked = (e) => {
  console.log('Box was clicked!!');
}

createBoard();