// Current Date
let dateToday = {};
dateToday.get_lower_limit = function () {
  return new Date().setHours(0, 0, 0, 0);
};
dateToday.get_upper_limit = function () {
  return new Date().setHours(23, 59, 59, 999);
};

module.exports = dateToday;
