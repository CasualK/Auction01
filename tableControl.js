var present = 0;
var info = []; //앞뒤 반대 앞1:유저id, 앞2:책이름, 앞3:책가격, 뒤 : 현재 열


function tableCreate() {
   
        var name = document.getElementById('inName').value;
    var money = document.getElementById('money').value;
    var id = document.getElementById('userid').value; 
    

    if (money >= 0 ) {
        info[present] = {p_id : id, p_name : name, price : money, time : 1};
        var tableData = document.getElementById('testTable');
        var row = tableData.insertRow(tableData.rows.length); 
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);        
        cell1.innerHTML = "<td>" + (info[present].p_name) + "</td>";
        cell2.innerHTML = "<td>" + (info[present].price) + "</td>";
        cell3.innerHTML = "<td>" + (info[present].time) + "</td>";
        alert('USERID는'+info[present].p_id+'입니다');
        present++;
    } else {
        alert('가격은 숫자만 입력 가능합니다.');
    }
      
}

function tableDelete(){
    var id = document.getElementById('userid').value; 
    var name = document.getElementById('inName').value;
    var max = present;
    for(var i = 1 ; i<=present ; i++){
        if(id == info[i-1].p_id ){
        var tableData = document.getElementById('testTable');
        tableData.deleteRow(i);
        i--;    present--;
        break;
        } 
    } 
} 

function renew(){ //입찰
 var p_much = document.getElementById('much').value; //입찰할 가격 
 var wline = document.getElementById('Aure').value;  //입찰할 행

 var table1 = document.getElementById("testTable"); //테이블 불러옴
 var str = table1.rows[wline].cells[1].value;   //이거 수정해야함 기존 데이터 읽어와서 입찰할 가격이랑 비교
 alert(str);                                    //코드 확인 테스트용 ALERT
 table1.rows[wline].cells[1].innerHTML = p_much; //입력한 행에 입력한 가격을 넣음
}

function Revise(){ //수정 만들어야함

}