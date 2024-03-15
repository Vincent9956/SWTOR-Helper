function addname(){

    var nameInput = document.getElementById("cname");
    var name = nameInput.ariaValueMax;

    if (name.trim() !==""){
        var table document.getElementById(maintable);

        var row = table.insertRow();
        var cell = row.insertCell(0);
        var text = document.createTextnode(name);
        cell.appendChild(text);

        nameInput.value ="";
    }else {
        alert("Please enter a name")
    }

}