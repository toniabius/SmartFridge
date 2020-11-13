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

    var name = $("#foodinput").val();
    var quan = $("#quantityinput").val();

    if ($("#invTable button[class='" + name + "']") != null) {
      var row = $("#invTable button[class='" + name + "']").parents("tr")[0];

      quan += parseInt($(row).cells[1].innerText);

      $(row).remove();
    }

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
    var name = $("#foodinput").val();
    var quan = $("#quantityinput").val();
    var oriquan;

    if ($("#invTable button[class='" + name + "']") != null) {
      var row = $("#invTable button[class='" + name + "']").parents("tr")[0];

      oriQuan = parseInt(table.rows[i].cells[1].val());

      $(row).remove();

      var diff = oriquan - quan;
      if (diff > 0) {
        addAux(name, diff);
        clearForm();
      }
    }
  }
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
