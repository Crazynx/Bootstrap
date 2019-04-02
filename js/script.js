$(document).ready(function() {

  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

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

  $(".list-group-item").click(function() { // function used for setting index to clicked item
    $(".tab-pane").removeClass("active"); // remove active from tabs, otherwise there will be multiple categories shown
    switch ($(this).attr('id')) {
      case "generalItem":
        index = 0;
        $(tabIds[0]).addClass("active");
        break;

      case "eventsItem":
        index = 1;
        $(tabIds[1]).addClass("active");
        break;

      case "versionsItem":
        index = 2;
        $(tabIds[2]).addClass("active");
        break;

      case "snapshotsItem":
        index = 3;
        $(tabIds[3]).addClass("active");
        break;
    }
  });


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
