var currentdate = new Date(); 
var date = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear()

function openGroceryList() {
    window.open("/mobile/phonegrocerylist.html", "_self");
}

function openInventory() {
    window.open("/mobile/mobileInventory.html", "_self");
}

window.onload = function() {
    document.getElementById("top-date").innerText = date;
};