function countBs(string) {
  let numBs = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].indexOf("B") >= 0) numBs++;
  }
  return numBs;
}

function countChar(string, char) {
  let numChar = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].indexOf(char) >= 0) numChar++;
  }
  return numChar;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

/* Alt soln
if (string[i] == char) {
  numChar +=1;
}
*/
