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
        var cell3 = row.insertCell(2);
        cell3.innerHTML="<td><input type='radio' name='radio' width='10px' height='10px'></td>";
    } else {
        alert('가격은 숫자만 입력 가능합니다.');
    }
}



function tableDelete(){
    var tableData = document.getElementById('testTable');
    for(var i = 1;i<tableData.rows.length;i++){
        var chkbox = tableData.rows[i].cells[2].childNodes[0].checked;

        if(chkbox){
            tableData.deleteRow(i);
            i--;
        }
    }
} 
/*{
    var tableData = document.getElementById('testTable');

    if (tableData.rows.length < 2) return;
    tableData.deleteRow(1);
}*/

function tableRevise(){

}