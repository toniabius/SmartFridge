function add() {
  if (
    $("#foodinput").val() != null &&
    $("#foodinput").val() != "" &&
    $("#quantityinput").val() != null &&
    $("#quantityinput").val() != ""
  ) {
    if ($("#invTable tbody").length == 0) {
      $("#invTable").append("<tbody></tbody>");
    }

    var name = $("#foodinput").val().toUpperCase();
    var quan = $("#quantityinput").val();
    var table = document.getElementById("invTable");

    var i;

    for (i = 0; i < table.rows.length; i++) {
      var content = table.rows[i].cells[0];
      var currfood = content.innerHTML.toUpperCase();

      if (currfood.localeCompare(name) == 0) {
        quan = parseInt(quan) + parseInt(table.rows[i].cells[1].innerHTML);
        break;
      }
    }
    table.deleteRow(i);

    addAux(name, quan);
    clearForm();
  }
}

function remove() {
  if (
    $("#foodinput").val() != null &&
    $("#foodinput").val() != "" &&
    $("#quantityinput").val() != null &&
    $("#quantityinput").val() != ""
  ) {
    if ($("#invTable tbody").length == 0) {
      $("#invTable").append("<tbody></tbody>");
    }
    var name = $("#foodinput").val().toUpperCase();
    var quan = $("#quantityinput").val();

    var i;
    var found = false;
    var oriquan = 0;
    var table = document.getElementById("invTable");

    for (i = 0; i < table.rows.length; i++) {
      var content = table.rows[i].cells[0];
      var currfood = content.innerHTML.toUpperCase();
      console.log(currfood);
      console.log("for loop ln 38 " + i);

      if (currfood.localeCompare(name) == 0) {
        oriquan = parseInt(table.rows[i].cells[1].innerHTML);
        found = true;
        break;
      }
    }

    if (found) {
      quan = oriquan - parseInt(quan);
      console.log(quan);

      table.deleteRow(i);

      if (quan > 0) {
        addAux(name, quan);
      }
    }
  }
  clearForm();
}

// add row
function addAux(name, quan) {
  $("#invTable tbody").append(
    "<tr>" +
      "<td class='food'>" +
      name +
      "</td>" +
      "<td class ='qty'>" +
      quan +
      "</td>" +
      "</tr>"
  );
}

// clear form
function clearForm() {
  $("#foodinput").val("");
  $("#quantityinput").val("");

  $("#foodinput").focus();
}
