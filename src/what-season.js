const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  /* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth */
  const s = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
    11: 'winter',
  };

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (
    Object.prototype.toString.call(date) !== '[object Date]' ||
    Object.keys(date).length > 0
  ) {
    throw new Error('Invalid date!');
  }

  return s[date.getMonth()];
}

module.exports = {
  getSeason
};
