const table = document.getElementById('tableId');


table.addEventListener('click', (e) => {
  const cell = e.target.closest('td');
  cell.innerHTML = 'X';
})