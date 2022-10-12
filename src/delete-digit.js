const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let res = 0
  let arr = [...String(n)]
  for(let i = 0; i < arr.length; i++){
      let cur = arr.slice(0)
      cur.splice(i, 1)
      if(+cur.join('') > res){
          res = +cur.join('')
      }
  }
  return res
}

module.exports = {
  deleteDigit
};
