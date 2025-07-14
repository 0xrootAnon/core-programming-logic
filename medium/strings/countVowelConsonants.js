//count vowels/consonants 

function countVowelsConsonants(str) {
  let vowels = 0, consonants = 0;
  const s = str.toLowerCase();
  for (let char of s) {
    if (/[a-z]/.test(char)) {
      if ('aeiou'.includes(char)) vowels++;
      else consonants++;
    }
  }
  return { vowels, consonants };
}
