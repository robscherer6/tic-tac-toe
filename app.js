function addRowHandlers() {
  var table = document.getElementById('tableId');
  var rows = table.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {
    var currentRow = rows[i];
    var createClickHandler = function (row) {
      return function () {
        var cell = row.getElementsByTagName('td')[0];
        var id = cell.innerHTML;
        id.innerText = 'X'
      }
    }
    currentRow.onclick = createClickHandler(currentRow);
  }
}

window.onload = addRowHandlers();
