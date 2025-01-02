const stars = (n) => {
  let string = "";
  for (let i = n; i > 0; i--) {
    for (let j = 0; j <n-i; j++) {
      //for spaces
      string += " ";
    }
    for (let k = 1; k <= (2*i)-1 ; k++) {
      //for stars
      string += "*";
    }
    string += "\n";
  }
  return string;
};
console.log(stars(5));
