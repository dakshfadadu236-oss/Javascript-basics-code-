rl.question("Enter a number: ", (num) => {
  let original = Number(num);
  num = Number(num);
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (original === rev) console.log("Palindrome");
  else console.log("Not Palindrome");

  rl.close();
});
