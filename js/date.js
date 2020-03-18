
/* Milliseconds Per Day */
var _MS_PER_DAY = 1000 * 60 * 60 * 24;

/**
 * This function computes the difference in days
 * between the two given date objects
 */
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

/**
 * This function computes the age of an indivdiual
 */
function computeAge() {
  var bDate = document.getElementById("birthDate").value;
  var now = new Date();
  var then = new Date(bDate);
  var days = dateDiffInDays(then, now);
  var years = Math.floor(days / 365);
  var weeks = Math.floor( (days - (365 * years)) / 7 );
  var rDays = days - years * 365 - weeks * 7;
  var msg = document.getElementById("message");
  msg.innerHTML = "Greatings.  You are " + days + " days old.  That's " +
    years + " years, " + weeks + " weaks, and " + rDays + " days.";
}
