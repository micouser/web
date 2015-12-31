//Table editor
function btn_new()
{
    $("#table_new").toggle('slow/400/fast');
}

function btn_click1()
{
    var name = $("#table_name1").val();
    var age = $("#table_age1").val();
    var add = $("#table_add1").val();
    var num = $("#table_num1").val();
    var row = document.getElementById('table_title');
    var x = row.insertRow(1);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    var a = x.insertCell(2);
    var b = x.insertCell(3);
    y.innerHTML= name;
    z.innerHTML= age;
    a.innerHTML= add;
    b.innerHTML= num;
    $("#table_new").toggle('slow/400/fast');
}

function btn_editor()
{
    $("#table_editor").toggle('slow/400/fast');
    
}