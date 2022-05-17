const table = document.getElementById('tableId');

var whosTurn = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
var counter = 0;

table.addEventListener('click', (e) => {
  const square = e.target.closest('td');
  if(!square.innerHTML) {
    square.innerHTML = whosTurn[counter];
    counter++;
  }
})