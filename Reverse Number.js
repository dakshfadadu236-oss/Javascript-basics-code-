rl.question("Enter a number: ", (num) => {
  num = Number(num);
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  console.log("Reversed:", rev);
  rl.close();
});
