$(document).ready(function() {

  function validateInput() {
    var nameReg = /^[a-z ,.'-]+$/mi;
    var addressReg = /^[A-Z]{1}?[a-z]+[\s]{1}?[0-9]/;

    $("#passwordsNoMatchRegister").hide(); // hide on default

    if (!nameReg.test($("#inputName").val())) {
      $("#passwordsNoMatchRegister").show(); // show alert
    }

    if (!addressReg.test($("#inputAddress").val())) {
      $("#passwordsNoMatchRegister").show();
    }
  }

  $("#inputName").hover(function() {
      $('#collapseNameInfo').collapse('show');
    }, function() {
      $('#collapseNameInfo').collapse('hide');
    }
  );

  $("#inputAddress").hover(function() {
      $('#collapseAddressInfo').collapse('show');
    }, function() {
      $('#collapseAddressInfo').collapse('hide');
    }
  );

  // arrays filled with ids, used for hiding and showing
  var itemIds = ["#generalItem", "#eventsItem", "#versionsItem", "#snapshotsItem"];
  var tabIds = ["#generalTab", "#eventsTab", "#versionsTab", "#snapshotsTab"]
  var index = 0; // default index


  $("#nextItem").click(function() {
    if (index < 3) {
      currentIndex = index; // used for hiding current item and tab
      index++;
      $(itemIds[currentIndex]).removeClass("active"); // remove active highlight
      $(tabIds[currentIndex]).removeClass("active"); // hides tab
      $(itemIds[index]).addClass("active"); // add highlight
      $(tabIds[index]).addClass("active"); // show tab
    }
  });

  $("#previousItem").click(function() {
    if (index > 0) {
      currentIndex = index; // used for hiding current item and tab
      index--;
      $(itemIds[currentIndex]).removeClass("active"); // remove active highlight
      $(tabIds[currentIndex]).removeClass("active"); // hides tab
      $(itemIds[index]).addClass("active"); // add highlight
      $(tabIds[index]).addClass("active"); // show tab
    }
  });
});
