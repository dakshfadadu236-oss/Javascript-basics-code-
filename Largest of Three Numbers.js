rl.question("Enter three numbers (space separated): ", (input) => {
  let [a, b, c] = input.split(" ").map(Number);

  if (a > b && a > c) console.log("A is largest");
  else if (b > a && b > c) console.log("B is largest");
  else console.log("C is largest");

  rl.close();
});
