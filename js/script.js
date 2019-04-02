$(document).ready(function() {

  // function for filtering the table on home page
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // check the input from the form
  $("#submitForm").click(function() {
    var nameReg = /^[a-z ,.'-]+$/mi; // regex for name
    var addressReg = /^[A-Z]{1}?[a-z]+[\s]{1}?[0-9]/; // regex for address

    $("#passwordsNoMatchRegister").hide(); // hide on default

    if (!nameReg.test($("#inputName").val())) {
      $("#passwordsNoMatchRegister").show(); // show alert
    }

    if (!addressReg.test($("#inputAddress").val())) {
      $("#passwordsNoMatchRegister").show();
    }
  });

  // show information about name when hovering over the input of name
  $("#inputName").hover(function() {
      $('#collapseNameInfo').collapse('show');
    }, function() {
      $('#collapseNameInfo').collapse('hide');
    }
  );

  // show information about address when hovering over the input of address
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

  // function used for setting index to clicked item
  $(".list-group-item").click(function() {
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
  
  // function for handling click on previous
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

  // function for handling click on next
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

});
