/*
  Given an integer, 'n', print its first 10 multiples. Each multiple 'n * i' (where 1 <= 'i' <= 10) should be printed on a new line in the form: "n x i = result".
*/

function output(number) {
  for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
  };
}

output(2)