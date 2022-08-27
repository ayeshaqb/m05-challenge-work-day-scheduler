//Display current day at top of calendar
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));