const solution = (numbers) => {
  var answer = 0;

  const numbersArray = numbers.split("");

  numbersArray.forEach((number) => {
    console.log(isPrime(number));
  });

  return answer;
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const numbers = "17";
solution(numbers);
