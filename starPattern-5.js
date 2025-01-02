const stars = (n) => {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      //for spaces
      string += " ";
    }
    for (let k = 1; k <= i ; k++) {
      //for spaces
      string += "* ";
    }
    string += "\n";
  }
  return string;
};
console.log(stars(5));
