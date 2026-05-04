rl.question("Enter a number: ", (num) => {
  num = Number(num);
  let isPrime = true;

  if (num <= 1) isPrime = false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  console.log(isPrime ? "Prime" : "Not Prime");
  rl.close();
});
