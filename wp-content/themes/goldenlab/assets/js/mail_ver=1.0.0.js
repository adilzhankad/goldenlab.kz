  $(document).ready(function () {
    $(".form-tel").click(function () {
     
    }).mask("+7(999) 999-9999");
  });
$("#quiz-form").submit(function () { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "./mail.php", //Change
    data: th.serialize()
  }).done(function () {
    $('#modal-order').modal('hide');
    $('#modal-success').modal('show');   
    // alert("Thank you!");
    setTimeout(function () {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});