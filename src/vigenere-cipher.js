const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(reverse = true){
    this.reverse = reverse
  }
  encrypt(str, keyWord) {
    if(str === undefined || keyWord === undefined){
      throw new Error('Incorrect arguments!');
    }

    let alpha = []

    for(let i = 65; i < 91; i++){
        alpha.push(String.fromCharCode(i))
    }

    str = str.toUpperCase()
    keyWord = keyWord.toUpperCase()

    let strInd = []
    let keyInd = []
    for(let i = 0; i < str.length; i++){
        if(!alpha.includes(str[i])){
            strInd.push(str[i])
        }
        else{
            strInd.push(alpha.indexOf(str[i]))
        }
    }

    for(let i = 0; i < keyWord.length; i++){
        if(alpha.includes(keyWord[i])){
            keyInd.push(alpha.indexOf(keyWord[i]))
        }
    }

    let keyIndex = 0
    for(let i = 0; i < strInd.length; i++){
        if(typeof(strInd[i]) === 'number'){
            strInd[i] += keyInd[keyIndex]
            if(strInd[i] > 25){
                strInd[i] = alpha[strInd[i] - 26]
            }else{
                strInd[i] = alpha[strInd[i]]
            }
            
            keyIndex++
            if(keyIndex === keyInd.length){
                keyIndex = 0
            }
        }
        
    }


    if(this.reverse){
      return strInd.join('')
    }else{
      return strInd.reverse().join('')
    }
  }
  decrypt(str, keyWord) {
    if(str === undefined || keyWord === undefined){
      throw new Error('Incorrect arguments!');
    }
    let alpha = []

    for(let i = 65; i < 91; i++){
        alpha.push(String.fromCharCode(i))
    }
    str = str.toUpperCase()
    keyWord = keyWord.toUpperCase()

    let strInd = []
    let keyInd = []
    for(let i = 0; i < str.length; i++){
        if(!alpha.includes(str[i])){
            strInd.push(str[i])
        }
        else{
            strInd.push(alpha.indexOf(str[i]))
        }
    }
    for(let i = 0; i < keyWord.length; i++){
        if(alpha.includes(keyWord[i])){
            keyInd.push(alpha.indexOf(keyWord[i]))
        }
    }

    let keyIndex = 0
    for(let i = 0; i < strInd.length; i++){
        if(typeof(strInd[i]) === 'number'){
            strInd[i] = alpha[(strInd[i] - keyInd[keyIndex] + 26) % 26]
            
            keyIndex++
            if(keyIndex === keyInd.length){
                keyIndex = 0
            }
        }
        
    }
    if(this.reverse){
      return strInd.join('')
    }else{
      return strInd.reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
