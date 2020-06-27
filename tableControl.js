function tableCreate(){
    var tableData= document.getElementById('testTable');
    var row=tableData.insertRow(tableData.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "<td></td>";
    cell2.innerHTML = "<td></td>";
}



function tableDelete()
{
    var tableData=document.getElementById('testTable');

    if(tableData.rows.length<2)return;
    tableData.deleteRow(1);
}