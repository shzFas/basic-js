const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if(Array.isArray(arr) === false){
      return false
  }
  let name = []
  for(let i = 0; i < arr.length; i++){
      if(typeof(arr[i]) === 'string'){
          arr[i] = arr[i].trim()
          if(/^[a-zA-Z]+$/.test(arr[i][0]) === true){
              name.push(arr[i][0].toUpperCase())
          }
      }
  }
  return name.sort().join('')
}

module.exports = {
  createDreamTeam
};
