// Current Date 
let dateToday={};
dateToday.lower_limit = new Date().setHours(0,0,0,0);
dateToday.upper_limit = new Date().setHours(23, 59, 59, 999);
module.exports = dateToday;   