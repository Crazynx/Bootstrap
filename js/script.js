$("#inputName").hover(
 function() {
    $('#collapseNameInfo').collapse('show');
  }, function() {
    $('#collapseNameInfo').collapse('hide');
  }
);

$("#inputAddress").hover(
 function() {
    $('#collapseAddressInfo').collapse('show');
  }, function() {
    $('#collapseAddressInfo').collapse('hide');
  }
);

function validateInput() {
  var nameReg = /^[a-z ,.'-]+$/mi;
  var addressReg = /^[A-Z]{1}?[a-z]+[\s]{1}?[0-9]/;

  $("#passwordsNoMatchRegister").hide();

  if (!nameReg.test($("#inputName").val())) {
    $("#passwordsNoMatchRegister").show();
  }

  if (!addressReg.test($("#inputAddress").val())) {
    $("#passwordsNoMatchRegister").show();
  }
}
