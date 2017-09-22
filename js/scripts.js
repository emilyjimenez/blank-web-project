// Business logic goes here
var pong = function(userNumber) {
  if (userNumber % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
var ping = function(userNumber) {
  if (userNumber % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
// UI logic goes here
$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
      event.preventDefault();
      var userNumber = parseInt($("input#number").val());
      var three = ping(userNumber);
      var five = pong(userNumber);

      if (userNumber === 0) {
        alert("please use a number greater than zero")
      } else if (three === false && five === false) {
        $("#result").append(userNumber);
      } else if ((three === true) && (five === true)) {
          $("#result").append("ping-pong");
      } else if ((three === true) && (five === false)) {
        $("#result").append("ping");
      } else if ((three === false) && (five === true)) {
        $("#result").append("pong");
      }

      $("#result").show();
  });
});
