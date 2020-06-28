function tableCreate() {
    var ID = document.getElementById('inName').value;
    var money = document.getElementById('money').value;

    if (money >= 0) {
        var tableData = document.getElementById('testTable');
        var row = tableData.insertRow(tableData.rows.length);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "<td>" + ID + "</td>";
        cell2.innerHTML = "<td>" + money + "</td>";
    } else {
        alert('가격은 숫자만 입력 가능합니다.');
    }
}



function tableDelete() {
    var tableData = document.getElementById('testTable');

    if (tableData.rows.length < 2) return;
    tableData.deleteRow(1);
}