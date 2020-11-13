var currentdate = new Date(); 
var date = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear()

window.onload = function() {
    document.getElementById("top-date").innerText = date;
};