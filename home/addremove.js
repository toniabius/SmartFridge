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
  
      var i;
      var found = false;
      var oriquan;
      var table = document.getElementById("invTable");
  
      for (i = 0; i < table.rows.length; i++) {
        var content = table.rows[i].cells[0];
        if (content.localeCompare(name) == 0) {
          oriQuan = parseInt(table.rows[i].cells[1].val());
          found = true;
          break;
        }
      }
  
      if (found) {
        quan = oriquan - quan;
  
        table.deleteRow(i);
  
        if (diff > 0) {
          addAux(name, quan);
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
  