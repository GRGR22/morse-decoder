const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
      for (let index = 0; index < expr.length; index+=10) {
        let binSimbol = expr.slice(index, index+10)
        if (binSimbol=='**********') {
          result+=' ';
          continue;
        }
        console.log(binSimbol);
        let morseSimbol='';
        for (let j = 0; j < binSimbol.length; j+=2) {      
          let morseBit = binSimbol.slice(j, j+2);
          if (morseBit == 00) continue;
          (morseBit == 10) ? morseSimbol+='.': morseSimbol+='-';      
          }
        for (const key in MORSE_TABLE) {
          if (key==morseSimbol) {
            result+=MORSE_TABLE[key];
            console.log(MORSE_TABLE[key])
            continue;
          }
        }    
      }
      return result;
    }

module.exports = {
    decode
}