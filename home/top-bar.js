window.onload = function () {
  var currentdate = new Date();
  var date =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  document.getElementById("top-date").innerText = date;
  console.log(date);
};
