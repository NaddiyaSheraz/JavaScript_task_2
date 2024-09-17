
 function printTable() {
    let number = document.getElementById("number").value;
    let minlendth = parseInt(document.getElementById("minlendth").value);
    let maxlendth = parseInt(document.getElementById("maxlendth").value);
    let display = document.getElementById("DisplayTable");
    display.innerHTML = ""; // Clear previous table
    
    for (let i = minlendth; i <= maxlendth; i++) {
        display.innerHTML += `${number} X ${i} = ${number * i} <br>`;
    }
}

function Refresh() {
    document.getElementById("number").value = "";
    document.getElementById("minlendth").value = "";
    document.getElementById("maxlendth").value = "";
    document.getElementById("DisplayTable").innerHTML = ""; // Clear table display
}
