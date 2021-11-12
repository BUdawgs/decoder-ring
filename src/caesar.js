// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift = 0, encode = true) { 
    if (shift == 0 || shift > 25 || shift < -25) return false; //code stops running here if shift is zero or outside of alphabet
    input = input.toLowerCase();
    const encodedMessage = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    const searchArray = [...alphabet,...alphabet,...alphabet];
    shift = (encode == true) ? shift : shift*(-1); //encoding and decoding shifts

    for(letter of input) {
      const letterPosition = alphabet.indexOf(letter);
      if (!alphabet.includes(letter)) {
        encodedMessage.push(letter);
      } else {
        encodedMessage.push(searchArray[letterPosition + 26 + shift]);
      }
    }
    return encodedMessage.join("");
  }
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
