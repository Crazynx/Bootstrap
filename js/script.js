$("#inputName").hover(
 function() {
    $('#collapseNameInfo').collapse('show');
  }, function() {
    $('#collapseNameInfo').collapse('hide');
  }
);

$("#inputAdress").hover(
 function() {
    $('#collapseAdressInfo').collapse('show');
  }, function() {
    $('#collapseAdressInfo').collapse('hide');
  }
);

function validateInput() {
  var nameReg = /^[a-z ,.'-]+$/mi;
  var adressReg = /^[A-Z]{1}?[a-z]+[\s]{1}?[0-9]/;

  $("#passwordsNoMatchRegister").hide();

  if (!nameReg.test($("#inputName").val())) {
    $("#passwordsNoMatchRegister").show();
  }

  if (!adressReg.test($("#inputAdress").val())) {
    $("#passwordsNoMatchRegister").show();
  }
}
