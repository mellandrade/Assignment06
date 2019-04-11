/*eslint-env browser*/

//STEP 1
/*
function myFunc() {
    "use strict";
    var daysInMonth, today = new Date(), month = today.getMonth();
    window.console.log(daysInMonth(month + 1, today.getFullYear()));
}
function daysInMonth(month, year) {
    "use strict";
    return new Date(2019, 9, 0).getDate();
}
myFunc();
*/

//STEP 2
/*
var d = new Date(2019, 9, 25);
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
window.console.log(monthNames[d.getMonth() - 1]);
*/

//STEP 3
/*
var theWeekend = function (date) {
    "use strict";
    var d = new Date(date);
    if (d.getDay() === 6 || d.getDay() === 0) {
        return "Yes a weekend!";
    } else {
        return "Not a weekend.";
    }
};
window.console.log(theWeekend("Sept 13, 2019"));
*/

//STEP 4
/*
var d = new Date();
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
window.console.log(daysOfWeek[d.getDay() - 2]);
*/

//STEP 5
/*
var d = new Date();
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
window.console.log(daysOfWeek[d.getDay() - 1].charAt(0));
*/