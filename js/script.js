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
  var nameReg = /^[a-z ,.'-]+$/gmi;
  var adressReg = /^[A-Z]{1}?[a-z]+[\s]{1}?[0-9]/;

  if (nameReg.test($("#inputName").val())) {
    console.log("success");
  } else {
    $("#passwordsNoMatchRegister").show();
    console.log("not success");
  }
  if ($("#inputAdress").val()) {

  }
}
