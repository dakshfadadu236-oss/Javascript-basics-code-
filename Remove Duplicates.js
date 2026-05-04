rl.question("Enter numbers (space separated): ", (input) => {
  let arr = input.split(" ").map(Number);
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  console.log("Unique:", unique);
  rl.close();
});
