// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function generatePolybiusCipher(encode = true) { //helper function
    const alphabet = "abcdefgh(i/j)klmnopqrstuvwxyz";
    let row = 1, column = 1;
    const polybiusCipher = {};    
    for (let i = 0; i < alphabet.length; i++) {
      if (column == 6) {
        column = 1;
        row += 1;
      }
      if (alphabet[i] == "(") { 
        polybiusCipher[alphabet.substring(i, i + 5)] = `${column}${row}`;
        column += 1;
        i += 4;
      } else { 
        polybiusCipher[alphabet[i]] = `${column}${row}`;
        column += 1;
      }
    }
    if(encode === true) { 
      return polybiusCipher;
    } else { 
      for(const key in polybiusCipher) {
        polybiusCipher[polybiusCipher[key]] = key;
      }
      return polybiusCipher;
    }
  } 

  function polybius(input, encode = true) {
  
    if(encode === false && input.replace(" ","").length % 2 > 0) return false;

    input = input.toLowerCase();
    const polybiusCipher = generatePolybiusCipher(encode);
    const codeMessage = [];
    const encodeFlag = ((encode === true) ? 1 : 2);

    for (let i = 0; i < input.length; i += encodeFlag) {
      const searchItem = input.slice(i, i + encodeFlag); //1 letter for encoding and 2 numbers for decoding
      if(input[i] == " ") {
        codeMessage.push(input[i]); //for maintaining spaces
        i = i + (1 - encodeFlag); 
      } else if (polybiusCipher[searchItem]) {
        codeMessage.push(polybiusCipher[searchItem]);
      } else { //for combined letters only
        const cipherGroups = Object.keys(polybiusCipher);
        const foundKey = cipherGroups.find((key) => key.includes(searchItem));
        codeMessage.push(polybiusCipher[foundKey]);
      }
    }
    return codeMessage.join("").toString();
  }
  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
